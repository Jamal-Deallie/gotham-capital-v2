import React from 'react';
import Accordion from '@/components/Accordion';
type Props = {};
const options = [
  {
    id: 1,
    title: 'Accordion Tab number',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at velit ex. Vestibulum et turpis enim. Nullam at luctus urna. Nam nisi est, dapibus id ultricies quis, tempus vitae lacus. Integer id ullamcorper risus. Vivamus aliquet mattis purus id commodo. Phasellus tristique nulla at ex vulputate auctor.',
  },
  {
    id: 2,
    title: 'Accordion Tab number',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at velit ex. Vestibulum et turpis enim. Nullam at luctus urna. Nam nisi est, dapibus id ultricies quis, tempus vitae lacus. Integer id ullamcorper risus. Vivamus aliquet mattis purus id commodo. Phasellus tristique nulla at ex vulputate auctor.',
  },
  {
    id: 3,
    title: 'Accordion Tab number',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at velit ex. Vestibulum et turpis enim. Nullam at luctus urna. Nam nisi est, dapibus id ultricies quis, tempus vitae lacus. Integer id ullamcorper risus. Vivamus aliquet mattis purus id commodo. Phasellus tristique nulla at ex vulputate auctor.',
  },
  {
    id: 4,
    title: 'Accordion Tab number',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at velit ex. Vestibulum et turpis enim. Nullam at luctus urna. Nam nisi est, dapibus id ultricies quis, tempus vitae lacus. Integer id ullamcorper risus. Vivamus aliquet mattis purus id commodo. Phasellus tristique nulla at ex vulputate auctor.',
  },
];
export default function AccordionWrap({}: Props) {
  return (
    <ul>
      {options.map(({ id, title, content }) => {
        return <Accordion key={id} title={title} desc={content} />;
      })}
    </ul>
  );
}
