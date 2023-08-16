import { getPageSession } from '@/app/_auth/lucia';
import { redirect } from 'next/navigation';

import Form from '@/_components/Form';
import Link from 'next/link';

export default async function Page() {
  const session = await getPageSession();
  if (session) redirect('/');
  return (
    <>
      <h1>Sign up</h1>
      <Form action='/api/register'>
        <label htmlFor='username'>Username</label>
        <input name='username' id='username' />
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <br />
        <input type='submit' />
      </Form>
      <Link href='/register'>Sign in</Link>
    </>
  );
}
