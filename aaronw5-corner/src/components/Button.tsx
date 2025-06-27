
import { useState } from "react";

//MOTION 
import { motion } from "motion/react";

interface Props {
    message: String
    disableAfterClick: boolean
    image,
    target: String,
    height,
    width,
    marginLeft?
    marginTop?
    marginRight?
    useFadeIn?
    negateMarginLeft?
    onClick?: () => void;
}

function Button(props: Props) {
    let defaultMarginLeft = 20;
    if (props.negateMarginLeft) {
        defaultMarginLeft = 0;
    }

    const [pressed, updateItemIndex] = useState(false);
    const [style, setStyle] = useState({ marginRight: props.marginRight, marginTop: props.marginTop, marginLeft: props.marginLeft, scale: 1.0, height: props.height, width: props.width });

    return <>

        <motion.div
            whileHover={{ scale: 1.2 }}
            style={{ marginLeft: defaultMarginLeft, marginRight: 20, width: props.width }}>
            {props.useFadeIn ? <motion.img
                initial={{ opacity: 0.0 }}
                animate={{ opacity: 1.0 }}
                transition={{ delay: 0.25 }}
                src={props.image}
                style={style}
                data-bs-toggle="modal"
                data-bs-target={"#" + props.target}
                onClick={() =>
                    props.onClick ? handleClick(updateItemIndex, props.onClick, pressed) : ""} >
            </motion.img> : (
                props.image !== '' ?
                    <img

                        src={props.image}
                        style={style}
                        data-bs-toggle="modal"
                        data-bs-target={"#" + props.target}
                        onClick={() =>
                            props.onClick ? handleClick(updateItemIndex, props.onClick, pressed) : ""} >
                    </img>
                    :
                    (
                        pressed === false ?
                            <h1
                                style={style}
                                onClick={() =>
                                    handleClick(updateItemIndex, props.onClick, pressed)}
                                data-bs-target={"#" + props.target}
                                className="text-center btn btn-primary btn-lg btn-block">{props.message}
                            </h1>
                            :
                            <h1
                                style={{ width: 200, height: 50 }}
                                data-bs-target={"#" + props.target}
                                onClick={() => handleClick(updateItemIndex, props.onClick, pressed)}
                                className="text-center btn btn-primary btn-lg btn-block disabled">{props.message}
                            </h1>
                    )

            )
            }
        </motion.div>
    </>
}

function handleClick(updateState, onClick, pressed) {
    console.log(pressed);
    updateState(true);
    onClick();

}

export default Button