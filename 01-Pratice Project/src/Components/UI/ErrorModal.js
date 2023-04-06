import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onHideError }) => {
    return (
        <div className={classes.backdrop} onClick={onHideError}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button type="button" onClick={onHideError}>
                        Ok
                    </Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
