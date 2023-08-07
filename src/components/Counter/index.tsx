'use client';

import { useRef } from 'react';
import xss from 'xss';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';

export default function index({
  Number,
  classes,
}: {
  Number?: string;
  classes?: string;
}) {
  const root = useRef<HTMLSpanElement>(null!);
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

  //     tl.current.to(root.current, {
  //       innerText: 50,
  //       duration: 3,
  //       snap: {
  //         innerText: 5,
  //       },
  //     });
  //   });

  //   return () => {
  //     mm.revert();
  //   };
  // }, []);

  return (
    <span
      className={classes}
      ref={root}
      dangerouslySetInnerHTML={{
        __html: xss('11'),
      }}></span>
  );
}
