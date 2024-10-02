import styled from "styled-components";

import { MdAccountCircle } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 110px;
  background: #000;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 121px;
  height: 70px;
`;

export const Menus = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

export const Menu = styled.span`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease 0.4s;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 28px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: #000;
  border-radius: 14px;
  padding: 4px 12px;
  gap: 4px;
  cursor: pointer;
`;

export const Icon = styled(MdAccountCircle)`
  color: #000;
  font-size: 24px;
`;
