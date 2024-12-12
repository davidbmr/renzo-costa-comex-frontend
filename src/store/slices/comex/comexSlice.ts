import { createSlice } from "@reduxjs/toolkit";

export interface ComexState {
	currentStep: number;
}

const initialState: ComexState = {
	currentStep: 0,
};

export const comexSlice = createSlice({
	name: "comex",
	initialState,
	reducers: {
		setCurrentStep: (state, action) => {
			state.currentStep = action.payload;
		},
	},
});

export const { setCurrentStep } = comexSlice.actions;
