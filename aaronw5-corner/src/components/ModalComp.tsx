
import { Modal } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/profilePic_2.png";
import mail from "../assets/mailIcon.png";
import line from "../assets/modalLine.png";

import Button from "./Button.tsx";
import Tools from "./Tools.tsx"

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
                <Modal.Header style={{ backgroundColor: "#f3fcfe" }} closeButton>
                    <Modal.Title style={{ fontFamily: "Mark Pro" }}>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#f3fcfe", fontFamily: "Mark Pro" }}>
                    {props.children}
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#f3fcfe" }} >
                </Modal.Footer>
            </Modal >
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
                    <br></br >
                    <img style={{ marginBottom: 0, maxWidth: 114.9, maxHeight: 114.9 }} src={logo}></img>
                    <div>
                        <p style={{ fontSize: 20, marginLeft: 20 }}>I'm a Software/QA Engineer with active experience in Graphic Design, Game Design and Art.</p>
                        <div style={{ display: "inline-flex", justifyContent: "space-evenly" }}>
                            <Button height={40} width={40} target={""} image={mail} disableAfterClick={false} message={"Works"} onClick={() => { }}></Button>
                            <p style={{ marginTop: 5, opacity: 0.8, fontSize: 14, fontFamily: "Mark Pro" }}>aaronwhitaker690@gmail.com</p>
                        </div>

                    </div>
                </div>
                <br></br >
                <div style={{ marginTop: 60, marginBottom: 30 }}>

                    <p style={{ marginTop: 40 }} className="h2">Education</p>
                    <br></br>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I attended the University of Nevada, Reno, and graduated Cum Laude in May 2025. </ul>
                    </li>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I hold a <strong>Bachelors of Science in Computer Science and Engineering</strong>, with minors in Digital Interactive Games and Mathematics.</ul>
                    </li>
                </div>
                <img style={{ padding: "none", margin: 0 }} src={line}></img>
                <div style={{ marginTop: 20 }}>
                    <p className="h2">Experience</p>
                    <br></br>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I currently work in Quality Engineering. </ul>

                    </li>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I have past experience at multiple start-ups, doing automated test writing, front end web development, and user experience design. </ul>
                    </li>
                    <li style={{ marginLeft: 50 }}>
                        <ul>Some of the tools I've used are as follows: </ul>
                    </li>
                    <div style={{ display: "inline-flex", marginLeft: 82 }}>
                        <Tools size={"small"} tool={"C++"}></Tools><Tools size={"small"} marginLeft={10} tool={"C#"}></Tools><Tools size={"large"} marginLeft={10} tool={"Adobe Photoshop"}></Tools>
                        <Tools size={"medium"} marginLeft={10} tool={"Unity"}></Tools><Tools size={"small"} marginLeft={10} tool={"SQL"}></Tools><Tools size={"medium"} marginLeft={10} tool={"Angular"}></Tools>
                    </div>
                    <div style={{ display: "inline-flex", marginLeft: 82, marginTop: 7 }}>
                        <Tools size={"large"} tool={"Android Studio"}></Tools><Tools marginLeft={10} size={"medium"} tool={"Python"}></Tools><Tools marginLeft={10} size={"medium"} tool={"HTML/CSS"}></Tools><Tools marginLeft={10} size={"medium"} tool={"React"}></Tools>
                    </div>
                </div>
                <img style={{ padding: "none", margin: 0 }} src={line}></img>
                <div style={{ marginTop: 20 }}>
                    <p className="h2">About Me</p>
                    <br></br>
                    <li style={{ marginLeft: 50 }}>
                        <ul>I love video games! I'm always following the industry and I have experience in developing and releasing small scale game projects. </ul>
                        <ul>My favorite franchises are The Legend of Zelda, Xenoblade Chronicles, Final Fantasy and Splatoon. </ul>
                    </li>
                </div>

            </ModalComp >
        </>
    );
}

export default AboutModalComp;