import '@/assets/fonts/bebus/stylesheet.sass'

import SectionPreview from '@/components/PreviewSection';
import Actors from '@/components/ActorsSection';
import Posters from '@/components/Posters';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { getActors } from '@/api/getActors';
import { ACTOR_IN_ACTORS } from '@/types';
import { fetchPosters } from '@/api/fetchPosters';

const MainPage = () => {
  const [actors, setActors] = useState<ACTOR_IN_ACTORS[]>([])
  const [posters, setPosters] = useState<[]>([]);

  useEffect(() => {
      getActors().then(actors => setActors(actors))
      fetchPosters().then(data => setPosters(data.products))
  }, [])
  
  return (
    <>
      <SectionPreview />
      <Actors actors={actors} />
      <Posters posters={posters}/>
      <Cards actors={actors} />
      <Footer />
    </>
  )
}

export default MainPage;



