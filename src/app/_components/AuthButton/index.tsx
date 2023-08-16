import React from 'react';
import { getPageSession } from '@/app/_auth/lucia';
import { Button } from '@/_components/Button';
import Form from '@/_components/Form';
import { LinkButton } from '@/_components/Button';
type Props = {};

export default async function AuthButton() {
  const session = await getPageSession();
  return session ? (
    <Form action='/api/logout'>
      <input type='text' name='signOut' defaultValue='Sign out' />
      <Button type='submit' variant='primary' size='md'>
        Log Out
      </Button>
    </Form>
  ) : (
    <LinkButton href='/login' variant='primary' size='md'>
      Investor Login
    </LinkButton>
  );
}
