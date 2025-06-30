
import { useState } from "react";

//MOTION 
import { motion, scale } from "motion/react";

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
    changePictureOnClick?
    secondImage?
    onClick?: () => void;
}

function Button(props: Props) {
    let defaultMarginLeft = 20;
    if (props.negateMarginLeft) {
        defaultMarginLeft = 0;
    }

    const [image, updateImage] = useState('');
    if (props.image && image === '') {
        updateImage(props.image);
    }

    const [pressed, updatePressed] = useState(false);
    const [scaleWhenHover, updateHover] = useState(1.2);
    const [style, setStyle] = useState({ marginRight: props.marginRight, marginTop: props.marginTop, marginLeft: props.marginLeft, scale: 1.0, height: props.height, width: props.width });

    return <>

        <motion.div
            whileHover={{ scale: scaleWhenHover }}
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
                    props.onClick ? handleClick(updatePressed, props.onClick, pressed) : ""} >
            </motion.img> : (
                props.image !== '' ?
                    <img

                        src={image}
                        style={style}
                        data-bs-toggle="modal"
                        data-bs-target={"#" + props.target}
                        onClick={() =>
                            props.onClick ? (
                                props.secondImage ? handleClick(updatePressed, props.onClick, pressed, updateImage, props.secondImage, props.disableAfterClick, updateHover)
                                    : handleClick(updatePressed, props.onClick, pressed)
                            ) : ""} >
                    </img>
                    :
                    (
                        pressed === false ?
                            <h1
                                style={style}
                                onClick={() =>
                                    handleClick(updatePressed, props.onClick, pressed)}
                                data-bs-target={"#" + props.target}
                                className="text-center btn btn-primary btn-lg btn-block">{props.message}
                            </h1>
                            :
                            <h1
                                style={{ width: 200, height: 50 }}
                                data-bs-target={"#" + props.target}
                                onClick={() => handleClick(updatePressed, props.onClick, pressed)}
                                className="text-center btn btn-primary btn-lg btn-block disabled">{props.message}
                            </h1>
                    )

            )
            }
        </motion.div>
    </>
}

function handleClick(updateState, onClick, pressed, updateImage?, doubleImage?, disableAfterClick?, updateScale?) {
    console.log(pressed);
    updateState(true);
    onClick();
    if (doubleImage) { updateImage(doubleImage) }
    if (disableAfterClick) { updateScale(1.0) }

}

export default Button