
import { Modal } from "react-bootstrap";
import { useState } from "react";

interface Props {
    modalId: string
    show,
    setShow
}

function ModalComp(props: Props) {


    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hi, I'm Aaron.</Modal.Title>
                </Modal.Header>
                <Modal.Body>I'm a graduate with a B.S. in Computer Science and Engineering, and an interest in Graphic Design.</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;