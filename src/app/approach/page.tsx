import React from 'react';
import ApproachIntro from '@/app/_containers/ApproachIntro';
import Approaches from '@/app/_containers/Approaches';
import Statistics from '@/app/_containers/Numbers';
type Props = {};

export default function ApproachPage({}: Props) {
  return (
    <div>
      <ApproachIntro />
      <Approaches />
      <Statistics />
    </div>
  );
}
