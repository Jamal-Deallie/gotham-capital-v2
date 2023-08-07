import { getPageSession } from '@/auth/lucia';
import { redirect } from 'next/navigation';
import Form from '@/components/Form';
import Link from 'next/link';
import { Input } from '@/components/Inputs/Input';
import { Button } from '@/components/Button';

const Page = async () => {
  const session = await getPageSession();
  // if (session) redirect('/');
  return (
    <section className='secondary-bg'>
      <div className='main-cont full-h center-flex column'>
        <h1 className='title-lg primary-clr mb-lg-64 mb-sm-24'>Sign in</h1>
        <Form action='/api/login'>
          <label htmlFor='username' className='primary-clr'>
            Username
          </label>
          <Input
            name='username'
            id='username'
            autoComplete='one-time-code'
            classes='mb-lg-24 mt-lg-8 mb-sm-16 mt-sm-8'
          />
          <br />
          <label htmlFor='password' className='primary-clr'>
            Password
          </label>
          <Input
            classes='mt-lg-8 mt-sm-8'
            type='password'
            name='password'
            id='password'
            autoComplete='one-time-code'
          />
          <br />
          <Button type='submit' size='lg' variant='secondary' classes='full-w my-lg-48 my-sm-48'>
            Submit
          </Button>
        </Form>
        <Link href='/' className='primary-clr'>
          Create an account
        </Link>
      </div>
    </section>
  );
};

export default Page;
