import DesktopNavbar from '@/components/Navbars/DesktopNavbar';
import MobileNavbar from '@/components/Navbars/MobileNavbar';
import { Desktop, TabletAndBelow } from '@/components/MediaQueryEasyMode';

export default function Navbar() {
  return (
    <>
      <TabletAndBelow>
        <MobileNavbar />
      </TabletAndBelow>

      <Desktop>
        <DesktopNavbar />
      </Desktop>
    </>
  );
}
