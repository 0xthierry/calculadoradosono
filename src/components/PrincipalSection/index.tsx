import React, { useState } from 'react';
import Select from 'react-select';
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
        <S.LeftContent>
          <h2>Por que dormir mal está atrapalhando sua vida</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <Button type="button" variant="outlined">
            Saiba mais
          </Button>
        </S.LeftContent>
        <S.RightContent>
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
              Quando preciso ir dormir
            </Button>
          </S.CalculateContainerButton>
          <S.CardGroupContainer>
            <S.CardContainer>
              <div>
                <strong>12:15 AM</strong>
                <strong>Sugerido</strong>
              </div>
              <p>7.5 hrs of sleep, 5 sleep cycles</p>
            </S.CardContainer>
          </S.CardGroupContainer>
        </S.RightContent>
      </S.Container>
    </Wrapper>
  );
};

export default PrincipalSection;
