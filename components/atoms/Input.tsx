import React from 'react';

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({ ...rest }: Props) {
  return <input type='text' {...rest} />;
}
