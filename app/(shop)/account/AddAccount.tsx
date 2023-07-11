import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';

export default async function NewAccount() {
  const addTodo = async (formData: FormData) => {
    'use server';

    const name = formData.get('name');
    const age = formData.get('age');
    const address = formData.get('address');
    const supabase = createServerActionClient({ cookies });
    await supabase.from('account').insert({ name, age, address });
    revalidatePath('/');
  };

  return (
    <form className='flex flex-col' action={addTodo}>
      <label htmlFor='name'>Name: </label>
      <input
        className='bg-gray-300 text-black border border-black p-2'
        placeholder='Enter your name'
        id='name'
        name='name'
      />
      <label htmlFor='age'>Age: </label>
      <input
        className='bg-gray-300 text-black border border-black p-2'
        placeholder='Enter your age'
        id='age'
        name='age'
      />
      <label htmlFor='address'>Address: </label>
      <input
        className='bg-gray-300 text-black border border-black p-2'
        placeholder='Enter your Address'
        id='address'
        name='address'
      />
      <button
        formAction={addTodo}
        className='font-medium mt-5 bg-black text-white px-4 py-1'
      >
        AddNew
      </button>
    </form>
  );
}
