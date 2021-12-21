import React from 'react'
import ReactDOM from 'react-dom'


const Overlay_styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

const Modal_styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const Modal = (props) => {
    // if (!props.open) {
    //     return null
    // }

    console.log('hello')

    return ReactDOM.createPortal(
        <div>
            <div style={Overlay_styles} />
            <div style={Modal_styles}>
                <h6>Are you sure?</h6>
                <button onClick={props.onCancel}>Cancel</button>
                <button>Yes</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal