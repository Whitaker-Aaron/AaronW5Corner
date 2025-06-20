
import { useState } from "react";

interface Props {
    img,
    date,
    index?
    onClick?: () => void;
}

function Design(props: Props) {
    const [scale, setScale] = useState(1.0);

    return <>
        <div style={{ position: "relative", padding: 20, scale: scale }}
            onMouseEnter={() => { setScale(1.1) }}
            onMouseLeave={() => { setScale(1.0) }}
            onClick={props.onClick}>
            <img style={{ boxShadow: "10px 10px 10px grey", maxWidth: "100%", maxHeight: 450, scale: 1 }} src={props.img}></img>
            <div
                style={{
                    marginTop: 10,
                    backgroundImage: 'url(' + require('../assets/toolBackground_medium.png') + ')',
                    scale: 1, width: 100, height: 25,
                }}
            >
                <p style={{ fontSize: 15, marginBottom: 5, color: "#0c4047", opacity: 0.75, textAlign: "center" }}>{props.date}</p>
            </div >
        </div>
    </>
}

export default Design