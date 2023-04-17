import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      products: []
    },
    reducers: {
      addToCart: (state, action) => { 
        const item = state.products.find(item => item.id === action.payload.id )
        if(item){
            item.quantity += action.payload.quantity
        }
        else {
            state.products.push(action.payload)
        }     
      },
      removeItem: (state, action) => {
        state.products = state.products.filter(item=>item.id !== action.payload)
      },
      resetCart: (state) => {
        state.products = []
      },
      increase: (state, action) => {
        const item = state.products.find(item => item.id === action.payload)
        if(item){
          item.quantity+=1
        }
      },
      decrease: (state, action) => {
        const item = state.products.find(item => item.id === action.payload)
        if(item){
          item.quantity = item.quantity == 1 ? 1 : item.quantity-1
        }
      }
    }
  })
  
  export const { addToCart, removeItem, resetCart, increase, decrease } = cartSlice.actions
  
  export default cartSlice.reducer