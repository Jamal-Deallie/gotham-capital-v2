'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FieldError } from 'react-hook-form';
import { Input } from '@/components/Inputs/Input';
import cn from 'classnames';

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
    <span role='alert' style={{ color: 'tomato' }}>
      {children}
    </span>
  ) : null;

/* ---------- Zod schema et TS type ----------*/

// Describe the correctness of data's form.
const formSchema = z.object({
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  password: z.string().min(6),
});

// Infer the TS type according to the zod schema.
type FormType = z.infer<typeof formSchema>;

/* ---------- React component ----------*/

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  //   const onSubmit = (values: FormType) => {
  //     console.log('onSubmit', values);
  //   };

  const onSubmit = async (values: FormType) => {
    console.log('onSubmit', values);

    const response = await fetch(`/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    return response;
  };

  return (
    <div className='py-lg-120 py-sm-64'>
      <div className='mt-lg-16 mt-sm-8'>
        {Boolean(Object.keys(errors)?.length) && (
          <Alert type='error'>There are errors in the form.</Alert>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className='py-lg-96 py-sm-32'>
        <div>
          <div className='mt-sm-16 mt-lg-24'>
            <Input
              placeholder='Company Email'
              autoComplete='one-time-code'
              id='email_field'
              type='email'
              {...register('email')}
              aria-invalid={Boolean(errors.email)}
            />
            <AlertInput>{errors?.email?.message}</AlertInput>
          </div>
        </div>
        <div>
          <div className='mt-sm-16 mt-lg-24'>
            <Input
              placeholder='Company Email'
              autoComplete='one-time-code'
              id='password_field'
              type='password'
              {...register('password')}
              aria-invalid={Boolean(errors.password)}
            />
            <AlertInput>{errors?.password?.message}</AlertInput>
          </div>
        </div>

        <button type='submit' disabled={isSubmitting || !isValid}>
          Submit
        </button>
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
      </form>
    </div>
  );
}
