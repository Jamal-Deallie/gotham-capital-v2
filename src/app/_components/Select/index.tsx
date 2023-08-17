import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

export type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function clearOptions() {
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen(prev => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      //enables click outside element to close
      onBlur={() => setIsOpen(false)}
      //toggles state to open/close dropdown
      onClick={() => setIsOpen(prev => !prev)}
      //tabs to  element first
      tabIndex={0}
      className={styles['container']}>
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={e => {
          //allows click event to not alter/toggle state of parent
          e.stopPropagation();
          clearOptions();
        }}
        className={styles['clear-btn']}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={cn(styles['options'], isOpen ? styles['show'] : '')}>
        {options.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
              router.push(`/team?search=${option.label}`);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={cn(
              styles['option'],
              //@ts-ignore
              isOptionSelected(option) ? styles['selected'] : '',
              index === highlightedIndex ? styles['highlighted'] : ''
            )}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
