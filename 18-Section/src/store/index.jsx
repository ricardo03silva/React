import { createStore } from 'react-redux';

const defaultState = {
    counter: 0,
};

const storeReducer = (state = defaultState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter + 1,
        };
    }
    return state;
};

const store = createStore(storeReducer);

const storeSubscriber = () => {
    const latest = store.getState();
    console.log(latest);
};

store.subscribe(storeSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
