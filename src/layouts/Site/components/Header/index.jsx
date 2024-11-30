import LogoPNG from "../../../../assets/images/logo.png";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Container>
      <a href="/"><S.Logo src={LogoPNG} /></a>

      <S.Menus>
        <S.Menu>Aluguéis</S.Menu>

        <S.Menu>Quem nós somos?</S.Menu>

        <S.Menu>Dúvidas Recentes</S.Menu>

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
