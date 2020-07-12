import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import Wave from '../components/Wave';
import DefaultLayout from '../components/DefaultLayout';
import ContentSection from '../components/ContentSection';

const Home: React.FC = () => {
  return (
    <>
      <Wave>
        <DefaultLayout>
          <PrincipalSection />
        </DefaultLayout>
        <ContentSection
          content={{
            title: 'COMO A CALCULADORA DO SONO FUNCIONA ?',
            description: [
              'De acordo com os ciclos do sono, é calculado um tempo base para a obtenção de uma noite de sono proveitosa, em que passa-se por todos os ciclos, completando-os. Você sabia que se acordar no meio de um estágio pode se sentir cansado durante o resto do dia, e até mesmo não se lembrar de fatores que ocorram com você?',
              'Sendo assim, a calculadora do sono tem como intuito principal calcular de forma objetiva e rápida quais as melhores horas para se acordar, garantindo o bom proveito de todos os ciclos do sono. Convidando à cada pessoa para que conheça seu próprio ciclo do sono e assim encontrar de forma eficiente o melhor horário para garantir seu descanso e tornar sua rotina mais produtiva.',
            ],
          }}
        />
        <ContentSection
          content={{
            title: 'O QUE SÃO OS CICLOS DO SONO ?',
            description: [
              'Ciclos do sono são basicamente intervalos de tempo dos processos do sono. Contamos com o estágio NREM (sem movimento rápido dos olhos) que é caracterizado em grau I, II, III e IV, e o estágio REM (possui movimento rápido dos olhos) caracterizado em grau I.',
              'Sendo o estágio NREM aquele em que em seu primeiro grau dormimos de forma parecida á vigília, ou seja, quando ainda estamos em um estado superficial, sendo assim passando por seus estágios de forma a aumentar as ondas lentas do cérebro. O estagio REM é aquele em que ocorrem os sonhos e a possibilidade de emitirmos ruídos, sendo este um estágio em que respiramos de forma irregular e que temos maior facilidade em acordar. Este estágio conta também como uma forma que o cérebro possui de repassar os acontecimentos do dia e os gravar na memória.',
            ],
          }}
        />
        <ContentSection
          content={{
            title: 'QUANTAS HORAS PRECISO DORMIR ?',
            description: [
              'Em média cada ciclo possui cerca de 90 minutos, considerando o ideal de completar 5 a 6 ciclos durante uma noite de sono, assim tendo um proveito de 7 à 8 horas por dia de descanso, de forma a garantir o cumprimento de todos os ciclos e estágios.',
              'Em média, um ciclo do sono dura em torno de 90 minutos, sendo assim tendo 5 ciclos completos, o ideal é dormir de 7 a 8 horas por dia. Considerando que cada pessoa possui seu ritmo diário de afazeres e movimentações neurológicas diferentes, vale ressaltar mais uma vez a importância de conhecer a si mesmo.',
            ],
          }}
        />
      </Wave>
    </>
  );
};

export default Home;
