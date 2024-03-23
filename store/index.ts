import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
});

export const persistor = persistStore(store);
