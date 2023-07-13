import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function PUT(request: Request) {
  const { account } = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase
    .from('account')
    .update({ name: 'Australia' })
    .eq('id', account)
    .select();

  console.log('🚀 ~ data:', account, data);
  return NextResponse.json(data);
}
export async function DELETE(request: Request) {
  const { account } = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase.from('account').delete().eq('id', account);
  console.log('🚀 ~ data:', account, data);
  return NextResponse.json(data);
}
