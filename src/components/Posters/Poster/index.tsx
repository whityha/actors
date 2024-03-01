import { NEW_LINE_DELIMITER } from '@/constants';
import './styled.sass'

interface Poster {
    name: string;
    poster: string;
    inRoles?: string;
}

const Poster = ({name, inRoles, poster}: Poster) => {
    return <div className='poster-container'>
    <div className='poster'>
        <div className="poster_image-container">
            <img className="poster_image" src={poster} alt={name} loading='lazy'/>
        </div>
        <div className="poster_content">
            <h3 className="poster_title">{name}</h3>
            <p className="poster_subtitle">В ролях:</p>
            <ul className="poster_roles">
                {inRoles && inRoles.split(NEW_LINE_DELIMITER).filter(Boolean).map(item => <li key={item}>{item.trim()}</li>)}
            </ul>
        </div>
    </div>
</div>
}

export default Poster