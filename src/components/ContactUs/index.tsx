import { useState } from 'react'
import Popup from '../Popup'
import PopupContent from '../PopupContent'
import './style.sass'

const ContactUs = () => {
  const [isOpenPopup, setOpenPopup] = useState(false)
  return (
    <>
    <Popup isOpen={isOpenPopup} closePopup={() => {setOpenPopup(false)}}><PopupContent /></Popup>
    <section className="contact">
        <div className='wrapper'>
            <h2 className='contact_title'>свяжитесь с нами для начала сотрудничества</h2>
            <button className='contact_button' onClick={() => setOpenPopup(true)}>Начать работу</button>
        </div>
    </section>
    </>
  )
}

export default ContactUs