import Modal from "../comps/Modal";
import Button from "../comps/Button";
import { useState } from "react";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }
    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Do you accept the terms ?</p>
        </Modal>;
    return <div>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal &&  modal}
    </div>;
}

export default ModalPage;