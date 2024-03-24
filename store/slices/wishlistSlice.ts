// lib/slices/wishlistSlice.ts
import { ProductData } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  totalItems: number;
  itemsId: number[];
}

const initialState: WishlistState = { totalItems: 0, itemsId: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      if (!state.itemsId.includes(action.payload)) {
        state.itemsId.push(action.payload);
        state.totalItems = state.itemsId.length;
      }
    },
  },
});

export const { addItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
