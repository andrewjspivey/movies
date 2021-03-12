


const Modal = ({show=false, onClose, children}) => {
    return (
        <div className="modal" style={{display: show ? 'flex' : 'none'}}>
            <div className="modal-content">
                <div>
                    <button onClick={onClose}>X</button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;