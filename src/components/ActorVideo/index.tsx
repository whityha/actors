import { useState } from 'react'

import './style.sass'
const ActorVideo = ({information}: {information: {videos: [{attribute_id: string; name: string; text: string}]}}) => {
    const [activeLink, setActiveLink] = useState(0);
    const handleClickYear = (id: number) => () => {
        setActiveLink(id)
    }

    return (
        information.videos && <section className='video'>
            <div className='wrapper'>
                <div className='video_container'>
                    <ul className='video_labels'>
                        {information.videos.map(({attribute_id, name}, i) => <li 
                            key={attribute_id} 
                            className={activeLink === i ? 'video_label active' : 'video_label'}
                            onClick={handleClickYear(Number(i))}>
                                {name} ГОД
                            </li>)}
                    </ul>
                    <iframe className='video_content' width="100%" height="100%" loading="lazy" src={`https://www.youtube.com/embed/${information.videos[activeLink].text}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />               
                </div>
            </div>
        </section>
    )
}

export default ActorVideo