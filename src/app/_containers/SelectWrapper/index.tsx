'use client';

import { useState } from 'react';
import { Select, SelectOption } from '@/_components/Select';
import { options } from '@/app/_data';

export default function SelectWrapper() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  return (
    <Select
      multiple
      options={options}
      value={value1}
      onChange={o => setValue1(o)}
    />
  );
}
