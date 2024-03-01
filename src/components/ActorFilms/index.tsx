import { FilmsAndHobbies } from '@/types'
import './style.sass'
import { NEW_LINE_DELIMITER } from '@/constants'

const ActorDescription = ({filmsAndHobbies}: {filmsAndHobbies: FilmsAndHobbies}) => {
    const films = filmsAndHobbies.films?.attribute.reverse()

    return <section className="description">
        <div className="wrapper description_content">        
            <div className="description_films">
                <h2 className="description_films-title">ФИЛЬМОГРАФИЯ</h2>
                <ul className="description_films-list">
                {films && films.map(({attribute_id, text, name: year}) => <li key={attribute_id} className="description_films-item">
                        <p className="description_films-year">{year}</p>
                        <ul className="description_films-items">
                            {text.split(NEW_LINE_DELIMITER).filter(Boolean).map((item) => <li key={item} className="description_films-film">{item.trim()}</li>)}
                        </ul>
                    </li>)}
                </ul>
            </div>
            <ul className="description_hobby">
                {filmsAndHobbies.hobbies?.attribute[0].text.split(NEW_LINE_DELIMITER).filter(Boolean).map((item) => item && <li key={item} className="description_hobby-item">{item.trim()}</li>)}
            </ul>
        </div>
    </section>
}

export default ActorDescription