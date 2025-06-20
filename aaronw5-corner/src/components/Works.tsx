
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import designs from "../assets/artDesigns.png";
import designContainer from "../assets/artContainer.png"
import backButton from "../assets/backButton.png";

//LIGHTBOX
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";
import Design from "./Design.tsx";
import Button from "./Button.tsx";

//DESIGNS
import art_1 from "../assets/art_1.jpg";
import art_2 from "../assets/art_2.jpg";
import art_3 from "../assets/art_3.png";
import art_4 from "../assets/art_4.jpg";
import art_5 from "../assets/art_5.jpg";
import art_6 from "../assets/art_6.jpg";
import art_7 from "../assets/art_7.png";
import art_8 from "../assets/art_8.jpg";
import art_9 from "../assets/art_9.jpg";
import art_10 from "../assets/art_10.jpg";
import art_11 from "../assets/art_11.jpg";
import art_12 from "../assets/art_12.jpg";

//DEV THUMBS
import nexThumb from "../assets/nexulumThumb.png"
import sudokuThumb from "../assets/sudokuThumb.png"
import onitamaThumb from "../assets/onitamaThumb.png";
import botbashThumb from "../assets/botbashThumb.png";
import untitledThumb from "../assets/untitledThumb.png";
import spaceThumb from "../assets/spaceThumb.png";
import awakeThumb from "../assets/awakeThumb.png";
import databaseThumb from "../assets/databaseThumb.png";
import wiresharkThumb from "../assets/wiresharkThumb.png";

//LIBRARIES
import { useState } from "react";

function Works() {

    //USE STATES
    const [projectsActivated, updateProjectsActivated] = useState(false);
    const [designsActivated, updateDesignsActivated] = useState(false);
    const [worksActivated, updateWorksActivated] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(true);

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



    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.png') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={true} currentPage="works"></Navbar>
            {projectsActivated ?
                <>
                    <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ marginTop: 50, width: "50%" }}>
                            <img style={{ scale: 1, maxWidth: 769, maxHeight: 680, marginLeft: 60, marginRight: 60 }} src={projects}></img>
                            <Button marginLeft={"140%"} height={80} width={80} target={""} image={backButton} disableAfterClick={false} message={"Works"} onClick={() => { activateWorks() }}></Button>
                        </div>
                        <div style={{ overflow: "auto", width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.png') + ')' }}>
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


                        </div>


                    </div>

                </> : ""

            }

            {designsActivated ?
                <>
                    <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ marginRight: "18%", marginTop: 50, width: "30%" }}>
                            <img style={{ scale: 1, maxWidth: 769, maxHeight: 680, marginLeft: 30, marginRight: 120 }} src={designs}></img>
                            <Button marginLeft={"140%"} height={80} width={80} target={""} image={backButton} disableAfterClick={false} message={"Works"} onClick={() => { activateWorks() }}></Button>

                        </div>
                        <div style={{ width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.png') + ')' }}>
                            <div style={{
                                overflow: "auto", marginLeft: "3% ", width: 946, height: 839, backgroundImage: 'url(' + require('../assets/artContainer.png') + ')'
                            }}>
                                < div style={{ width: 800, maxWidth: 800, marginTop: 30, marginLeft: 50, display: "flex", flexWrap: "wrap" }}>
                                    <Design date={"Jul. 2024"} img={art_1}></Design>
                                    <Design date={"Aug. 2024"} img={art_2}></Design>
                                    <Design date={"May 2024"} img={art_3}></Design>
                                    <Design date={"May 2024"} img={art_4}></Design>
                                    <Design date={"Mar. 2024"} img={art_5}></Design>
                                    <Design date={"Jun. 2023"} img={art_7}></Design>
                                    <Design date={"Mar. 2023"} img={art_6}></Design>
                                    <Design date={"Feb. 2023"} img={art_8}></Design>
                                    <Design date={"Jan. 2023"} img={art_9}></Design>
                                    <Design date={"Dec. 2023"} img={art_10}></Design>
                                    <Design date={"Dec. 2023"} img={art_11}></Design>
                                    <Design date={"Jan. 2023"} img={art_12}></Design>

                                </div>
                            </div>
                        </div>

                    </div >
                    <Lightbox
                        open={lightboxOpen}
                        close={() => setLightboxOpen(false)}
                        slides={[
                            { src: art_1 },
                            { src: art_2 },
                            { src: art_3 },
                        ]}
                    />
                </>

                : ""
            }

            {
                (worksActivated && !projectsActivated && !designsActivated) ? <div style={{ marginTop: 215, display: "flex", justifyContent: "space-evenly" }}>
                    <img style={{ maxWidth: 594, maxHeight: 278, marginLeft: 10 }} src={stuff}></img>
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