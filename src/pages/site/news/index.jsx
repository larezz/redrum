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

            <Column>
              <Image src={CasaNosferatu} />
            </Column>
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default News;
