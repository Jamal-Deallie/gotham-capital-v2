import React from 'react';
import ApproachIntro from '@/containers/ApproachIntro';
import Approaches from '@/containers/Approaches';
import Statistics from '@/containers/Numbers';
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
