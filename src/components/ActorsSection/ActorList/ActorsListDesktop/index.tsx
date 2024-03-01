import { Link } from "react-router-dom";
import { ActorList } from "../../types";

import './styled.sass'

const ActorsList = ({actors}: ActorList) => {
    return <ul className="actors_list">{actors.map(({product_id, name, images}) => {
            return <li className='actors_person' key={product_id}>
                <Link to={`/${product_id}`}><img className='actors_person-image' src={images[0] && images[0].thumb} alt={`photo_${name}`} loading="lazy" /></Link>
                <Link to={`/${product_id}`} className='actors_person-name'>{name}</Link>
                <span className="actors_person-icon"></span>
                <Link className="actors_person-button" to={`/${product_id}`}><span>Подробнее</span></Link>
            </li>
        })}
    </ul> 
}

export default ActorsList;