import { EMAIL, TELEGRAM, TELEPHONE, WHATS_APP } from "@/constants"
import './styled.sass'

const PopupContent = () => {
  return (
    <div className="popup_content">
        <h3 className="popup_content-title">свяжитесь с нами</h3>
        <a className="popup_content-item phone" href={`tel: ${TELEPHONE}`}>{TELEPHONE}</a>
        <a className="popup_content-item email" href={`mailto: ${EMAIL}`}>{EMAIL}</a>
        <a className="popup_content-item whatsapp" href={WHATS_APP}>Написать в What's app</a>
        <a className="popup_content-item telegram" href={TELEGRAM}>Написать в Telegram</a>
    </div>
  )
}

export default PopupContent