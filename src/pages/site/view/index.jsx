import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import data from "../../../consts/availables";

import Images from "../../../components/Carousel";
import {
  Container,
  BackButton,
  BackButtonIcon,
  Title,
  OwnerDescription,
  Details,
  HouseDescription,
  DescriptionContent,
  TextHouse,
  More,
  Bathsheba,
  Owner,
  OwnerName,
  OwnerComment2,
  OwnerData,
} from "./styled";

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

      <OwnerDescription>{realEstate.locale}</OwnerDescription>

      <Details>{realEstate.details}</Details>

      <HouseDescription>Descrição do Imóvel:</HouseDescription>

      <DescriptionContent>
        <TextHouse
          dangerouslySetInnerHTML={{ __html: realEstate.descriptionColumn1 }}
        />
        <TextHouse
          dangerouslySetInnerHTML={{ __html: realEstate.descriptionColumn2 }}
        />
      </DescriptionContent>

      <More>Mais sobre o proprietário:</More>
      <Owner>
        <Bathsheba src={realEstate.ownerImage} />
        <OwnerData>
          <OwnerName>{realEstate.ownerName}</OwnerName>
          <OwnerComment2
            dangerouslySetInnerHTML={{ __html: realEstate.ownerDescription }}
          />
        </OwnerData>
      </Owner>
    </Container>
  );
};

export default View;
