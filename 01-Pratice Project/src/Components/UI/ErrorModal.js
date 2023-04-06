import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const BackDrop = ({ onClick }) => {
    return <div className={classes.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ title, message, onClick }) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{title}</h2>
            </header>
            <div className={classes.content}>
                <p>{message}</p>
            </div>
            <footer className={classes.actions}>
                <Button type="button" onClick={onClick}>
                    Ok
                </Button>
            </footer>
        </Card>
    );
};

const ErrorModal = ({ title, message, onHideError }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={onHideError} />, document.getElementById('backdrop--root'))}
            {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onClick={onHideError} />, document.getElementById('overlay--root'))}
        </Fragment>
    );
};

export default ErrorModal;
