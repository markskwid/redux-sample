import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 0,
	isVisible: true,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},

		decrement(state) {
			state.counter--;
		},

		increase(state, action) {
			state.counter += action.payload;
		},

		toggle(state) {
			state.isVisible = !state.isVisible;
		},
	},
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
