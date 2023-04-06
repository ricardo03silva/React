import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button type={props.type || 'button'} className={classes.button} onClick={props.onClick}>
            {props.children} {/*children means every element that's inside this component (only text, or other divs...)*/}
        </button>
    );
};

export default Button;
