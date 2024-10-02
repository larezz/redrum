import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
  height: 280px;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

export const Menu = styled.span`
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: ease 0.4s;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

export const Logo = styled.img`
  width: 145px;
  height: 84px;
`;
