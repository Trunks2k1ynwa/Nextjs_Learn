'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Account from '~/atoms/Account';

const RealtimeAccounts = ({ accounts }: { accounts: any }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  useEffect(() => {
    const channel = supabase
      .channel('realtime account')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'account',
        },
        () => {
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);

  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400e'>
        <tr className=''>
          <th scope='col' className='px-6 py-3'>
            ID
          </th>
          <th scope='col' className='px-6 py-3'>
            Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Age
          </th>
          <th scope='col' className='px-6 py-3'>
            Address
          </th>
          <th scope='col' className='px-6 py-3'>
            Gender
          </th>
          <th scope='col' className='px-6 py-3'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {accounts?.map((account: any) => (
          <tr
            className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
            key={account.id}
          >
            <Account account={account} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RealtimeAccounts;
