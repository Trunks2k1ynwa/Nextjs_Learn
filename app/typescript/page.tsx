'use client';
import useTodos from '@/hooks/useTodos';
import React, { useEffect, useState } from 'react';
import Button from '~/atoms/Button';
import Input from '~/atoms/Input';
import View from '~/atoms/View';
import List from '~/molecules/List';
import RenderList from '~/molecules/RenderList';

type Props = {
  name: string;
  age: number;
};

const Heading = ({ title }: { title?: string }) => {
  return <h1>{title}</h1>;
};

interface Data {
  text: string;
  id: number;
}
export default function TodoPage({}: Props) {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos([]);
  const [data, setData] = useState<Data[] | null>(null);
  // const [a, b] = useState<number>(10);
  useEffect(() => {
    fetch('data.json')
      .then((result) => result.json())
      .then((res: Data[]) => {
        setData(res);
      });
  }, []);
  const showAlert = (item: Data) => {
    alert(item.text);
  };
  const products = [
    {
      id: 1,
      title: 'Iphone 14',
      price: 242,
    },
  ];
  return (
    <div>
      <Heading title='Levantrung' />
      <div className='max-w-sm p-5'>
        <div className='mb-5'>
          {/* {todos &&
            todos?.map((todo) => (
              <div key={todo.id} className='flex items-center gap-x-3 mb-2'>
                <span>{todo.text}</span>
                <button
                  onClick={() => onRemoveTodo(todo.id)}
                  className='p-2 rounded-lg bg-red-500 text-white text-center
            '
                >
                  Remove
                </button>
              </div>
            ))} */}
          <List showAlert={(item: Data) => showAlert(item)} data={data} />
          <RenderList
            keyExtractor={(product) => product.id}
            items={products}
            render={(item) => JSON.stringify(item)}
          />
          <RenderList
            items={todos}
            keyExtractor={(todo) => todo.id}
            render={(todo) => (
              <div key={todo.id} className='flex items-center gap-x-3 mb-2'>
                <span>{todo.text}</span>
                <button
                  onClick={() => onRemoveTodo(todo.id)}
                  className='p-2 rounded-lg bg-red-500 text-white text-center
            '
                >
                  Remove
                </button>
              </div>
            )}
          />
        </div>
        <div className='flex items-center gap-x-5'>
          <input
            ref={inputRef}
            className='p-2 border rounded-lg border-slate-200'
            type='text'
          />
          <button
            onClick={onAddTodo}
            className='p-2 rounded-lg bg-blue-500 text-white text-center'
          >
            Add todos
          </button>
          <Button className='bg-blue' disabled type='submit'>
            Click me
          </Button>
        </div>
      </div>
      <Input placeholder='Enter your name' className='p-2 border' />
      <View as='button' type='button'>
        Con là ai
      </View>
    </div>
  );
}
