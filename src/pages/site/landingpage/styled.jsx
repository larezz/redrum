import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const LandingPageImage = styled.img`
  width: 100%;
  height: 600px;
`;

export const Text = styled.div`
  color: #fff;
  position: absolute;
  font-size: 33px;
  font-weight: bold;
  padding-top: 100px;
  padding-left: 50px;
`;

export const Text1 = styled.div`
  font-family: "IBM Plex Serif";
  padding-bottom: 50px;
`;

export const Text2 = styled.div`
  font-family: "IBM Plex Serif";
  font-size: 77px;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text3 = styled.div`
  font-family: "IBM Plex Serif";
  font-size: 106px;
`;

export const Text4 = styled.div`
  color: red;
  font-family: "NOSIFER";
  font-size: 120px;
  padding-left: 30px;
  padding-top: 47px;
`;

export const Highlight = styled.div`
  color: #fff;
  padding-top: 100px;
  padding-bottom: 30px;
  font-size: 40px;
  font-family: "ARIMO";
  font-weight: bold;
`;

export const Availables = styled.div``;

export const CustomSlide = styled.div`
  padding: 0 24px;
`;

export const ContentSeeAll = styled.div`
  display: flex;
`;

export const SeeAllButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.primary.main};
  width: 140px;
  height: 40px;
  color: #fff;
  margin-left: auto;
  margin-top: 24px;
  font-size: 16px;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export const NewsContainer = styled.div`
  color: blue;
  display: flex;
  flex-direction: row;
  margin: 96px 0;
`;

export const NewsImageContent = styled.a`
  position: relative;
  width: 500px;
  height: 350px;
  border: ${({ theme }) => theme.palette.primary.main} 4px solid;
  z-index: 10;

  &::before {
    display: block;
    content: " ";
    position: absolute;
    top: -20px;
    left: -20px;
    background: ${({ theme }) => theme.palette.primary.main}99;
    width: 500px;
    height: 350px;
    z-index: -1;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const NewsTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  flex: 1;
`;

export const NewsText1 = styled.a`
  color: #fff;
  font-size: 24px;
  font-family: "ARIMO";
  text-decoration: none;
`;

export const NewsText2 = styled.a`
  color: #fff;
  font-size: 170px;
  font-family: "IMBUE";
  font-weight: bold;
  text-decoration: none;
`;

export const NewsText3 = styled.div`
  color: #fff;
  font-size: 24px;
  font-family: "ARIMO";
`;
