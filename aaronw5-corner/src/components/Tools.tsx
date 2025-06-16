
import { useState } from "react";
import file_small from '../assets/toolBackground.png';
import file_medium from '../assets/toolBackground_medium.png';
import file_large from '../assets/toolBackground_large.png';


interface Props {
    tool: string
    marginLeft?
    size: "small" | "medium" | "large"
}

function Tools(props: Props) {

    let width, height, file, style;
    const [scale, setScale] = useState(1.0);
    if (props.size === "small") {
        width = 50;
        height = 25;
        style = {
            backgroundImage: 'url(' + require('../assets/toolBackground.png') + ')',
            marginLeft: props.marginLeft, scale: scale, width: width, height: height,
        }

    }
    if (props.size === "medium") {
        width = 100;
        height = 25;
        style = {
            backgroundImage: 'url(' + require('../assets/toolBackground_medium.png') + ')',
            marginLeft: props.marginLeft, scale: scale, width: width, height: height,
        }

    }
    if (props.size === "large") {
        width = 150;
        height = 25;
        style = {
            backgroundImage: 'url(' + require('../assets/toolBackground_large.png') + ')',
            marginLeft: props.marginLeft, scale: scale, width: width, height: height,
        }

    }


    return <>
        <div
            onMouseEnter={() => { setScale(1.1) }}
            onMouseLeave={() => { setScale(1.0) }}
            style={style}
        >
            <p style={{ fontSize: 15, marginBottom: 5, color: "#0c4047", opacity: 0.75, textAlign: "center", scale: scale }}>{props.tool}</p>
        </div >
    </>
}

export default Tools;