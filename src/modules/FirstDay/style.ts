import styled from "@emotion/styled";
export const FirstDay = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 6%;
  height: 900px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), center /cover url(../../src/assets/Background-5.png), lightgray 50% / cover no-repeat;

`;

export const Background = styled.img`
  position: absolute;
  display: block;
  left: 0;
  z-index: -1;
  width: 100%;
  top: -1%;
`;

export const Title = styled.h2`
  padding-top: 65px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
`;

export const OrangeText = styled.span`
  color: #F47648;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Paragraph = styled.span`
  color: #ACACAC;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 25px;
`;

export const WhiteText = styled.span`
  color: white;
`;

export const Clouds = styled.div`
  position: absolute;
  display: block;
  left: 0;
  z-index: -1;
  width: 100%;
  bottom: -11%;
`;