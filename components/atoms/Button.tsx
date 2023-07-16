'use client';
import React from 'react';
import { css, styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
  kind?: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const ButtonStyle = styled.button<Props>`
  color: yellow;
  background-color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  ${(props) =>
    props.kind === 'primary' &&
    css`
      color: black;
      background-color: ${(props) => props.theme.primary};
      padding: 10px 10px;
      display: flex;
      height: fit-content;
    `};
`;
function Button({
  children,
  type = 'button',
  kind,
  className,
  ...rest
}: Props) {
  return (
    <ButtonStyle type={type} {...rest} className={className} kind={kind}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
