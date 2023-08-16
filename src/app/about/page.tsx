import About from '@/app/_containers/About';
import Stats from '@/app/_containers/Stats';
import Values from '@/app/_containers/Values';
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
