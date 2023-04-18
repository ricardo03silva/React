import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';
import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(cartActions.addQuant(item));
    };

    const removeItemHandler = () => {
        dispatch(cartActions.remQuant(item.key));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{item.title}</h3>
                <div className={classes.price}>
                    ${item.total.toFixed(2)} <span className={classes.itemprice}>(${item.price}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{item.qt}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
