import styled from "@emotion/styled";

/*interface CardProps {
    isActive: boolean,
    view: "header" | "main",
}

interface TextProps {
    isActive: boolean,
}

enum CardStyle {
    header = "width: ${(props) => props.isActive ? '268px' : '210px'};  height: ${(props) => props.isActive ? '268px' : '210px'};",
    main = "width: ${(props) => props.isActive ? '320px' : '282px'};  height: ${(props) => props.isActive ? '268px' : '210px'};",
}*/

interface ButtonGroupProps {
    right: boolean,
}

interface PaginationTheme {
    theme: 'dark' | 'light',
}
export const Slider = styled.div`
  width: 40vw;
  display: block;
`;

export const Image = styled.img`
  position: relative;
  `;

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  gap: 16px;
  margin-top: 15px;
  justify-content: ${(props) => props.right ? 'flex-end' : 'flex-start'};
`;

export const Button = styled.div<PaginationTheme>`
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  border: ${(props) => props?.theme === 'light' ? '1px solid white' : '1px solid black'};
  width: 38px;
  height: 38px;
`;

export const Text = styled.p`
  position: absolute;
  color: #FFF;
  bottom: 15%;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-top: 0;
`;

export const Description = styled.span`
  position: absolute;
  color: #BDBDBD;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
`;