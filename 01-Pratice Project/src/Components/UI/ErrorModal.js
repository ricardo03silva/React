import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div className="modal" overlayClassName="backdrop">
            <div className="header">
                <h2>Error</h2>
            </div>
            <div className="content">
                <p>Some error message</p>
            </div>
            <div className="actions">
                <Button>Button1</Button>
                <Button>Button2</Button>
            </div>
        </div>
    );
};

export default ErrorModal;
