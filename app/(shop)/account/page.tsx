import { cookies } from 'next/headers';
import {
  createServerActionClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import RealtimeAccounts from '~/molecules/RealtimeAccounts';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import AddAccount from './AddAccount';
export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: account } = await supabase
    .from('account')
    .select()
    .match({ gender: true });
  const handleSignOut = async () => {
    'use server';
    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signOut();
    revalidatePath('/');
  };

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return (
      <div className='m-5'>
        <h1>
          Bạn chưa đăng nhập, vui lòng đăng nhập để xem thông tin tài khoản
        </h1>
        <Link className='text-gray-500 underline' href='/signin'>
          SignIn
        </Link>
      </div>
    );
  }

  return (
    <div className='m-5'>
      <div className='py-5'>
        <h1>Thông tin tài khoản : {session.user.email}</h1>
        <form action={handleSignOut}>
          <button
            formAction={handleSignOut}
            className='font-medium bg-black text-white px-4 py-1'
          >
            SignOut
          </button>
        </form>
        {/* <pre>{JSON.stringify(account, null, 2)}</pre> */}
        <AddAccount />
        <RealtimeAccounts accounts={account} />
      </div>
    </div>
  );
}
