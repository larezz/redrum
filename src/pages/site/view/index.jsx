import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import data from "../../../consts/availables";

import Images from "../../../components/Carousel";
import { Container, BackButton, BackButtonIcon, Title } from "./styled";

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

      <span>{params.realEstate}</span>

      <span>{realEstate.ownerDescription}</span>
      <span>linha vermelha</span>
      <span>descrição</span>
      <span>linha vermelha</span>
      <span>proprietário</span>
    </Container>
  );
};

export default View;
