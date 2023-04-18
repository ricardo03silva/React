import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui';

const initialState = {
    items: [],
    totalQt: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, { payload }) {
            state.totalQt = payload.totalQt;
            state.items = payload.items;
        },
        addQuant(state, action) {
            const item = action.payload;
            const find = state.items.find((el) => el.key === item.key);
            state.changed = true;
            if (!find) {
                state.items.push({
                    key: item.key,
                    qt: item.qt || 1,
                    title: item.title,
                    price: item.price,
                    total: item.price,
                });
                state.totalQt++;
            } else {
                find.qt++;
                find.total += item.price;
            }
        },
        remQuant(state, action) {
            const key = action.payload;
            const find = state.items.find((el) => el.key === key);
            state.changed = true;
            if (find.qt === 1) {
                state.items = state.items.filter((el) => el.key !== key);
                state.totalQt--;
            } else {
                find.qt--;
                find.total -= find.price;
            }
        },
    },
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.setNotification({
                status: 'pending',
                title: 'Sending',
                msg: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://reduxcart-663f4-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT', //to override all data
                body: JSON.stringify(cart),
            });
            if (!response.ok) {
                throw new Error('Sending data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(
                uiActions.setNotification({
                    status: 'success',
                    title: 'Success!',
                    msg: 'Data sent successfully!',
                })
            );
        } catch (error) {
            dispatch(
                uiActions.setNotification({
                    status: 'error',
                    title: 'Error!',
                    msg: 'Sending data failed!',
                })
            );
        }
    };
};

export const getCartData = () => {
    return async (dispatch) => {
        const getRequest = async () => {
            const response = await fetch('https://reduxcart-663f4-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            if (!response.ok) {
                throw new Error('Getting data failed');
            }
            const data = await response.json();
            if (data.items) {
                return data;
            } else {
                throw new Error('No Products Found in Cart');
            }
        };

        try {
            const { items, totalQt, changed } = await getRequest();
            dispatch(
                uiActions.setNotification({
                    status: 'pending',
                    title: 'Info',
                    msg: 'Cart Items Fetched',
                })
            );
            dispatch(
                cartActions.replaceCart({
                    items: items || [],
                    totalQt: totalQt,
                    changed: changed,
                })
            );
        } catch (error) {
            dispatch(
                uiActions.setNotification({
                    status: 'pending',
                    msg: error.message,
                    title: 'No items Found',
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
