import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import * as S from "./styled";

const Site = () => {
  return (
    <S.Container>
      <S.Content>
        <Header />

        <S.Body>
          <Outlet />
        </S.Body>
        <Footer />
      </S.Content>
    </S.Container>
  );
};

export default Site;
