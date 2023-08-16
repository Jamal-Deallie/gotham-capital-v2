'use client';

import { useRef } from 'react';
import xss from 'xss';
import { useIsomorphicLayoutEffect } from '@/app/_hooks/useIsomorphicLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
export default function Counter({
  start,
  end,
  classes,
  symbol,
}: {
  end: number;
  start: string;
  classes?: string;
  symbol?: string;
}) {
  const root = useRef<HTMLDivElement>(null!);
  const counter = useRef<HTMLSpanElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      gsap.registerPlugin(ScrollTrigger);
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: 'top 80%',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });
      gsap.set(root.current, { opacity: 0 });
      tl.current.to(root.current, { opacity: 1, ease: 'power2.out' }).to(
        counter.current,
        {
          innerText: end,
          duration: 1,
          snap: {
            innerText: 2,
          },
        },
        '<-=20%'
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root}>
      <span
        ref={counter}
        className={classes}
        dangerouslySetInnerHTML={{
          __html: xss(start),
        }}></span>
      {symbol ? <span>{symbol}</span> : null}
    </div>
  );
}
