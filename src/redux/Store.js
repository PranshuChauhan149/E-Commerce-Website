import {configureStore} from "@reduxjs/toolkit"
import carReducer from './CartSlice'
export const store =configureStore(
  {
    reducer:{
      cart:carReducer
    }
  }
)