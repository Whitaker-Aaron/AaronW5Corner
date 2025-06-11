
import { useState } from "react";

interface Props {
    message: String
    disableAfterClick: boolean
    image,
    target: String,
    onClick: () => void;
}

function Button(props: Props) {
    const [pressed, updateItemIndex] = useState(false);
    const [style, setStyle] = useState({ scale: 1.0 });

    return <>

        <div onMouseEnter={e =>
            setStyle({ scale: 1.2 })
        }
            onMouseLeave={e =>
                setStyle({ scale: 1.0 })
            }
            style={{ marginLeft: 20, marginRight: 20 }}>
            {props.image !== '' ?
                <img
                    src={props.image}
                    style={style}
                    data-bs-toggle="modal"
                    data-bs-target={"#" + props.target}
                    onClick={() =>
                        handleClick(updateItemIndex, props.onClick, pressed)}>
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

            }
        </div>
    </>
}

function handleClick(updateState, onClick, pressed) {
    console.log(pressed);
    updateState(true);
    onClick();

}

export default Button