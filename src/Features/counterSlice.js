// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: {
      Aren: 0,
      Matcha: 0,
      Moccacino: 0,
      Trip: 0,
    },
    test: {
      Aren: "",
      Matcha: "",
      Moccacino: "",
      Trip: "",
    },
    showCounter: {
      Aren: true,
      Matcha: true,
      Moccacino: true,
      Trip: true,
    },
    selectedMenu: {
      Aren: "",
      Matcha: "",
      Moccacino: "",
      Trip: "",
    },
  },
  reducers: {
    increment: (state, action) => {
      const { menu } = action.payload;
      state.value[menu] += 1;
    },
    decrement: (state, action) => {
      const { menu } = action.payload;
      if (state.value[menu] > 0) {
        state.value[menu] -= 1;
      }
    },
    selectMenu: (state, action) => {
      const { menu, selectedMenu } = action.payload;
      state.selectedMenu[menu] = selectedMenu;
    },
    buy: (state, action) => {
      const { menu } = action.payload;
      if (state.value[menu] === 0) {
        state.test[menu] = "";
      } else {
        state.showCounter[menu] = false;
      }
    },
  },
});

export const { increment, decrement, buy, selectMenu } = counterSlice.actions;
export default counterSlice.reducer;
