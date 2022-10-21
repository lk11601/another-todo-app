import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
	name: "name",
	initialState: {
		name: "",
		password: "123456",
	},
	reducers: {
		setName: (state, action) => {
			console.log(action);
			// state.name = action.payload;
			return { ...state, name: action.payload };
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		signOut: (state) => {
			console.log("signOut");
			return { ...state, name: "" };
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = nameSlice.actions;

export default nameSlice.reducer;
