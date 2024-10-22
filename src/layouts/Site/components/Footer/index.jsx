import LogoPNG from "../../../../assets/images/logo.png";
import InstaPNG from "../../../../assets/images/insta.png";
import FacePNG from "../../../../assets/images/facebook.png";
import LinkedinPNG from "../../../../assets/images/linkedin.png";
import BlueskyPNG from"../../../../assets/images/bluesky.png";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.Container>
      <S.Menus>
        <S.Menu>Contato</S.Menu>
        <S.Menu>Notícias</S.Menu>
        <S.Menu>Política de privacidade</S.Menu>
      </S.Menus>

      <S.LogoContent>
        <S.Logo src={LogoPNG} />
        <S.Insta src={InstaPNG} />
        <S.Face src={FacePNG} />
        <S.Linkedin src={LinkedinPNG} />
        <S.Bluesky src={BlueskyPNG} />
      </S.LogoContent>
    </S.Container>
  );
};

export default Footer;
