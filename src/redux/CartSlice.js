import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice(
{
  name:"cart",
  initialState:[],

  reducers:{
    AddtoCart:(state,action)=>{
      state.push(action.payload);
    }
  }

}

)

export const {AddtoCart} =cartSlice.actions;
export default cartSlice.reducer;