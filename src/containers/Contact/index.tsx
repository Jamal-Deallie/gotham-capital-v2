import React from 'react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Border from '@/components/Border';
import styles from './Contact.module.scss';
import cn from 'classnames';
type Props = {};

export default function Contact({}: Props) {
  return (
    <div
      className={cn(
        styles['contact'],
        'grid-inner py-lg-120 py-sm-64 secondary-bg'
      )}>
      <div className={styles['title']}>
        <h1 className='title-md light primary-clr'>
          How Can We{' '}
          <span className='title-md tertiary-clr bold'>{' '}Help You</span>
        </h1>
      </div>
      <div className={styles['form-cont']}>
        <ContactForm />
      </div>
      <div
        className={cn(
          styles['card'],
          'secondary-clr tertiary-bg p-lg-32 p-sm-16 mt-lg-64 mt-sm-32'
        )}>
        <div className={styles['inner']}>
          <h2 className='title-md mb-lg-32 bold'>Contact Us</h2>
          <p className='txt-md'>Gotham Capital</p>
          <p className='txt-md'>123 Main Street</p>
          <p className='txt-md'>Dallas, TX, 75000</p>
          <p className='txt-md'>1-(123)-123-4567</p>
          <p className='txt-md'>info@gothamcapital.com</p>
        </div>
      </div>
      <div
        className={cn(
          styles['card'],
          'secondary-clr tertiary-bg p-lg-32 p-sm-16 mt-lg-64 mt-sm-32'
        )}>
        <div className={styles['inner']}>
          <h2 className='title-md mb-lg-32 bold'>Socials</h2>
          <p className='txt-md'>Twitter</p>
          <p className='txt-md'>Facebook</p>
          <p className='txt-md'>Instagram</p>
          <p className='txt-md'>Tik Tok</p>
        </div>
      </div>
    </div>
  );
}
