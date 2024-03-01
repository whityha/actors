import { Link } from 'react-router-dom';
import { getDataByAttributeGroup } from '@/utils/getDataByAttributeGroup';
import { ATTRIBUTES_GROUP_NAMES } from '@/types';
import { getDataByAttribute } from '@/utils/getDataFromAttribute';


import './styled.sass'

interface ActorCard {
    name: string;
    description: string;
    thumb: string;
    video: string;
}

const ActorCard = ({id, attributes, name, description, image}: 
    {
        name: string;
        description: string;
        id: string; 
        attributes: Array<any>;
        image: string;
    }) => {        
    const actorInfo = getDataByAttributeGroup(attributes, ATTRIBUTES_GROUP_NAMES.INFO)
    const actor = getDataByAttribute(actorInfo!.attribute)
    return <div className='card'>
        <div className='card-container'>
            <h2 className='card_name'>{name}</h2>
            <p className='card_description'>{description.slice(0, -2)}</p>
            <div className='card_media'>
                <div className='card_container'>
                    <img className='card_image-small' src={image} alt='actor photo' />
                    <button className='card_more' type='button'><Link to={`/${id}`}>Подробнее</Link></button>
                </div>
                {actor?.youtube && <iframe className='card_image-large' width="100%" height="100%" src={`https://www.youtube.com/embed/${actor?.youtube}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowFullScreen></iframe>}
            </div>
        </div>
    </div>
}

export default ActorCard;