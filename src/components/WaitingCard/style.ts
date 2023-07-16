import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: 373px;
  border-radius: 5px;
  background: var(--white, #FFF);
  box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.10);
`;

export const Img = styled.img`
  width: 100%;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
`;

export const Title = styled.span`
  color: var(--black, #212121);
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const Description = styled.p`
  color: var(--dark-gray, #5A5A5A);
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;