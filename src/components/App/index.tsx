import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/main';

import './style.sass'
import ScrollToTop from '@/hooks/useScrollTop';
import { Suspense, lazy } from 'react';
import { Circles } from 'react-loader-spinner';

const ActorPage = lazy(() => import('@/pages/actor'))

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Circles color='#0A0A0A' wrapperClass="actor_spinner"/>}>
        <Routes>          
              <Route path="/" element={<MainPage />} />
              <Route path='/:id' element={<ActorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;

