import {
  Container,
  BackgroundGradient,
  HeaderContent,
  Header,
  Content,
  Row,
  Column,
  Image,
} from "./styled";
import CasaNosferatu from "../../../assets/images/familia_nosferatu.png";
import PessoasJPG from "../../../assets/images/pessoas.jpg";


const News = () => {
  return (
    <>
      <BackgroundGradient />

      <Container>
        <HeaderContent>
          <Header>
            <span className="smaller">Leilão da </span>
            <span className="biger">FAMÍLIA NOSFERATU</span>
          </Header>
        </HeaderContent>

        <Content>
          <Row>
            <Column>
              <Image src={CasaNosferatu} />
            </Column>

            <Column>
              No dia 30 de setembro de 2024, o Conde Orlok surpreendeu a todos
              ao anunciar o leilão de sua famosa mansão, uma propriedade que foi
              passada de geração em geração na família. <br />
              <br />
              Localizada no alto dos Alpes, no interior da Grã-Bretanha, a
              mansão é envolta em uma rica história que remonta a séculos. Ao
              longo dos anos, diversas lendas e boatos se acumularam em torno de
              sua estrutura imponente, alimentando o medo e a curiosidade dos
              moradores da cidade. A aura de mistério que permeia o lugar faz
              com que muitos hesitem em se aproximar do estabelecimento,
              tornando-o um ícone enigmático da região.
            </Column>
          </Row>
          <Row>
            <Column>
            O leilão da mansão do Conde Orlok foi inaugurado em meados de 
            setembro e está agendado para o dia 31 de outubro, uma quinta-feira. 
            Este evento grandioso está sendo organizado por uma influente família 
            de políticos da Grã-Bretanha, inspirada por filmes de terror clássicos. 
            O objetivo do leilão é apoiar diversas ONGs e instituições de caridade 
            locais, especialmente após a família ter se envolvido em alguns 
            escândalos no início deste ano.
            <br /><br />
            Esse leilão promete ser o maior evento da alta sociedade 
            em anos, contando com a participação de celebridades como Jack 
            Torrance, Lorraine Warren e o prefeito da cidade. Além disso, uma 
            impressionante coleção de peças de alto valor está sendo catalogada, 
            tornando este evento imperdível para os entusiastas da arte e da história.
            </Column>

            <Column>
            O leilão será realizado no grandioso anfiteatro localizado no centro da 
            cidade. Para participar, todos os interessados deverão pagar uma taxa de 
            entrada de 666 reais. Essa taxa é necessária, pois algumas horas antes do 
            evento principal, haverá uma festa de recepção exclusiva para os convidados 
            do leilão, proporcionando uma excelente oportunidade para pessoas 
            influentes trocarem contatos e fortalecerem suas redes de relacionamento.
            <br /><br />
            No entanto, essa festa não foi concebida para a participação de pessoas 
            de classe média ou baixa. Para garantir que todos possam acompanhar 
            o evento, os organizadores estão criando uma área externa ao anfiteatro, 
            onde o público terá a chance de ver os produtos que serão leiloados em 
            primeira mão.
            </Column>
          </Row>
          <Row>
            <Column>
            A área de acesso ao público geral será situada na praça em frente 
            ao anfiteatro, onde diversas barracas oferecerão produtos locais e 
            opções de comidas para degustação.
            <br /><br />
            Além disso, o próprio anfiteatro contará com um grande 
            projetor, transmitindo ao vivo os produtos que serão leiloados. 
            O telão estará posicionado em frente a uma fonte central dentro 
            do parque, que será equipada com numerosas cadeiras, permitindo 
            que os visitantes desfrutem do leilão de maneira confortável e 
            envolvente.
            </Column>

            <Column>
              <Image src={PessoasJPG} />
            </Column>
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default News;
