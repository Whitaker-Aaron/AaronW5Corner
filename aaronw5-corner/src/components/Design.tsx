
import { useState } from "react";

//MOTION 
import { motion } from "motion/react";

interface Props {
    img,
    date,
    index?
    onClick?: () => void;
}

function Design(props: Props) {
    const [scale, setScale] = useState(1.0);

    return <>
        <motion.div style={{ position: "relative", padding: 20, scale: scale }}
            whileHover={{ scale: 1.1 }}
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
        </motion.div>
    </>
}

export default Design