

import border from "../assets/imgBorder.png";
import Tools from "./Tools.tsx"

interface Props {
    title: string
    description: string
}

function DevProject(props: Props) {
    return <>
        <div style={{
            backgroundImage: 'url(' + require("../assets/devProject.png") + ')', marginTop: 20, marginRight: 40, width: 876, height: 524
        }}>
            <br></br>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <p style={{ fontSize: 40, marginLeft: 70, marginTop: 30, opacity: 0.8, fontFamily: "Mark Pro" }} className="h2">{props.title}

                    </p>
                    <p style={{ overflowWrap: "break-word", opacity: 0.8, fontFamily: "Mark Pro", width: 200, maxHeight: 500, marginTop: 30, marginLeft: 72 }}>A simple test description.</p>
                    <p style={{ overflowWrap: "break-word", opacity: 0.8, fontFamily: "Mark Pro", width: 200, maxHeight: 500, marginTop: 30, marginLeft: 72 }}>Check out more here:
                        <a target="_blank" href="https://www.nexulum.com"><p style={{ opacity: 0.8, fontFamily: "Mark Pro", width: 200, maxHeight: 500 }}>www.nexulum.com</p></a></p>
                </div>
                <img style={{ marginRight: 50, marginTop: 20 }} src={border}></img>
            </div>
            <div>
                <p style={{ marginLeft: 70, marginTop: 20, opacity: 0.8, fontFamily: "Mark Pro" }}> Tools used:</p>
            </div>
            <div style={{ marginLeft: 55 }}>
                <Tools size={"small"} marginLeft={10} tool={"C#"}></Tools>
            </div>


        </div >
    </>
}

export default DevProject;