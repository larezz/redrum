import styled from "styled-components";
import { FiMoon } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  flex: 3;
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 4px;
  cursor: pointer;
  transition: ease 0.4s;

  &:hover {
    box-shadow: 1px 1px 15px 1px ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ImageContent = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
`;

export const Type = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  height: 18px;
  padding: 0 60px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  border-radius: 9px;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  padding: 0 20px;

  background: ${({ theme }) => theme.palette.primary.main}CC;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  padding: 8px 20px;
  gap: 8px;
`;

export const Amount = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AmountIcon = styled(FiMoon)`
  font-size: 18px;
  color: #fff;
  margin-left: 8px;
`;

export const Details = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export const Description = styled.span`
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
