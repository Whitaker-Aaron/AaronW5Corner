import home from "../assets/homeIcon.png";
import Button from "./Button.tsx";

import { Link } from "react-router-dom";

interface Props {
    currentPage: string
    home?
}

function Navbar(props: Props) {
    return <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="h4" style={{ marginLeft: 30, fontFamily: "Mark Pro" }}>{props.currentPage}</p>
            {props.home ? <Link to="/"><Button height={50} width={50} target={""} image={home} disableAfterClick={false} message={"Works"}></Button></Link> : ""}
        </div >

    </>
}

export default Navbar