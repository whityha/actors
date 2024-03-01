import ReactDOM from 'react-dom'
import { EMAIL, LINKS, TELEPHONE } from '@/constants'
import Logo from '../Logo'
import './style.sass'

const BurgerMenu = ({active, dark, close}: {active: boolean; dark?: boolean; close: () => void}) => {
  return ReactDOM.createPortal(
    <div className={active ? 'burger_menu active': 'burger_menu'}>
      <div className={`${dark ? 'dark ' : ''}burger wrapper`}>
        <div className={`${dark ? 'dark ' : ''}burger_burger`} onClick={close}></div>
        <div className='burger_logo'>
            <Logo dark={!dark} />
        </div>
        <div className={`${dark ? 'dark ' : ''}burger_phone_icon`}><a className="burger_phone-link" href={`tel: ${TELEPHONE}`}></a></div>
      </div>
      <nav className='burger_nav'>
          <ul className='burger_nav_list'>
          {LINKS.map(({id, link, name}) => {
              return <li className='burger_nav_item' key={id}><a href={link} onClick={close}>{name}</a></li>
          })}
          </ul>
          <div className="burger_phone"><a className="burger_phone-link" href={`tel: ${TELEPHONE}`}>{TELEPHONE}</a></div>
          <div className="burger_phone"><a className="burger_phone-email" href={`mailto: ${EMAIL}`}>{EMAIL}</a></div>
      </nav>
    </div>, document.body)
}

export default BurgerMenu