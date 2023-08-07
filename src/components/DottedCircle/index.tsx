'use client';
import { useRef } from 'react';
import styles from './Dotted.module.scss';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);
type Props = {};

export default function index({}: Props) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  // useIsomorphicLayoutEffect(() => {
  //   const mm = gsap.matchMedia(root);

  //   mm.add('(min-width: 800px)', () => {
  //     tl.current = gsap.timeline({
  //       scrollTrigger: {
  //         start: 'center center',
  //         end: 'bottom bottom',
  //         trigger: root.current,
  //       },
  //     });
  //     tl.current.fromTo(
  //       '#svg',

  //     );

  //     //   .from(".theLine", {drawSVG: 0}, 0)
  //   });

  //   return () => {
  //     mm.revert();
  //   };
  // }, []);

  return (
    <div ref={root} className={styles['svg-cont']}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 81.75 81.75'>
        <circle id='svg' cx={40.88} cy={40.88} r={40.38} />
      </svg>
    </div>
  );
}
