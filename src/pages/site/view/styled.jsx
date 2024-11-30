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
  padding-bottom: 20px;
`;

export const OwnerDescription = styled.span`
  font-size: 28px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const Details = styled.span`
  font-size: 24px;  
  border-bottom: 1px solid red;
  padding-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 40px;
`;

export const HouseDescription = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: red;
  padding-top: 10px;
`;

export const DescriptionContent = styled.span`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid red;
`;

export const TextHouse = styled.span`
  font-size: 24px;
  padding: 20px;
`;

export const More = styled.span`
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Bathsheba = styled.img`
  width: 400px;
  height: 400px;
  border: 4px solid red;

`;

export const Owner = styled.span`
  display: flex;
  flex-direction: row;
`;

export const OwnerData = styled.span`
  display: flex;
  flex-direction: column;
`;

export const OwnerName = styled.span`
  font-size: 30px;
  font-weight: bold;
  padding-left: 60px;
  padding-bottom: 30px;
`;

export const OwnerComment2 = styled.span`
  padding-left: 60px;
  font-size: 24px;
`;