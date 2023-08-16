import { getPageSession } from '@/app/_auth/lucia';
import { redirect } from 'next/navigation';
import Form from '@/_components/Form';
import Link from 'next/link';
import { Input } from '@/_components/Inputs/Input';
import { Button } from '@/_components/Button';
import LoginForm from '@/_components/LoginForm';
const Page = async () => {
  const session = await getPageSession();

  if (session) {
    redirect('/');
  }
  return (
    <section className='secondary-bg'>
      <div className='main-cont full-h center-flex column'>
        <h1 className='title-lg primary-clr mb-lg-64 mb-sm-24'>Sign in</h1>
        <LoginForm />
        <Link href='/register' className='primary-clr'>
          Create an account
        </Link>
      </div>
    </section>
  );
};

export default Page;
