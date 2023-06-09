import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {items.map((el) => {
                    return <CartItem key={el.key} item={el} />;
                })}
            </ul>
        </Card>
    );
};

export default Cart;
