'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/_components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FieldError } from 'react-hook-form';
import { Input } from '@/_components/Inputs/Input';
import cn from 'classnames';
import { FormType, FormSchema } from '@/app/_helpers/formHelpers';
import Form from '../Form';
const formatErrors = (errors: Record<string, FieldError>) =>
  Object.keys(errors).map(key => ({
    key,
    message: errors[key].message,
  }));

/* ---------- Some UI components ----------*/

type AlertType = 'error' | 'warning' | 'success';

// Global Alert div.
const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const backgroundColor =
    type === 'error' ? 'tomato' : type === 'warning' ? 'orange' : 'powderBlue';

  return <div>{children}</div>;
};

// Use role="alert" to announce the error message.
const AlertInput = ({ children }: { children: React.ReactNode }) =>
  Boolean(children) ? (
    <span role='alert' className='error-clr'>
      {children}
    </span>
  ) : null;

/* ---------- React component ----------*/

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    setFocus('username');
  }, [setFocus]);

  return (
    <div>
      <div className='mt-lg-16 mt-sm-8'>
        {Boolean(Object.keys(errors)?.length) && (
          <Alert type='error'>There are errors in the form.</Alert>
        )}
      </div>

      <Form action='/api/login'>
        <div>
          <div className='mt-sm-16 mt-lg-24'>
            <label htmlFor='username' className='primary-clr'>
              Username
            </label>
            <Input
              id='username'
              classes='mt-lg-8 mt-sm-8'
              autoComplete='one-time-code'
              {...register('username')}
              aria-invalid={Boolean(errors.username)}
            />
            <AlertInput>{errors?.username?.message}</AlertInput>
          </div>
        </div>
        <div>
          <div className='mt-sm-16 mt-lg-24'>
            <label htmlFor='password' className='primary-clr'>
              Password
            </label>
            <Input
              classes='mt-lg-8 mt-sm-8'
              type='password'
              id='password'
              autoComplete='one-time-code'
              {...register('password')}
              aria-invalid={Boolean(errors.password)}
            />
            <AlertInput>{errors?.password?.message}</AlertInput>
          </div>
        </div>

        <Button
          type='submit'
          size='lg'
          variant='secondary'
          classes='full-w my-lg-48 my-sm-48'
          disabled={isSubmitting || !isValid}>
          Submit
        </Button>
        {/* <pre>{JSON.stringify(formatErrors, null, 2)}</pre>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
        <pre>
          formState ={' '}
          {JSON.stringify(
            { isSubmitting, isSubmitted, isDirty, isValid },
            null,
            2
          )}
        </pre> */}
      </Form>
    </div>
  );
}
