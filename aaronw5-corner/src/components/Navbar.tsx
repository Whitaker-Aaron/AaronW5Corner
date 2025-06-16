import home from "../assets/homeIcon.png";
import Button from "./Button.tsx";

import { Link } from "react-router-dom";

interface Props {
    currentPage: string
    home?
}

function Navbar(props: Props) {
    return <>
        <div style={{ height: 72, backgroundImage: 'url(' + require('../assets/header.png') + ')', display: "flex", justifyContent: "space-between" }}>
            <p className="h4" style={{ opacity: 0.5, marginTop: 5, marginLeft: 40, fontFamily: "Mark Pro" }}>{props.currentPage}</p>
            {props.home ? <Link style={{ opacity: 1.0, marginRight: 45, marginBottom: 10 }} to="/"><Button height={50} width={50} target={""} image={home} disableAfterClick={false} message={"Works"}></Button></Link> : ""}
        </div >

    </>
}

export default Navbar