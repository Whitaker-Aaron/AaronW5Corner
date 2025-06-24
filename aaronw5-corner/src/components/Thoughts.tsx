
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import designs from "../assets/artDesigns.png";
import designContainer from "../assets/artContainer.png"
import backButton from "../assets/backButton.png";

//LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";
import Design from "./Design.tsx";
import Button from "./Button.tsx";


//LIBRARIES
import { useState } from "react";

function Thoughts() {
    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.png') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={true} currentPage="thoughts"></Navbar>
        </div>
    </>
}

export default Thoughts;