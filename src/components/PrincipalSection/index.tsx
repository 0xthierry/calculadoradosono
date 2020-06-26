/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { format } from 'date-fns';
import TimeKeeper from 'react-timekeeper';
import Wrapper from '../Wrapper';
import Button from '../Button';
import * as S from './styles';
import sleepCycle, {
  IResponse as IResponseSleepCycle,
} from '../../helpers/sleepCycle';

const PrincipalSection: React.FC = () => {
  const [state, setState] = useState({
    hour: 0,
    minute: 0,
    period: 'am',
  });
  const [cycles, setCycles] = useState<IResponseSleepCycle[]>([]);

  const handleCalculate = () => {
    setCycles(
      sleepCycle({
        hour: state.hour,
        minute: state.minute,
        period: state.period,
      }),
    );
  };

  return (
    <Wrapper>
      <S.Container>
        <S.Content>
          <h2>Para acordar às</h2>
          <S.TimerContainer>
            <TimeKeeper
              time={{
                hour: state.hour,
                meridiem: state.period,
                minute: state.minute,
              }}
              onChange={({ hour12, minute, meridiem }) =>
                setState(prevState => ({
                  ...prevState,
                  minute,
                  hour: hour12,
                  period: meridiem,
                }))}
              hour24Mode
              coarseMinutes={15}
              forceCoarseMinutes
              switchToMinuteOnHourSelect
            />
          </S.TimerContainer>
          <S.CalculateContainerButton>
            <Button type="button" variant="filled" onClick={handleCalculate}>
              Preciso ir dormir às
            </Button>
          </S.CalculateContainerButton>
          {cycles.length > 0 && (
            <S.CardGroupContainer>
              {cycles.map(({ cycle, hours, suggested, time }) => (
                <S.CardContainer>
                  <div>
                    <strong>{format(time, 'HH:mm')}</strong>
                    {suggested && <strong>Sugerido</strong>}
                  </div>
                  <p>
                    {hours} horas com {cycle} {cycle > 1 ? 'ciclos' : 'ciclo'}{' '}
                    de sono
                  </p>
                </S.CardContainer>
              ))}
            </S.CardGroupContainer>
          )}
        </S.Content>
      </S.Container>
    </Wrapper>
  );
};

export default PrincipalSection;
