import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../store/ui';

const CartButton = (props) => {
    const badge = useSelector((state) => state.cart.totalQt);
    const disptach = useDispatch();

    const showCartHandler = () => {
        disptach(uiActions.setToggle());
    };

    return (
        <button className={classes.button} onClick={showCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{badge}</span>
        </button>
    );
};

export default CartButton;
