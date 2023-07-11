import React from 'react';

export default function Account({ account }: { account: any }) {
  return (
    <div className='flex gap-x-2'>
      <p>{account?.name}</p>
      <p>{account?.age}</p>
      <p>{account?.address}</p>
    </div>
  );
}
