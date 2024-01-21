import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  products: [],
  basket:[],
}
export const getAllData = createAsyncThunk(
    'products',
    async () => {
      const response = await axios("http://localhost:3000/products")
      return response.data
    }
  )
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   
    addBasket: (state, action) => {
      console.log(action.payload)
      let find = state.basket.find((elem)=> elem._id == action.payload._id)
      if(find){
        find.count +=1

      }else{
        state.basket.push(action.payload)
      }
    },
    deleteBasket: (state, action) => {
      state.basket =state.basket.filter((elem)=> elem._id != action.payload._id) 
    },
    addData: (state, action) => {
      axios.post("http://localhost:3000/products", action.payload)
      state.products.push(action.payload)
    },
    deleteData: (state, action) => {
      axios.delete(`http://localhost:3000/products/${action.payload._id}`)
      state.products = state.products.filter((element)=> element._id!= action.payload._id)
    },
    inc: (state, action) => {
    //  let obj = current(state.products)
    //  let arr = state.products.map((elem)=> {
    //   if(elem._id==action.payload._id){
    //     action.payload.count +=1;
    //     return action.payload
    //   }
    //   else{
    //     return elem
    //   }
    //  }) 
    state.basket = action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllData.fulfilled, (state, action) => {
      // Add user to the state array
      state.products=action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const {  addBasket,deleteBasket,addData,deleteData,inc } = productSlice.actions

export default productSlice.reducer