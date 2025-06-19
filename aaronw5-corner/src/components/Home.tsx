//COMPONENTS
import ListGroup from "./ListGroup.tsx";
import Alert from "./Alert.tsx";
import Button from "./Button.tsx";
import ModalComp from "./ModalComp.tsx";
import AboutModalComp from "./ModalComp.tsx";
import Navbar from "./Navbar.tsx";

//ASSETS
import button1 from "../assets/aboutButton.svg.png";
import button2 from "../assets/worksButton.svg.png";
import button3 from "../assets/thoughtsButton.svg.png";
import bluesky from "../assets/blueskyLogo.png";
import youtube from "../assets/youtubeLogo.png";
import logo from "../assets/aaronw5logo.png";
import background from "../assets/background_1.png";

//LIBRARIES
import { useState } from "react";
import { Link } from "react-router-dom";


function Home() {
    let names = ["Aaron 1", "Aaron 2", "Aaron 3", "Aaron 4"];
    let heading = "Today's names";
    //let names2 = ["George 1", "Aaron 6", "Aaron 12", "Aaron 90"];
    let heading2 = "Yesterday's names";
    let message = "Good day!";
    let buttonMessage = "Exit";
    let increment = 0;

    const [names2, updateNames2] = useState(["George 1", "Aaron 6", "Aaron 12", "Aaron 90"]);
    const [nameDeleteButton, updateNameDelteButton] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleSelectItem = (item: String) => {
        increment++;
        console.log("Passing ", item, " into App.tsx");
        console.log("# of times, list clicked: ", increment);
    }

    const handleButtonClick = () => {
        console.log("Button clicked");
        updateNameDelteButton(true);
        updateNames2(names2.filter(a =>
            a !== names2[names2.length - 1]
        ));

    }
    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.png') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={true} currentPage="home"></Navbar>
            <div style={{ marginTop: 150, marginBottom: 0 }}>
                <div style={{ marginLeft: "0", display: "flex", justifyContent: "center", padding: 0 }}>
                    <img style={{ scale: 0.75, padding: 0, marginRight: 0 }} src={logo}></img>
                    <p style={{ opacity: 0.8, marginTop: 45, marginRight: 50, marginLeft: 0, fontFamily: "Mark Pro" }} className="display-1">'s Corner</p>
                </div>
                <p style={{ opacity: 0.8, marginTop: 30, marginBottom: 20, fontFamily: "Mark Pro" }} className="text-center h3">The one stop shop for my experience, projects and opinions</p>
                <div className="btn-group" style={{ marginTop: 40, marginLeft: "31.25%" }}>
                    <Button height={62} width={215} target={"AboutModal"} image={button1} disableAfterClick={false} message={"About"} onClick={handleShow}></Button>
                    <Link to="/works"><Button height={62} width={215} target={""} image={button2} disableAfterClick={false} message={"Works"} onClick={handleButtonClick}></Button></Link>
                    <Button height={62} width={215} target={""} image={button3} disableAfterClick={false} message={"Thoughts"} onClick={handleButtonClick}></Button>
                </div>
                {/*<img style={{ marginTop: "12.75%", maxWidth: "100%" }} src={banner}></img>*/}
                <div className="btn-group" style={{ marginTop: 180, marginLeft: "47.25%" }}>
                    <a target="_blank" href="https://bsky.app/profile/aaronw5.bsky.social"><Button height={50} width={50} target={""} image={bluesky} disableAfterClick={false} message={"Works"} onClick={handleButtonClick}></Button></a>
                    <a target="_blank" href="https://www.youtube.com/@aaronw5264"><Button height={50} width={50} target={""} image={youtube} disableAfterClick={false} message={"Works"} onClick={handleButtonClick}></Button></a>
                </div>
                <p style={{ textAlign: "center", fontFamily: "Mark Pro", marginTop: 15, marginLeft: 67, fontSize: 16 }}>&#169; 2025 Aaron Whitaker</p>

            </div >
            <AboutModalComp show={show} setShow={setShow} modalId={"AboutModal"}></AboutModalComp>
        </div >
    </>
}

export default Home;