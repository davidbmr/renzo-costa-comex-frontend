import { createSlice } from "@reduxjs/toolkit";

export interface TesoreriaState {
  currentStep: number;
}

const initialState: TesoreriaState = {
  currentStep: 0,
};

export const tesoreriaSlice = createSlice({
  name: "tesoreria",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = tesoreriaSlice.actions;
