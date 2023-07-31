import { ReactNode } from 'react';
import Navbar from '@/components/Navbars';
import Footer from '@/components/Footer';
import ViewPortHeight from '@/components/ViewPortHeight';
import styles from './Layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ViewPortHeight />
      <div className={styles['layout']}>
        <Navbar />
        <main className={styles['main-wrap']}>{children}</main>

        <Footer />
      </div>
    </>
  );
}
