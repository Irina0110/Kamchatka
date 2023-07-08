import styled from "@emotion/styled";

interface CardProps {
    isActive: boolean,
}

interface ButtonGroupProps {
    right: boolean,
}

export const Slider = styled.div`
  width: 40vw;
  display: block;
`;

export const Image = styled.img<CardProps>`
  width: ${(props) => props.isActive ? '268px' : '210px'};
  height: ${(props) => props.isActive ? '268px' : '210px'};
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