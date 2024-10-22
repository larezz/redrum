import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 100%;
  height: 200px;
  text-align: right;
  margin-left: 200px;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  border-right: 2px solid ${({ theme }) => theme.palette.primary.main};
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
  justify-content: left;
  padding-left: 20px;
  width: 100%;
  flex: 1;
`;

export const Logo = styled.img`
  width: 145px;
  height: 84px;
  margin-right: 100px;
`;

export const Insta = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;

export const Face = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;

export const Linkedin = styled.img`
  width: 30px;
  height: 30px;  
  margin-right: 30px;
`;

export const Bluesky = styled.img`
  width: 30px;
  height: 30px; 
`