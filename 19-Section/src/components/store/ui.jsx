import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggle: false,
    notification: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setToggle(state) {
            state.toggle = !state.toggle;
        },
        setNotification(state, { payload }) {
            state.notification = {
                status: payload.status,
                title: payload.title,
                msg: payload.msg,
            };
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
