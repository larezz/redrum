import data from "../../../consts/availables.json";
import RealEstate from "../../../components/RealEstate";
import * as S from "./styled";

const Availables = () => {
  return (
    <S.Container>
      <S.Content>
        {data.map((item) => (
          <RealEstate data={item} />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Availables;
