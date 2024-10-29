import styled from "styled-components";
import { MdChevronLeft } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const BackButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const BackButtonIcon = styled(MdChevronLeft)`
  font-size: 20px;
`;

export const Title = styled.span`
  font-size: 20px;
  margin-top: 8px;
  font-weight: bold;
`;
