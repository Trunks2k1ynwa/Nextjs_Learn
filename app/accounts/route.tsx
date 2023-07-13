import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function PUT(request: Request) {
  const { account } = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase
    .from('account')
    .update({ name: 'Lê Văn Trung' })
    .eq('id', account);

  return NextResponse.json(data);
}
export async function DELETE(request: Request) {
  const { account } = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  await supabase.from('account').delete().eq('id', account);
}
