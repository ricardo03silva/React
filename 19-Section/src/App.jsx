import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './components/store/cart';

let isInitial = true;

function App() {
    const show = useSelector((state) => state.toggle.toggle);
    const cart = useSelector((state) => state.cart);
    const notify = useSelector((state) => state.toggle.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notify && <Notification status={notify.status} title={notify.title} msg={notify.msg} />}
            <Layout>
                {show && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
