import '@/assets/fonts/bebus/stylesheet.sass'

import Posters from '@/components/Posters';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ActorInfo from '@/components/ActorInfo';
import { useParams } from 'react-router-dom';
import ActorDescription from '@/components/ActorFilms';
import ContactUs from '@/components/ContactUs';
import ActorSlider from '@/components/ActorSlider';
import ActorVideo from '@/components/ActorVideo';
import { useEffect, useState } from 'react';
import { fetchActor } from '@/api/fetchActor';
import { ACTOR } from '@/types';
import { getActorInfo } from '@/utils/getActorInfo';
import { getActorFilmsAndHobbies } from '@/utils/getActorFilmsAndHobbies';
import { Circles } from 'react-loader-spinner';
import './style.sass'
import getActorPosters from '@/utils/getActorPosters';
type UserItemPageParams = {
  id: string;
}

const ActorPage = () => {
  const { id } = useParams<UserItemPageParams>();
  const [actorInfo, setActorInfo] = useState<ACTOR>();
  useEffect(() => {
    fetchActor(id as string).then(data => setActorInfo(data as ACTOR))
  }, [id])
  
  return (
    actorInfo ? 
    <>
      <Header />
      <ActorInfo information={getActorInfo(actorInfo)}/>
      <ActorDescription filmsAndHobbies={getActorFilmsAndHobbies(actorInfo)} />
      <ActorSlider images={actorInfo.images} />
      <ActorVideo information={getActorInfo(actorInfo)}/>
      <Posters posters={getActorPosters(actorInfo)}/>
      <ContactUs />
      <Footer />
    </> : <Circles color='#0A0A0A' wrapperClass="actor_spinner"/>
      
  )
}

export default ActorPage;



