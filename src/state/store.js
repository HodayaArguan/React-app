import { configureStore } from '@reduxjs/toolkit'

import messageReducer from "./viewMessage"

export const store = configureStore({
  reducer: {
    message: messageReducer
  }
})