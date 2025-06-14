
import Navbar from "./Navbar.tsx";
import stuff from "../assets/stuffI'veWorkedON.png";
import WorksHeader from "./WorkHeader.tsx";

function Works() {
    return <>

        <div className="bg-image" style={{ backgroundImage: 'url(' + require('../assets/background_1.png') + ')', height: "100vh", backgroundSize: "100%" }}>
            <br></br>
            <Navbar home={true} currentPage="works"></Navbar>
            <div style={{ marginTop: 215, display: "flex", justifyContent: "space-between" }}>
                <img style={{ maxWidth: 594, maxHeight: 278, marginLeft: 40 }} src={stuff}></img>
                <div>
                    <WorksHeader />
                    <WorksHeader />
                </div>
            </div>

        </div>
    </>
}

export default Works;