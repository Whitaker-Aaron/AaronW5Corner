
import { Modal } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/profilePic.png";

interface Props {
    modalId
    show,
    setShow,
    message: string,
    header: string,
    children

}

interface AboutProps {
    modalId
    show,
    setShow,
}

function ModalComp(props: Props) {


    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: "Mark Pro" }}>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontFamily: "Mark Pro" }}>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function AboutModalComp(props: AboutProps) {
    return (
        <>
            <ModalComp
                header="Hi, I'm Aaron."
                message="I'm a Software/QA Engineer with active experience in Graphic Design, Game Design and Art."
                modalId={props.modalId}
                show={props.show}
                setShow={props.setShow}>
                <div style={{ margin: 0, display: "inline-flex" }}>
                    <img style={{ marginBottom: 0, maxWidth: "15%", maxHeight: "15%" }} src={logo}></img>

                    <p style={{ fontSize: 18, margin: 20, marginLeft: 20 }}>Contact Me: aaronwhitaker690@gmail.com<br></br>I'm a Software/QA Engineer with active experience in Graphic Design, Game Design and Art.</p>
                </div>
                <div style={{ marginTop: 40 }}>
                    <p className="h2">Education</p>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I attended the University of Nevada, Reno, and graduated Cum Laude in May 2025. </ul>
                    </li>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I hold a <strong>Bachelors of Science in Computer Science and Engineering</strong>, with minors in Digital Interactive Games and Mathematics.</ul>
                    </li>
                </div>
                <div style={{ marginTop: 40 }}>
                    <p className="h2">About Me</p>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I love video games! I'm always following the industry and I have experience in developing and releasing small scale game projects. </ul>
                        <ul>My favorite franchises are The Legend of Zelda, Xenoblade Chronicles, Final Fantasy and Splatoon. </ul>
                    </li>
                </div>

            </ModalComp>
        </>
    );
}

export default AboutModalComp;