const redux = require('redux');

//this is the reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latest = store.getState();
    console.log(latest);
};

//subscription
store.subscribe(counterSubscriber);

//action need to be dispatched
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
