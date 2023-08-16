import DesktopNavbar from '@/_components/Navbars/DesktopNavbar';
import MobileNavbar from '@/_components/Navbars/MobileNavbar';
import { Desktop, TabletAndBelow } from '@/_components/MediaQueryEasyMode';

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
