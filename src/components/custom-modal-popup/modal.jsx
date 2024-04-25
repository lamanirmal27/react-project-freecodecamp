import './modal.css'
export default function Modal({id, header, body, footer, onClose}) {

    return <div id={id || "Modal"} className="modal">
        <div className="modal-content">
            <div className="header">
                <span onClick={onClose} className="modal-close-icon">&times;</span>
               {
                header ? header : <h2>Header</h2>
               }
            </div>
            <div className="body">
                {
                    body ? body : <p>This is our modal body</p>
                }
            </div>
            <div className="footer">
                {
                    footer ? footer : <h2>Footer</h2>
                }
            </div>
        </div>
    </div>
}