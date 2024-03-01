import { Link, useParams } from "react-router-dom"
import { EMAIL, LINKS, PDF_ALL_ACTORS, TELEPHONE, YOUTUBE_LINK } from "../../../constants"
import Logo from "../../Logo"

import './style.sass'

const MobileFooter = () => {
    const { id: isActorPage } = useParams();
    return <footer id='footer_mobile' className="footer_mobile">
        <div className='footer_mobile_container'>
            <div className='wrapper footer_mobile_content'>
                <div className="footer_mobile_top">
                    <Link to='/'><Logo /></Link>
                    <a className="footer_mobile_phone" href={`mailto: ${TELEPHONE}`}>{TELEPHONE}</a>
                </div>
                <nav className="footer_mobile_nav">
                    <ul className="footer_mobile_nav-list">
                        {LINKS.map(({id, link, name}) => {
                            return isActorPage ? 
                            <li className="footer_mobile_nav-item" key={id} ><Link to={'/'}>{name}</Link></li> : 
                            <li className="footer_mobile_nav-item" key={id} ><a href={link}>{name}</a></li>
                        })}
                    </ul>
                </nav>
                <div className="footer_mobile_social">
                    <a href={YOUTUBE_LINK}>YouTube</a>
                    <a href={`mailto: ${EMAIL}`}>{EMAIL}</a>
                </div>
                <button className="footer_mobile_button"><a href={PDF_ALL_ACTORS}>скачать шахматку на всех актеров</a></button>
            </div>            
        </div>
        <div className="footer_mobile_design">
            <p className="wrapper footer_mobile_design-text">сайт создан <a target="_blank" href='https://design-life.pro' className="footer_mobile_design-link">студией "design life"</a></p>
        </div>
    </footer>
}

export default MobileFooter