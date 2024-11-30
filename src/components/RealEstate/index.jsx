import * as S from "./styled";

const RealEstate = ({ data, onClick, width }) => {
  return (
    <S.Container width={width} onClick={onClick}>
      <S.ImageContent>
        <S.Image src={data?.images?.[0]} />

        <S.Type>{data.type}</S.Type>

        <S.Title>{data.title}</S.Title>
      </S.ImageContent>

      <S.Content>
        <S.Amount>
          {data.amount} por
          <S.AmountIcon />
        </S.Amount>

        <S.Details>{data.details}</S.Details>

        <S.Description>{data.description}</S.Description>
      </S.Content>
    </S.Container>
  );
};

export default RealEstate;
