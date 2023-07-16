import styled from "@emotion/styled";

export const SecondDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 6%;
  height: 860px;
  overflow: hidden;
  position: relative;
`;
export const Title = styled.h2`
  padding-top: 65px;
  color: #212121;
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 48px;
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
  //width: 70%;
`;

export const Background = styled.img`
  position: absolute;
  display: block;
  right: 0;
  z-index: -1;
`;

export const SliderBlock = styled.div`
  display: grid;
  gap: 35px;
  grid-template-columns: 1.5fr 1fr;
`;