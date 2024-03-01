import { MEDIA_QUERY } from '@/constants';
import useWindowWidth from '@/hooks/useWindowWidth';
import MobileFooter from './MobileFooter';
import DesktopFooter from './DesktopFooter';

const Footer = () => {
  const windowWidth = useWindowWidth();

  return (
    windowWidth >= MEDIA_QUERY.mobile ?
        <DesktopFooter /> : 
        <MobileFooter/>
  )
}

export default Footer