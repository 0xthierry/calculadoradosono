/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Select from 'react-select';
import { format } from 'date-fns';
import Wrapper from '../Wrapper';
import Button from '../Button';
import * as S from './styles';
import { HOURS, MINUTES, PERIODS } from './settings';
import sleepCycle, {
  IResponse as IResponseSleepCycle,
} from '../../helpers/sleepCycle';

const PrincipalSection: React.FC = () => {
  const [state, setState] = useState({
    hour: undefined,
    minute: undefined,
    period: undefined,
  });
  const [cycles, setCycles] = useState<IResponseSleepCycle[]>([]);

  const handleCalculate = () => {
    if (state.hour && state.minute && state.period) {
      setCycles(
        sleepCycle({
          hour: state.hour?.value,
          minute: state.minute?.value,
          period: state.period?.value,
        }),
      );
    }
  };

  return (
    <Wrapper>
      <S.Container>
        <S.Content>
          <h2>Para acordar às</h2>
          <S.SelectContainer>
            <Select
              value={undefined}
              name="hour"
              onChange={e => setState(prev => ({ ...prev, hour: e }))}
              options={HOURS}
              placeholder="Hora"
            />
            <Select
              value={state.minute}
              name="minute"
              onChange={e => setState(prev => ({ ...prev, minute: e }))}
              options={MINUTES}
              placeholder="Minutos"
            />
            <Select
              value={state.period}
              name="period"
              onChange={e => setState(prev => ({ ...prev, period: e }))}
              options={PERIODS}
              placeholder="AM"
            />
          </S.SelectContainer>
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
                  <strong>{format(time, 'hh:mm a')}</strong>
                  {suggested &&<strong>Sugerido</strong>}
                </div>
                <p>{hours} horas com {cycle} {cycle > 1 ? 'ciclos' : 'ciclo'} de sono</p>
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
