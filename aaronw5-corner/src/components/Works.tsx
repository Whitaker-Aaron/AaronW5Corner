
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import WorksHeader from "./WorkHeader.tsx";

//LIBRARIES
import { useState } from "react";

function Works() {

    const [projectsActivated, updateProjectsActivated] = useState(false);
    const [designsActivated, updateDesignsActivated] = useState(false);



    return <>
        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.png') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={false} currentPage="works"></Navbar>
            {projectsActivated ? "" : ""}
            {designsActivated ? "" : ""}
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