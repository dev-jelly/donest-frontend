import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  background?: string;
}

const ButtonStyle = css<ButtonStyleProps>`
  width: 100%;
  height: 2rem;
  font-weight: bold;
  background: ${props => props.background || 'none'};
`;

const ButtonBlock = styled.div`
  ${ButtonStyle}
`;

interface ButtonProps {
  text: string;
  background?: string;
}

const Button = ({ text, background }: ButtonProps) => {
  return <ButtonBlock background={background}>{text}</ButtonBlock>;
};

export default Button;
