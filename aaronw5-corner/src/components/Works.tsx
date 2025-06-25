
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.webp";
import projects from "../assets/developmentProjects.png";
import designs from "../assets/artDesigns.webp";
import designContainer from "../assets/artContainer.webp"
import backButton from "../assets/backButton.webp";

//LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";
import Design from "./Design.tsx";
import Button from "./Button.tsx";

//DESIGNS
import art from "./Art.tsx";

//MOTION 
import { motion } from "motion/react";

//DEV THUMBS
import nexThumb from "../assets/nexulumThumb.webp"
import sudokuThumb from "../assets/sudokuThumb.webp"
import onitamaThumb from "../assets/onitamaThumb.webp";
import botbashThumb from "../assets/botbashThumb.webp";
import untitledThumb from "../assets/untitledThumb.webp";
import spaceThumb from "../assets/spaceThumb.webp";
import awakeThumb from "../assets/awakeThumb.webp";
import databaseThumb from "../assets/databaseThumb.webp";
import wiresharkThumb from "../assets/wiresharkThumb.webp";

//LIBRARIES
import { useState } from "react";

function Works() {

    //USE STATES
    const [projectsActivated, updateProjectsActivated] = useState(false);
    const [designsActivated, updateDesignsActivated] = useState(false);
    const [worksActivated, updateWorksActivated] = useState(true);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const activateProjects = () => {
        updateProjectsActivated(true);
        updateWorksActivated(false);
    }

    const activateDesigns = () => {
        updateDesignsActivated(true);
        updateWorksActivated(false);
    }

    const activateWorks = () => {
        updateDesignsActivated(false);
        updateProjectsActivated(false);
        updateWorksActivated(true);
    }

    const handleExpandImage = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    }

    //ART MAPPING 
    const design = art.map((value, index) => {
        return <Design onClick={() => handleExpandImage(index)} index={index} date={value.caption} img={value.design}></Design >
    });



    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.webp') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={true} currentPage="works"></Navbar>
            {projectsActivated ?
                <>
                    <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ marginTop: 50, width: "50%" }}>
                            <motion.img
                                initial={{ opacity: 0.0 }}
                                animate={{ opacity: 1.0 }}
                                transition={{ delay: 0.2, duration: 1 }}
                                style={{ scale: 1, maxWidth: 769, maxHeight: 680, marginLeft: 60, marginRight: 60 }} src={projects}>
                            </motion.img>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button marginLeft={"140%"} height={80} width={80} target={""} image={backButton} disableAfterClick={false} message={"Works"} onClick={() => { activateWorks() }}></Button>
                                <p style={{ fontFamily: "Mark Pro", fontSize: 24, marginTop: "0%", marginRight: "40%", textAlign: "center" }}>Projects I've written code<br></br> and helped develop on.</p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0.0 }}
                            animate={{ opacity: 1.0 }}
                            transition={{ delay: 0.2 }}
                            style={{ overflow: "auto", width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.webp') + ')' }}>
                            <div style={{ marginLeft: "5%" }}>
                                <DevProject thumb={nexThumb} tools={["C#", "Unity", "Photoshop", "Blender"]} hasLink={true} link={"www.nexulum.com"} description={"A 3D top-down exploration game with class and upgrade mechanics."} title={"Nexulum"}></DevProject>
                                <DevProject thumb={onitamaThumb} tools={["C#", "Unity",]} hasLink={false} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Virtual board game ran in Unity, modeled after the original Onitama. \n\n\nDeveloped UI/Camera logic."} title={"Onitama Prototype"}></DevProject>
                                <DevProject thumb={sudokuThumb} tools={["Python", "SKLearn", "Pandas", "Numpy"]} hasLink={true} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Python solver for sudoku trained on 3 individual models. "} title={"Sudoku Solver"}></DevProject>
                                <DevProject thumb={wiresharkThumb} tools={["Python", "Wireshark", "PyShark"]} hasLink={false} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Analysis tool for detailing stored .pcapng files, with the ability to capture and view new ones. Built with an MVC architecture."} title={"Wireshark Packet Analyzer"}></DevProject>
                                <DevProject toolsMargin={0} thumb={botbashThumb} tools={["C#", "Unity",]} hasLink={true} link={"github.com/Whitaker-Aaron/CS-PSY-484-Group-10-Project"} description={"VR prototype developed to simulate the ability to throw balls. Aim to destory targets as the user is taken through the world on rails."} title={"Bot Bash"}></DevProject>
                                <DevProject thumb={untitledThumb} tools={["C++", "Raylib", "OpenGL"]} hasLink={false} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Sidescrolling space shooter developed to prototype a game engine made from scratch. "} title={"Untitled Space Game"}></DevProject>
                                <DevProject thumb={spaceThumb} tools={["C++", "OpenGL", "CMake"]} hasLink={false} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Solar System rotating diorama made to simulate orbit physics. Shaders and textures written and loaded by scratch. "} title={"Solar System Project"}></DevProject>
                                <DevProject thumb={databaseThumb} tools={["Python", "PostgreSQL"]} hasLink={false} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Python GUI trivia game that pulls questions from database, which stores user information and top scores."} title={"General Trivia"}></DevProject>
                                <DevProject thumb={awakeThumb} tools={["C#", "Unity"]} hasLink={false} link={"github.com/Whitaker-Aaron/whitaker-aaron.github.io"} description={"Pokemon styled RPG demo developed during a course taken on Game Design. "} title={"Finally You're Awake"}></DevProject>
                            </div>
                        </motion.div>
                    </div>

                </> : ""

            }

            {designsActivated ?
                <>
                    <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ marginRight: "18%", marginTop: 50, width: "30%" }}>
                            <motion.img
                                initial={{ opacity: 0.0 }}
                                animate={{ opacity: 1.0 }}
                                transition={{ delay: 0.2, duration: 1 }}
                                style={{ scale: 1, maxWidth: 769, maxHeight: 680, marginLeft: 30, marginRight: 120 }} src={designs}></motion.img>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button marginLeft={"140%"} height={80} width={80} target={""} image={backButton} disableAfterClick={false} message={"Works"} onClick={() => { activateWorks() }}></Button>
                                <p style={{ fontFamily: "Mark Pro", fontSize: 24, marginTop: "0%", marginLeft: "25%", textAlign: "center" }}>Examples of designs and illustrations I've made in the past.</p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0.0 }}
                            animate={{ opacity: 1.0 }}
                            transition={{ delay: 0.2 }}
                            style={{ width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.webp') + ')' }}>
                            <div style={{
                                overflow: "auto", marginLeft: "3% ", width: 946, height: 839, backgroundImage: 'url(' + require('../assets/artContainer.png') + ')'
                            }}>
                                < div style={{ width: 800, maxWidth: 800, marginTop: 30, marginLeft: 50, display: "flex", flexWrap: "wrap" }}>
                                    {design}
                                </div>
                            </div>
                        </motion.div>

                    </div >
                    <Lightbox
                        open={lightboxOpen}
                        close={() => setLightboxOpen(false)}
                        index={lightboxIndex}
                        on={{ view: ({ index: lightboxIndex }) => setLightboxIndex(lightboxIndex) }}
                        slides={
                            art.map((value, index) => {
                                return { src: value.design }
                            })
                        }
                    />
                </>

                : ""
            }

            {
                (worksActivated && !projectsActivated && !designsActivated) ? <div style={{ marginTop: 215, display: "flex", justifyContent: "space-evenly" }}>
                    <motion.img
                        initial={{ opacity: 0.0 }}
                        animate={{ opacity: 1.0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        style={{ maxWidth: 594, maxHeight: 278, marginLeft: 10 }} src={stuff}></motion.img>
                    <div style={{ marginLeft: 90 }}>
                        <WorksHeader onClick={() => activateProjects()} header={"Development Projects"} message={"Projects I've written code and helped develop on."} />
                        <WorksHeader onClick={() => activateDesigns()} header={"Art and Designs"} message={"Examples of designs and illustrations I've made in the past."} />
                    </div>

                </div> : ""
            }
        </div >
    </>
}

export default Works;