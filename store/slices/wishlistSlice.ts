// lib/slices/wishlistSlice.ts
import { ProductData } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: ProductData[];
}

const initialState: WishlistState = { items: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductData>) => {
      const itemExists = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    // removeItem: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
    // Add other actions here...
  },
});

export const { addItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
