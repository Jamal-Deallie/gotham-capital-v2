'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/_components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FieldError } from 'react-hook-form';
import { Input } from '@/_components/Inputs/Input';
import { TextArea } from '@/_components/Inputs/TextArea';
import styles from './ContactForm.module.scss';
import cn from 'classnames';
import { useEffect } from 'react';

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

  return <div className={styles['error']}>{children}</div>;
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
  name: z.string().min(1, { message: 'The lastName is required.' }).max(36),
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  message: z.string().min(1, { message: 'Your message is required.' }).max(300),
  category: z.string().min(1, { message: 'A category is required.' }).max(36),
});

// Infer the TS type according to the zod schema.
type FormType = z.infer<typeof formSchema>;

/* ---------- React component ----------*/

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setFocus,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormType) => {
    console.log('onSubmit', values);
  };

  return (
    <>
      <div className={cn(styles['error-cont'], 'mt-lg-16 mt-sm-8')}>
        {Boolean(Object.keys(errors)?.length) && (
          <Alert type='error'>There are errors in the form.</Alert>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles['flex-cont']}>
          <div className='mt-sm-8 mt-lg-16'>
            <label htmlFor='name' className='primary-clr'>
              Name
            </label>
            <Input
              classes='mb-lg-24 mt-lg-8 mb-sm-16 mt-sm-8'
              autoComplete='one-time-code'
              id='firstName_field'
              type='text'
              {...register('name')}
              aria-invalid={Boolean(errors.name)}
            />
            <AlertInput>{errors?.name?.message}</AlertInput>
          </div>
        </div>
        <div className={styles['flex-cont']}>
          <div>
            <label htmlFor='email' className='primary-clr'>
              Email
            </label>
            <Input
              classes='mt-lg-8 mt-sm-8'
              autoComplete='one-time-code'
              id='email_field'
              type='email'
              {...register('email')}
              aria-invalid={Boolean(errors.email)}
            />
            <AlertInput>{errors?.email?.message}</AlertInput>
          </div>
        </div>
        <div className='mt-sm-16 mt-lg-24'>
          <label htmlFor='message' className='primary-clr'>
            Message
          </label>
          <TextArea
            classes='mt-lg-8 mt-sm-8'
            autoComplete='one-time-code'
            id='message_field'
            rows={10}
            {...register('message')}
            aria-invalid={Boolean(errors.message)}
          />
          <AlertInput>{errors?.message?.message}</AlertInput>
        </div>
        <Button
          type='submit'
          disabled={isSubmitting || !isValid}
          variant='secondary'
          size='lg'
          classes='full-w mt-lg-48 mt-sm-32'>
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
      </form>
    </>
  );
}
