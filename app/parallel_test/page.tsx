import React from 'react';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div className='p-2 bg-gray-200 rounded-md'>Main Parallel</div>;
}
