import styled from "@emotion/styled";

interface CardProps {
    isActive: boolean,
    view: "header" | "main",
}

interface TextProps {
    isActive: boolean,
}

enum CardStyle {
    header = "width: ${(props) => props.isActive ? '268px' : '210px'};  height: ${(props) => props.isActive ? '268px' : '210px'};",
    main = "width: ${(props) => props.isActive ? '320px' : '282px'};  height: ${(props) => props.isActive ? '268px' : '210px'};",
}

interface ButtonGroupProps {
    right: boolean,
}

export const Slider = styled.div`
  width: 50vw;
  display: block;
`;

export const Image = styled.img<CardProps>`
  position: relative;
  ${(props) => (CardStyle as { [key: string]: string })[props.view]}
`;

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  gap: 16px;
  justify-content: ${(props) => props.right ? 'flex-end' : 'flex-start'};
`;

export const Button = styled.div`
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  border: 1px solid white;
  width: 38px;
  height: 38px;
`;

export const Text = styled.p<TextProps>`
  position: absolute;
  color: #FFF;
  bottom: 10%;
  font-family: 'Lato', sans-serif;
  font-size: ${props => props.isActive ? '16px' : '14px'};
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-top: 0;
`;

export const Description = styled.span<TextProps>`
  position: absolute;
  color: #BDBDBD;
  font-family: 'Lato', sans-serif;
  font-size: ${props => props.isActive ? '14px' : '12px'};
  font-style: normal;
  font-weight: 400;
  line-height: ${props => props.isActive ? '24px' : '20px'};;
`;