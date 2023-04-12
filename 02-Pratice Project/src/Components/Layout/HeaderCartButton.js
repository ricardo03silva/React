import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store-context/cart-context';

const HeaderCartButton = (props) => {
    const [btnIsHighlight, setBtnHighlight] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlight ? classes.bump : ''}`;

    const { items } = cartCtx; //only items from cartCtx are used to the dependencies in the useEffect Hook
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlight(true);

        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);

        return () => {
            clearTimeout(false);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
