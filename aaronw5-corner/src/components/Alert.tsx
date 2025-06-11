
import { ReactNode } from "react";
import Button from "./Button";
import { useState } from "react";

interface Props {
    children: ReactNode;
    dismissable: boolean;
}

const Alert = (props: Props) => {
    const [showAlert, setShowAlert] = useState(true);

    {
        return !showAlert ? false : (

            props.dismissable === true ? <p role="alert" className="alert alert-primary alert-dismissable fade show">
                {props.children}
                <button onClick={() => closeAlert(setShowAlert)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                </button>
            </p>
                : <h1 className="alert alert-primary">{props.children}</h1>
        )
    }
}

function closeAlert(setShowAlert) {
    setShowAlert(false);
}

export default Alert