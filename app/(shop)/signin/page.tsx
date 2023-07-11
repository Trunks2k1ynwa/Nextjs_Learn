import { cookies } from 'next/headers';
import {
  createServerActionClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { Database } from '@/lib/database.types';
import { revalidatePath } from 'next/cache';

export default async function SignIn() {
  const handleSignIn = async (formData: FormData) => {
    'use server';
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    const supabase = createServerActionClient<Database>({ cookies });
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    revalidatePath('/');
  };
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    redirect('/account');
  }

  return (
    <div>
      <form className='m-5' action={handleSignIn}>
        <div className='flex flex-col gap-2 mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            className='border-2 rounded-md px-5 py-2'
            placeholder='Email'
            name='email'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='Password'>Password</label>
          <input
            className='border-2 rounded-md px-5 py-2'
            placeholder='Password'
            name='password'
          />
        </div>
        <div className='flex gap-x-5 my-3'>
          <button
            className='p-3 bg-black text-white rounded-md'
            formAction={handleSignIn}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
