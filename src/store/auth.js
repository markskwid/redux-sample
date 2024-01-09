import { createSlice } from "@reduxjs/toolkit";

const authState = {
	isAuth: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: authState,
	reducers: {
		login(state) {
			state.isAuth = true;
		},

		logout(state) {
			state.isAuth = false;
		},
	},
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
