import ActorsListMobile from "./ActorsListMobile"
import ActorsListDesktop from "./ActorsListDesktop"
import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIA_QUERY } from "@/constants";


const ActorList = ({actors}: {actors: any}) => {
    const windowWidth = useWindowWidth();

  return (
    windowWidth <= MEDIA_QUERY.large ? <ActorsListMobile actors={actors} /> : <ActorsListDesktop actors={actors} />
  )
}

export default ActorList