import React from 'react';
import ContentSection from '../components/ContentSection';
import DefaultLayout from '../components/DefaultLayout';
import References from '../components/References';

const KnowMore: React.FC = () => {
  return (
    <DefaultLayout>
      <ContentSection
        content={{
          title: 'COMO O CICLO DE SONO FUNCIONA ?',
          description: [
            'O sono é um estado fisiológico que ocorre de forma cíclica em diversas espécies de seres vivos, inclusive os seres humanos. O sono é um momento em que o corpo relaxa e descansa suas funções, ficando em estado de repouso em que as movimentações físicas são mínimas, de acordo com cada estágio do sono pode aumentar o diminuir a dificuldade de se acordar.',
            'Este fenômeno não é de fácil explicação, diversos estudos foram realizados com o intuito de compreender como o sono se apresenta em suas diversas faces, sendo constatado assim que não é uma ação realizada de forma homogênea.',
            'Em 1938, Nathaniel Kleitman junto com colaborados da Universidade de Chicago, começou diversas pesquisas através de exames de eletroencefalograma em relação ao sono. Sendo hoje em dia considerado o pai das pesquisas do sono.',
            'Em suas pesquisas começou a observar e relatar movimentos dos globos oculares durante determinadas fases do sono. Sendo inicialmente desacreditado, já que muitos acreditavam que o sono era algo “linear” em que somente passáva-se pelo sono profundo. Após muitas pesquisas conseguiu comprovar sua tese, em que se deu o nome de REM, que no inglês seria rapid eye movement = movimento ocular rápido, e possuindo o estágio NREM que seria o não movimento ocular rápido.',
            'De forma simplificada, os ciclos do sono se iniciam, de acordo com Kleitman, em NREM, que possui o grau I, II, III e IV. Sendo o estágio I aquele em que possuímos certo estado de vigília, ou seja, dormimos de forma superficial e pode durar cerca de 05 à 10 minutos em seu primeiro ciclo, passando assim gradativamente para os outros estágios de forma gradual e em que ocorre o aumento das ondas lentas do cérebro, chegando ao estágio III e IV em que as ondas lentas são maiores, sendo o estágio III o que dormimos mais  profundamente e calmamente, de forma a regular a respiração e os movimentos corporais.',
            'O segundo estágio é o estágio REM, que possui o grau I, sendo caracterizado pela parte do sono onde temos nossos sonhos, possuímos maior chance de sermos acordados, temos a respiração irregular e a fase em que o cérebro se prepara para repassar os acontecimentos diários e guardá-los na memória, como um filme, sendo assim, se acordarmos abruptamente antes de completarmos esta fase, podemos ter o sentimento de amnesia leve, em que acordamos sem nos lembrarmos de alguma coisa. Isso ocorre principalmente em cochilos durante à tarde em que ocorre a não finalização dos ciclos e a pessoa muitas vezes pode acordar confusa em relação a diversos fatores.',
            'No estágio REM Kleitman observou a grande movimentação dos globos oculares, em que podem ser descritos em decorrências de sonhos inclusive, em que nosso corpo fisicamente não participa todavia nosso cérebro recebe  imagens vívidas gerando até mesmo sentimentos tanto de afeto quanto de medo dependendo da procedência destes sonhos.',
            'Perante diversas pesquisas realizadas para o entendimento do sono, foi criada a Medicina do Sono, tendo criadas assim as classificações internacionais dos distúrbios do sono, sendo a primeira em 1990 e a classificação atual sendo a do ano de 2005. Em que são realizados exames e monitoramento do sono para a melhor explicação e indicação para uma melhor noite de sono.',
            'É considerado uma noite de sono saudável quando completamos de 5 à 6 ciclos de sono, totalizando em cerca de 7 a 8 horas. Não deixando de ressaltar a não homogeneidade em relação aos ciclos do sono, considerando possíveis doenças que podem interferir no processos, o ritmo neurológico de cada pessoa e suas atividades físicas pessoais, o que difere de pessoa para pessoa. Deixa em ressalva a importância da adaptação à uma rotina relacionada à hora de ir dormir e a de despertar, gerando assim um costume fisiológico no corpo, que gerará a diminuição do cansaço na hora de acordar.',
            'A calculadora do sono convida você a montar sua rotina do sono e a conhecer a si mesmo de forma prática e eficiente, garantindo seu descanso e o melhor desempenho de suas tarefas no dia a dia.',
          ],
        }}
      />
      <References />
    </DefaultLayout>
  );
};

export default KnowMore;
