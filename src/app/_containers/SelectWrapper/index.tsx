'use client';

import { useState } from 'react';
import { Select, SelectOption } from '@/_components/Select';
import { options } from '@/app/_data';

export default function SelectWrapper() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  return (
    <Select
      options={options}
      //@ts-ignore
      value={value1}
      //@ts-ignore
      onChange={o => setValue1(o)}
    />
  );
}
