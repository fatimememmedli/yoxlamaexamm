import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./../slices/slice"
export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
})