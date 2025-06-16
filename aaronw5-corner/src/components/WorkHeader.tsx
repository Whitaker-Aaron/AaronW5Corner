
import { useState } from "react";

interface Props {
    header,
    message,
    onClick?: () => void
}

function WorksHeader(props: Props) {
    const [style, setStyle] = useState(1.0);

    return <>
        <div style={{
            backgroundImage: 'url(' + require("../assets/worksBanner.png") + ')', marginTop: 20, marginRight: 40, width: 750, height: 250
        }}
            onMouseEnter={() => setStyle(1.05)}
            onMouseLeave={() => setStyle(1.0)}
            onClick={props.onClick}>
            <br></br>
            <p className="h1" style={{ scale: style, opacity: 0.8, fontFamily: "Mark Pro", marginLeft: "10%", marginTop: "2%" }}>{props.header}</p>
            <p style={{ opacity: 0.8, fontFamily: "Mark Pro", marginLeft: "10.5%", marginTop: "0.5%" }}>{props.message}</p>
        </div >

    </>
}

export default WorksHeader;