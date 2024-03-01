import { MEDIA_QUERY } from '@/constants';
import useWindowWidth from '@/hooks/useWindowWidth';

import '@/assets/fonts/bebus/stylesheet.sass'

import Footer from '@/components/Footer/DesktopFooter';
import MobileFooter from '@/components/Footer/MobileFooter';
import Header from '@/components/Header';

const ErrorPage = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Header dark />
      <h1>ERROR</h1>
      {windowWidth >= MEDIA_QUERY.mobile ?
        <Footer /> : 
        <MobileFooter/>}
    </>
  )
}

export default ErrorPage;
