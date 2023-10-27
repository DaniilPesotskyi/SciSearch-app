import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { IFormula } from "@/types/formula";

interface IState {
  filter: string[];
}

const initialState: IState = {
  filter: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      state.filter.push(action.payload);
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.filter = state.filter.filter((letter) => letter !== action.payload);
    },
    clearFilter: (state, action: PayloadAction) => {
      state.filter = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
