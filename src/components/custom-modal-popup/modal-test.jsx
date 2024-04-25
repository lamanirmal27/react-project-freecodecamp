import { useState } from "react"
import Modal from "./modal";

export default function ModalTest() {
    const [showModalPoppup, setShowModalPopPup] = useState(false);

    function handleModalPoppup() {
        setShowModalPopPup(!showModalPoppup);
    }
    function onClose(){
        setShowModalPopPup(false);
    }
    return <div>
        <button onClick={handleModalPoppup}>Open Modal Poppup</button>
        {
            showModalPoppup && <Modal 
            header={<h1>Customized header</h1>}
            footer={<h1>Customized footer</h1>}
            onClose={onClose}
            body={<div>Customized Body</div>}
            />
        }
    </div>
}