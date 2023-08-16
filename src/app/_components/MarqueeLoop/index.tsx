'use client';

import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/app/_hooks/useIsomorphicLayout';
import gsap from 'gsap';
import { horizontalLoop } from '@/app/_helpers/horizontalLoop';
type Props = {
  children: ReactNode;
  reverse?: boolean;
};

export default function MarqueeLoop({ children, reverse = false }: Props) {
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let loops = gsap.utils.toArray('.loop-item').map((line, i) => {
        const targets: HTMLDivElement[] = gsap.utils.toArray('.loop-target');
        document.fonts.ready.then(function () {
          const tl = horizontalLoop(targets, {
            repeat: -1,
            speed: 1 + i * 0.5,
            draggable: false,
            reversed: reverse,
            paddingRight: parseFloat(
              //@ts-ignore
              gsap.getProperty(targets[0], 'marginRight', '16px')
            ),
          });
        });
      });
    }, root);
  }, []);
  return <div ref={root}>{children}</div>;
}
