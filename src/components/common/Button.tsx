import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface ButtonStyleProps {
  background?: string;
  color?: string;
}

const ButtonStyle = css<ButtonStyleProps>`
  width: 100%;
  height: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  background: ${props => props.background || 'none'};
  color: ${props => props.color || 'black'};
  opacity: 0.8;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  &:hover {
    opacity: 1;
  }
`;

const ButtonBlock = styled.button`
  ${ButtonStyle}
`;

const LinkBlock = styled(Link)`
  ${ButtonStyle}
`;

const Button = (props: PropsWithChildren<ButtonStyleProps>) => {
  return <ButtonBlock {...props}>{props.children}</ButtonBlock>;
};

export const LinkButton = (props: any) => {
  return (
      <LinkBlock {...props}>{props.children}</LinkBlock>
  );
};

export default Button;
