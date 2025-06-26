

import border from "../assets/imgBorder.png";
import Tools from "./Tools.tsx"

interface Props {
    thumb
    title: string
    description: string
    hasLink: boolean
    link?: string
    toolsMargin?
    tools: string[]
}

function DevProject(props: Props) {
    const tools = props.tools.map((value, index) => {
        switch (true) {
            case (value.length <= 3):
                return <Tools size={"small"} marginLeft={2} tool={value}></Tools>
            case (value.length > 3 && value.length <= 9):
                return <Tools size={"medium"} marginLeft={2} tool={value}></Tools>
            case (value.length > 9):
                return <Tools size={"large"} marginLeft={2} tool={value}></Tools>
            default:
                break;
        }
    }
    );

    let toolsMargin = 20;
    if (props.toolsMargin >= 0) { toolsMargin = props.toolsMargin }


    return <>
        <div style={{
            backgroundImage: 'url(' + require("../assets/devProject.webp") + ')', marginTop: 20, marginRight: 40, width: 876, height: 524
        }}>
            <br></br>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
                <div>
                    <p style={{ fontSize: 40, marginLeft: 70, marginTop: 30, opacity: 0.9, fontFamily: "Mark Pro" }} className="h2">{props.title}

                    </p>
                    <p style={{ overflowWrap: "break-word", opacity: 0.9, fontFamily: "Mark Pro", width: 200, maxHeight: 500, marginTop: 30, marginLeft: 72 }}>{props.description}</p>
                    {props.hasLink ?
                        <p style={{ overflowWrap: "break-word", opacity: 0.9, fontFamily: "Mark Pro", width: 200, maxHeight: 500, marginTop: 30, marginLeft: 72 }}>Check out more here:
                            <a target="_blank" href={"https://" + props.link} ><p style={{ opacity: 0.8, fontFamily: "Mark Pro", width: 200, maxHeight: 500 }}>{props.link}</p></a></p> : ""}
                </div>
                <img style={{ scale: 1, zIndex: 0, maxHeight: 300, maxWidth: 504, marginRight: 70, marginTop: 25 }} src={props.thumb}></img>





            </div>
            <div>
                <p style={{ marginLeft: 70, marginTop: toolsMargin, opacity: 0.9, fontFamily: "Mark Pro" }}> Tools used:</p>
            </div>
            <div style={{ display: "flex", marginLeft: 65 }}>
                {tools}
            </div>


        </div >
    </>
}

export default DevProject;