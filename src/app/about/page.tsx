import About from '@/containers/About';
import Stats from '@/containers/Stats';
import Values from '@/containers/Values';
type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div>
      <About />
      <Stats />
      <Values />
      {
        //about us
        //values
        //approach
        //location
        //history
      }
    </div>
  );
}
