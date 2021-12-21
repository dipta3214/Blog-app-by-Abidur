import React from 'react'
import ReactDOM from 'react-dom'


const Modal = (props) => {
    if (!props.open) {
        return null
    }

    return ReactDOM.createPortal(
        <div>
            <div className='overlay' />
            <div className='modal'>
                <h3>{props.text}</h3>
                {props.children}
                <button onClick={props.onSubmit}>{props.okay}</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal