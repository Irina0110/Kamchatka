import styled from "@emotion/styled";

export const Preview = styled.div`
  height: 675px;
  padding: 0 6% 0;
`;

export const Title = styled.h3`
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 64px;
  width: 616px;
  margin-top: 90px;
  margin-bottom: 0;
`;

export const Label = styled.h5`
  padding: 0 24px;
  border-radius: 16px;
  background: linear-gradient(143deg, #FB8B62 0%, #F47648 100%), #F47648;
  backdrop-filter: blur(34px);
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  width: max-content;
  margin-top: 27px;
  margin-bottom: 43px;
`;

export const Description = styled.p`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  width: 380px;
`;

export const Timetable = styled.div`
  display: flex;
  gap: 18px;
  cursor: pointer;
`;

export const UnderlinedText = styled.p`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration-line: underline;
  user-select: none;
`;

export const ButtonIcon = styled.img`
  cursor: pointer;
  user-select: none;
`;

export const Block = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  height: 40%;
`;

export const BlockSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Contacts = styled.div`
  display: flex;
  gap: 25px;
`;