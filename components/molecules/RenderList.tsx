/* eslint-disable no-unused-vars */
import React from 'react';

type Props<T> = {
  items: T[];
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
};

export default function RenderList<T>({
  items,
  render,
  keyExtractor,
}: Props<T>) {
  return (
    <div>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </div>
  );
}
