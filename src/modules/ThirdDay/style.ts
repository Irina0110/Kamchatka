import styled from "@emotion/styled";

export const ThirdDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  right: 0;
  top: 40%;
  z-index: -1;
`;

export const Content = styled.div`
  display: flex;
  padding: 80px 132px 287px 0;
  align-items: center; 
  gap: 5%;
`;

export const Title = styled.h2`
  padding-top: 0;
  color: #212121;
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 48px;
  margin-top: 0;
`;

export const OrangeText = styled.span`
  color: #F47648;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Paragraph = styled.span`
  color: #313131;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 25px;
`;