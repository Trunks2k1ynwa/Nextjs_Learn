import React from 'react';

type ViewProps<T extends keyof JSX.IntrinsicElements> = {
  children: React.ReactNode;
  as: T;
} & JSX.IntrinsicElements[T];

export default function View<T extends keyof JSX.IntrinsicElements>({
  children,
  as,
  ...rest
}: ViewProps<T>) {
  return React.createElement(as, { rest }, children);
}
