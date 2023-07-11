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
    <div>
      {accounts?.map((account: any) => (
        <div className='bg-black text-white p-2 my-2' key={account.id}>
          <Account account={account} />
        </div>
      ))}
    </div>
  );
};

export default RealtimeAccounts;
