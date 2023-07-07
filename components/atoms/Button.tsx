'use client';
import React from 'react';
import { css, styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
  kind?: String;
};
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
      color: white;
      background-color: pink;
      padding: 10px 10px;
      display: flex;
      height: fit-content;
    `};
`;
function Button({ children, kind = '' }: Props) {
  return <ButtonStyle kind={kind}>{children}</ButtonStyle>;
}

export default Button;
