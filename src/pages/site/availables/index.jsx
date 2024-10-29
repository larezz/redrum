import { useNavigate } from "react-router-dom";

import data from "../../../consts/availables";
import RealEstate from "../../../components/RealEstate";
import * as S from "./styled";

const Availables = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        {data.map((item) => (
          <RealEstate
            data={item}
            onClick={
              item.id
                ? () => navigate(`/availables/view/${item.id}`)
                : undefined
            }
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Availables;
