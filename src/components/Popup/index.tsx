import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'
import './styled.sass'


interface Popup {
    isOpen: boolean;
    children: ReactNode
    closePopup?: () => void;
}

const Popup = ({isOpen = false, closePopup, children}: Popup) => {
    return ReactDOM.createPortal(
        <PopupInner 
            closePopup={closePopup} 
            isOpen={isOpen}
        >
            {children}
        </PopupInner>,
        document.body)
}

const PopupInner = ({isOpen, children, closePopup}: Popup) => {
    const onKeypress = (e: KeyboardEvent) => {
        if(e.code === 'Escape') closePopup && closePopup()
    }

    useEffect(() => {
        isOpen && window.addEventListener('keydown', onKeypress);
        return () => {
            window.removeEventListener('keydown', onKeypress)
        };
    }, [isOpen])

    return <Transition 
        in={isOpen}
        timeout={400}
        mountOnEnter
        unmountOnExit
            >
        {(state) => <div className={`popup ${state}`} onClick={closePopup}>
            <div className={`popup_inner ${state}`} onClick={(e) => e.stopPropagation()}>
                    {children}
            </div>
        </div>    
        }
    </Transition>
}


export default Popup