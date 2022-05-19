import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import ReactDOM  from "react-dom";

const BackDrop = (props) =>{
    return <div className={classes.backdrop} onConfirm={props.onConfirm}/>
};

const ModalOverlay = (props) =>{
    return(
    <Card className={classes.modal}>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
            <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
    </Card>
    )
}

const ErrorModel = props => {
    return (
        <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClick={props.onConfirm}/>,
         document.getElementById('backdrop-root')
         )}
         {ReactDOM.createPortal(<ModalOverlay
            title={props.title} 
            message={props.message}
            onConfirm={props.onConfirm}/>,
            document.getElementById("overlay-root")
            )}
        </React.Fragment>
    );
};

export default ErrorModel;