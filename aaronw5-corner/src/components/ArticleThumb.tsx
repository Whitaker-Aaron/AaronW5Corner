
import border from "../assets/imgBorder.png";
import Tools from "./Tools.tsx"


import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";


interface Props {
    header,
    description,
    date,
    index,
    thumb,
    readTime,
    onClick?
}

function ArticleThumb(props: Props) {
    //CONVERT READTIME TO INTERGER 
    const readTime = props.readTime;
    const routerLink = "/thoughts/" + props.header.replace(/\s+/g, '-').toLowerCase();


    //NAVIGATION FUNCTION 
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate(routerLink, { state: { id: 1, name: 'sabaoon' } });
    }


    return <>
        <div style={{
            textWrap: "balance", backgroundImage: 'url(' + require("../assets/devProject.webp") + ')', marginTop: 20, marginRight: 40, width: 876, height: 524
        }}>
            <br></br>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
                <div style={{ maxWidth: 700 }}>
                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                        <p style={{ overflowWrap: "break-word", padding: 10, fontSize: 36, marginLeft: 70, marginTop: 20, opacity: 0.9, fontFamily: "Mark Pro" }} className="h2">{props.header}</p>

                    </div>
                    <div style={{ marginTop: 35, justifyContent: "space-between", display: "flex", width: 800 }}>
                        <div style={{ display: "table-column", justifyContent: "space-between" }}>
                            <p style={{ overflowWrap: "break-word", padding: 10, opacity: 0.9, fontFamily: "Mark Pro", maxHeight: 500, marginLeft: 72 }}>{props.description}</p>
                            <p style={{ marginTop: 30, fontSize: 22, padding: 0, marginLeft: 82, fontFamily: "Mark Pro" }}>Read time: <strong>{readTime} min</strong></p>
                            <p style={{ fontSize: 12, padding: 0, marginLeft: 82, fontFamily: "Mark Pro Medium" }}>Uploaded: {props.date}</p>
                        </div>
                        <img style={{ boxShadow: "8px 8px 7.5px grey", maxWidth: 384, maxHeight: 216 }} src={props.thumb}></img>
                    </div>
                    <motion.div
                        onClick={() => { navigateTo() }}
                        whileHover={{ scale: 1.1, boxShadow: "5px 5px 7px grey" }}
                        style={{ border: "2px solid #0093a9", backgroundColor: "#b4f3fc", boxShadow: "2px 2px 2px grey", borderRadius: 15, padding: 10, marginTop: 10, marginLeft: 75, width: 125, height: 50 }}>
                        <p style={{ color: "black", opacity: 0.9, fontFamily: "Mark Pro Medium", fontSize: 20, marginBottom: 0, textAlign: "center" }}>Read</p>
                    </motion.div>

                </div>



            </div>
        </div >
    </>
}

export default ArticleThumb