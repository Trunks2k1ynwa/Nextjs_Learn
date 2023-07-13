import { useRouter } from 'next/navigation';
import React from 'react';

export default function Account({ account }: { account: any }) {
  const router = useRouter();
  const handleUpdate = async () => {
    await fetch('http://localhost:3000/accounts', {
      method: 'put',
      body: JSON.stringify({ account: account.id }),
    });
    router.refresh();
  };
  const handleDelete = async () => {
    await fetch('http://localhost:3000/accounts', {
      method: 'delete',
      body: JSON.stringify({ account: account.id }),
    });
    router.refresh();
  };
  return (
    <>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {account?.id}
      </th>
      <td className='px-6 py-4'>{account?.name}</td>
      <td className='px-6 py-4'>{account?.age}</td>
      <td className='px-6 py-4'>{account?.address}</td>
      <td className='px-6 py-4'>{account?.gender ? 'Male' : 'Felmale'}</td>
      <td className='flex gap-x-3 px-6 py-4'>
        <button
          onClick={handleUpdate}
          className='bg-black text-white px-2 rounded-sm'
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className='bg-black text-white px-2 rounded-sm'
        >
          Delete
        </button>
      </td>
    </>
  );
}
