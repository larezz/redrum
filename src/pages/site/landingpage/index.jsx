import { Container, MainContainer, LandingPageImage, Text, Text1, Text2, Text3, Text4, SecondaryContainer, Highlight, Availables, NewsContainer, NewsImage, NewsTexts, NewsText1, NewsText2, NewsText3 } from "./styled";

import LandingJPG from "../../../assets/images/landing-image.jpg";

const LandingPage = () => {

    return (
        <Container>
            <MainContainer>
                <LandingPageImage src={LandingJPG} />
                <Text>
                    <Text1>
                        MAIS DO QUE UM ALUGUEL DE TEMPORADA

                    </Text1>
                    <Text2>
                        UMA EXPERIÊNCIA
                    </Text2>
                    <SecondaryContainer>
                        <Text3>
                            PARA A
                        </Text3>
                        <Text4>
                            VIDA
                        </Text4>
                    </SecondaryContainer>
                        
                </Text>
            </MainContainer>   
            <Highlight>
                Destaques:    
            </Highlight>  
            <Availables>
                Destaque das melhores residências
            </Availables>
            <NewsContainer>
                noticias. aqui vai a imagem 
                <NewsImage src={LandingJPG} />
                <NewsTexts>
                    <NewsText1>
                        Casa leiloada por
                    </NewsText1>
                    <NewsText2>
                        NOSFERATU
                    </NewsText2>
                    <NewsText3>
                        O magnata Conde Orlok, atualmente sob suspeita de envolvimento em desaparecimentos recentes, leiloará sua mansão, uma propriedade que pertence à família Orlok há várias gerações.
                    </NewsText3>
                </NewsTexts>
            </NewsContainer>
        </Container>
    )
    
    }
    
    export default LandingPage