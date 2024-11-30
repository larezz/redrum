import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  z-index: 1;
`;

export const BackgroundGradient = styled.div`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 400px;
  position: absolute;
  margin-top: 110px;
  background: rgb(168, 5, 26);
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(168, 5, 26, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: max-content;

  .smaller {
    font-size: 40px;
    font-family: "ARIMO";
  }

  .biger {
    font-size: 150px;
    font-family: "IMBUE";
    line-height: 120px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 0;
  gap: 24px;

  & + & {
    border-top: 2px ${({ theme }) => theme.palette.primary.main} solid;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  color: #fff;
  line-height: 30px;
  font-family: "ARIMO";
`;

export const Image = styled.img`
  width: 100%;
`;
