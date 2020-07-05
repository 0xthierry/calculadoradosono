import React from 'react';
import ContentSection from '../components/ContentSection';
import DefaultLayout from '../components/DefaultLayout';

const Policy: React.FC = () => {
  return (
    <DefaultLayout>
      <ContentSection
        content={{
          title: 'Políticas',
          description: [
            `A privacidade dos visitantes do calculadoradosono.com é muito importante para nós e estamos empenhados em assegurá-la. Essa política e termos explicam o que fazemos com suas informações pessoais.`,
            `Ao usar o calculadoradosono.com, você consente a coleção e uso de dados pessoais descritos abaixo.`,
          ],
        }}
      />
      <ContentSection
        content={{
          title: 'Política de privacidade',
          description: [
            `calculadoradosono.com pode utilizar cookies e/ou
            web beacons quando um usuário tem acesso às páginas. Os cookies que podem
            ser utilizados associam-se (se for o caso) unicamente com o navegador de
            um determinado computador.`,
            `Cookies são pequenos arquivos de texto colocados em sua máquina para
            ajudar o website a prover uma melhor experiência do usuário. Em geral,
            cookies armazenam preferências do usuário, armazenam informação de coisas
            como carrinhos de compras e provêem dados do usuário anonimamente à
            aplicações de terceiros como o Google Analytics. Por via de regra, cookies
            melhoram a experiência de navegação. No entanto, você pode preferir
            desabilitar os cookies desse website ou de outros. A maneira mais eficaz
            de fazer isso é desabilitando cookies no seu navegador. Sugerimos você
            procurar a seção Ajuda do seu navegador para isso.`,
            `Os cookies que são utilizados no calculadoradosono.com podem ser
            instalados pelo mesmo, os quais são originados dos distintos servidores
            operados por este, ou a partir dos servidores de terceiros que prestam
            serviços e instalam cookies e/ou web beacons (por exemplo, os cookies que
            são empregados para prover serviços de publicidade ou certos conteúdos
            através dos quais o usuário visualiza a publicidade ou conteúdos em tempo
            pré determinados).`,
            `Usuário tem a possibilidade de configurar seu navegador para ser avisado,
            na tela do computador, sobre a recepção dos cookies e para impedir a sua
            instalação no disco rígido. As informações pertinentes a esta configuração
            estão disponíveis em instruções e manuais do próprio navegador.`,
            `Usamos empresas de publicidade de terceiros para veicular anúncios durante
            a sua visita ao calculadoradosono.com. Essas empresas podem usar
            informações (que não incluem o seu nome, endereço de e-mail ou
            número de telefone) sobre suas visitas a este e a outros websites a fim de
            exibir anúncios relacionados a produtos e serviços de seu interesse.`,
          ],
        }}
      />
      <ContentSection
        content={{
          title: 'Mais informações sobre dados pessoais',
          description: [
            `Nós não vendemos ou alugamos dados dos usuários a terceiros para qualquer propósito. Os únicos usos de dados estão mencionados nessa política. O usuário é dono de seus dados e pode optar por não compartilhá-los desabilitando os cookies de seu navegador.`,
          ],
        }}
      />
      <ContentSection
        content={{
          title: 'Alterações',
          description: [
            `Poderemos atualizar esta política de privacidade e termos de uso de tempos em tempos, portanto você deverá verificá-la periodicamente`,
          ],
        }}
      />
      <ContentSection
        content={{
          title: 'Informação de contato',
          description: [
            `Dono e desenvolvedor: Thierry Santos`,
            `Email de contato: thierrysantoos123@gmail.com`,
          ],
        }}
      />
    </DefaultLayout>
  );
};

export default Policy;
