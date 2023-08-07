import { getPageSession } from '@/auth/lucia';
import { redirect } from 'next/navigation';

import Form from '@/components/Form';
import Link from 'next/link';

const Page = async () => {
  const session = await getPageSession();
//   console.log(session);
//   if (session) redirect('/');
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
      <Link href='/login'>Sign in</Link>
    </>
  );
};

export default Page;
