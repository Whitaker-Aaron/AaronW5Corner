
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import thoughts from "../assets/latestThoughts.png";
import designContainer from "../assets/artContainer.png"
import backButton from "../assets/backButton.png";

//LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

//MOTION 
import { motion } from "motion/react";


import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";
import Design from "./Design.tsx";
import Button from "./Button.tsx";


//LIBRARIES
import { useState } from "react";

function Thoughts() {
    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.webp') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={true} currentPage="thoughts"></Navbar>
            <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ marginRight: "18%", marginTop: 50, width: "30%" }}>
                    <motion.img
                        initial={{ opacity: 0.0 }}
                        animate={{ opacity: 1.0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        style={{ scale: 1, maxWidth: 769, maxHeight: 680, marginLeft: 30, marginRight: 120 }} src={thoughts}></motion.img>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontFamily: "Mark Pro", fontSize: 24, marginTop: "0%", marginLeft: "25%", textAlign: "center" }}>Write-ups and articles <br></br>of my current thoughts / ideas.</p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0.0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.2 }}
                    style={{ width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.webp') + ')' }}></motion.div>
            </div>
        </div >
    </>
}

export default Thoughts;