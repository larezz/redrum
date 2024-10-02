import LogoPNG from "../../../../assets/images/logo.png";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.Container>
      <S.Menus>
        <S.Menu>Aluguéis</S.Menu>
        <S.Menu>Quem somos nós</S.Menu>
        <S.Menu>Dúvidas recentes</S.Menu>
        <S.Menu>Contato</S.Menu>
        <S.Menu>Notícias</S.Menu>
        <S.Menu>Política de privacidade</S.Menu>
      </S.Menus>

      <S.LogoContent>
        <S.Logo src={LogoPNG} />
      </S.LogoContent>
    </S.Container>
  );
};

export default Footer;
