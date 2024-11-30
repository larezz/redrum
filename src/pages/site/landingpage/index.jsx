import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
  Container,
  MainContainer,
  LandingPageImage,
  Text,
  Text1,
  Text2,
  Text3,
  Text4,
  SecondaryContainer,
  Highlight,
  Availables,
  NewsContainer,
  NewsImage,
  NewsTexts,
  NewsText1,
  NewsText2,
  NewsText3,
  CustomSlide,
  SeeAllButton,
  ContentSeeAll,
  NewsImageContent,
} from "./styled";

import data from "../../../consts/availables";
import RealEstate from "../../../components/RealEstate";
import LandingJPG from "../../../assets/images/landing-image.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <MainContainer>
        <LandingPageImage src={LandingJPG} />
        <Text>
          <Text1>MAIS DO QUE UM ALUGUEL DE TEMPORADA</Text1>

          <Text2>UMA EXPERIÊNCIA</Text2>

          <SecondaryContainer>
            <Text3>PARA A</Text3>

            <Text4>VIDA</Text4>
          </SecondaryContainer>
        </Text>
      </MainContainer>

      <Highlight>Destaques:</Highlight>

      <Availables>
        <Carousel
          infinite
          centerMode
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1000 },
              items: 3,
            },
          }}
        >
          {data.map((item) => (
            <CustomSlide>
              <RealEstate
                width="100%"
                data={item}
                onClick={
                  item.id
                    ? () => navigate(`/availables/view/${item.id}`)
                    : undefined
                }
              />
            </CustomSlide>
          ))}
        </Carousel>

        <ContentSeeAll>
          <SeeAllButton href="/availables">Ver Todas</SeeAllButton>
        </ContentSeeAll>
      </Availables>

      <NewsContainer>
        <NewsImageContent>
          <NewsImage src={LandingJPG} />
        </NewsImageContent>

        <NewsTexts>
          <NewsText1>Casa leiloada por</NewsText1>

          <NewsText2>NOSFERATU</NewsText2>

          <NewsText3>
            O magnata Conde Orlok, atualmente sob suspeita de envolvimento em
            desaparecimentos recentes, leiloará sua mansão, uma propriedade que
            pertence à família Orlok há várias gerações.
          </NewsText3>
        </NewsTexts>
      </NewsContainer>
    </Container>
  );
};

export default LandingPage;
