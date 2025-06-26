
import { useState } from "react";

//MOTION
import { motion } from "motion/react";

interface Props {
    header,
    message,
    onClick?: () => void
}

function WorksHeader(props: Props) {
    const [style, setStyle] = useState(1.0);

    return <>
        <motion.div style={{
            backgroundImage: 'url(' + require("../assets/worksBanner.webp") + ')', marginTop: 20, marginRight: 40, width: 750, height: 250
        }}
            whileHover={{ scale: 1.05 }}
            onClick={props.onClick}>
            <br></br>
            <p className="h1" style={{ scale: style, opacity: 0.9, fontFamily: "Mark Pro", marginLeft: "10%", marginTop: "2%" }}>{props.header}</p>
            <p style={{ opacity: 0.9, fontFamily: "Mark Pro", marginLeft: "10.5%", marginTop: "0.5%" }}>{props.message}</p>
        </motion.div >

    </>
}

export default WorksHeader;