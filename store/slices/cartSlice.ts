import { CardData, ProductData } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ProductData[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductData>) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
