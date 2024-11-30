import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import data from "../../../consts/availables";

import BathshebaJPG from "../../../../src/assets/images/bathsheba.jpg";

import Images from "../../../components/Carousel";
import { Container, BackButton, BackButtonIcon, Title, OwnerDescription, Details, HouseDescription, DescriptionContent, TextHouse, More, Bathsheba, Owner, OwnerName, OwnerComment2, OwnerData } from "./styled";

const View = () => {
  const navigate = useNavigate();
  const params = useParams();

  const realEstate = React.useMemo(() => {
    return data.find((item) => item.id === params.realEstate);
  }, [params.realEstate]);

  return (
    <Container>
      <BackButton onClick={() => navigate("/availables")}>  
        <BackButtonIcon /> Voltar
      </BackButton>

      <Title>{realEstate.title}</Title>

      <Images images={realEstate.images} />

      <OwnerDescription>{realEstate.ownerDescription}</OwnerDescription>

      <Details>{realEstate.details}</Details>

      <HouseDescription>Descrição do Imóvel:</HouseDescription>

      <DescriptionContent>
        <TextHouse>Você pode olhar para a Casa de Campo, que por um breve período pertenceu à família Perron e vê-la como uma simples residência rural, aninhada nas florestas de Rhode Island. Com sua fachada de madeira antiga, muitos poderiam pensar que se trata de um refúgio acolhedor. Mas não se engane— PORQUE ELA É MINHA! Somente os verdadeiros corajosos ousaram atravessar minha porta de entrada e descobrir os segredos do meu lar.
        <br /><br />Prepare-se para ouvir passos ecoando sozinhos nos corredores, e meus malditos sussurros misteriosos que surgirão do nada. Para sua estadia, fiz questão de evocar sombras estranhas dançantes e figuras perturbadoras que podem ser vistas entre as árvores ao redor. À noite, você escutará uma melodia distante de piano ressoando, mesmo sem a presença do instrumento por perto, esteja familiarizado também com as portas que se fecham por conta própria, mergulhando os cômodos em uma escuridão profunda e pavorosa.
        </TextHouse>
      
        <TextHouse>Caso sinta uma presença fria e opressora te observando de perto como algo que nunca descansa, não se questione muito, sou apenas eu - garantindo que você não está arruinando a minha casa. Os objetos desaparecem e reaparecem em lugares diferentes, assim, você terá uma decoração distinta por todos os dias de sua estadia! Nas horas mais escuras, o choro baixo e desesperado das almas enforcadas do meu porão ecoam das profundezas da casa mas não adianta tentar, você não vai conseguir encontrar a origem do som.
        <br /><br /> Muitos dizem que os sussurros que ouvem são de boas-vindas, mas cuidado—entrar aqui é garantido, mas a saída nem sempre é. Esta casa guarda meus segredos, e nem todos que entram conseguem voltar.</TextHouse>
      </DescriptionContent>

      <More>Mais sobre o proprietário:</More>      
        <Owner>
          <Bathsheba src={BathshebaJPG} />  
          <OwnerData>
            <OwnerName>Bathsheba Sherman</OwnerName>
            <OwnerComment2>Muitos já tentaram se livrar de mim; padres, exorcistas e até o casal Warren, mas são um bando de incompetentes, pois continuo aqui! Você acha que me conhece por aquele filme idiota... Não poderia estar mais enganado! 
            <br /><br />Se estiver procurando por mim, não precisa se esforçar tanto, estarei logo atrás de você.
            </OwnerComment2>
          </OwnerData>     
        </Owner>  
    
    </Container>
  );
};

export default View;
