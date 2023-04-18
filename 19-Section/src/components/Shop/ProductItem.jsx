import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';

const ProductItem = ({ item }) => {
    const dispatch = useDispatch();

    const addCartHandler = () => {
        dispatch(cartActions.addQuant(item));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{item.title}</h3>
                    <div className={classes.price}>${item.price.toFixed(2)}</div>
                </header>
                <div className={classes.actions}>
                    <button onClick={addCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
