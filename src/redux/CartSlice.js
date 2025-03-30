import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice(
{
  name:"cart",
  initialState:[],

  reducers:{
    AddtoCart:(state,action)=>{
      state.push(action.payload);
    },
    RemoveCart:(state,action)=>{
      console.log(state);
      return state.filter((item)=>(item.id!==action.payload))
    }
  }

}

)

export const {AddtoCart,RemoveCart} =cartSlice.actions;
export default cartSlice.reducer;