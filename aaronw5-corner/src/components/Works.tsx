
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import projects from "../assets/developmentProjects.png";
import WorksHeader from "./WorkHeader.tsx";
import DevProject from "./DevProject.tsx";

//LIBRARIES
import { useState } from "react";

function Works() {

    const [projectsActivated, updateProjectsActivated] = useState(false);
    const [designsActivated, updateDesignsActivated] = useState(false);



    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.png') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={false} currentPage="works"></Navbar>
            {projectsActivated ?
                <div style={{ height: "88%", width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    <img style={{ scale: 1, maxWidth: 962, maxHeight: 851, marginBottom: 200, marginLeft: 60, marginRight: 60 }} src={projects}></img>
                    <div style={{ overflow: "auto", width: 990, backgroundImage: 'url(' + require('../assets/worksContainer.png') + ')' }}>
                        <div style={{ marginLeft: "5%" }}>
                            <DevProject title={"Nexulum"}></DevProject>
                            <DevProject title={"Sudoku Solver"}></DevProject>
                        </div>

                    </div>
                </div> : ""
            }

            {designsActivated ?
                "" : ""
            }

            {(!projectsActivated && !designsActivated) ? <div style={{ marginTop: 215, display: "flex", justifyContent: "space-evenly" }}>
                <img style={{ maxWidth: 594, maxHeight: 278, marginLeft: 10 }} src={stuff}></img>
                <div style={{ marginLeft: 90 }}>
                    <WorksHeader onClick={() => updateProjectsActivated(true)} header={"Development Projects"} message={"Projects I've written code and helped develop on."} />
                    <WorksHeader onClick={() => updateDesignsActivated(true)} header={"Art and Designs"} message={"Examples of designs and illustrations I've made in the past."} />
                </div>
            </div> : ""}
        </div>
    </>
}

export default Works;