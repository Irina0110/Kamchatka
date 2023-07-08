import styled from "@emotion/styled";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6%;
  position: relative;
  background-image: linear-gradient(rgb(255,255,255), rgba(255,255,255,0));
`;

export const Background = styled.img`
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  top: 40%;
`;

export const Title = styled.h1`
  margin-top: 120px;
  margin-bottom: 27px;
  width: 728px;
  color: #121212;
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
`;

export const SubTitle = styled.h5`
  color: #313131;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 571px;
  margin-top: 0;
  margin-bottom: 35px;
`;

export const SecondaryText = styled.p`
  color: #313131;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 613px;
  margin-bottom: 64px;
`;

export const CardGroup = styled.div`
  display: flex;
  gap: 64px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.p`
  color: #212121;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;

export const CardInfo = styled.p`
  color: #212121;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
`;

export const KamchatkaImg = styled.img`
  position: absolute;
  top: 25px;
  right: -8%;
`;

export const ImagesBlock = styled.div`
  position: relative;
  height: 350px;
  overflow: hidden;
`;

export const AirplaneImg = styled.img`
  position: absolute;
  right: -15%;
  transform: rotate(3.3deg);
`;