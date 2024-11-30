import LogoPNG from "../../../../assets/images/logo.png";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Container>
      <a href="/">
        <S.Logo src={LogoPNG} />
      </a>

      <S.Menus>
        <S.Menu href="/availables">Aluguéis</S.Menu>

        <S.Menu href="/news">Notícias</S.Menu>

        <S.Menu>
          <S.Button>
            <S.Icon />
            Entrar
          </S.Button>
        </S.Menu>
      </S.Menus>
    </S.Container>
  );
};

export default Header;
