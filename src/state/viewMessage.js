import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

const viewMessage = createSlice({
    name: "message",
    initialState,
    reducers: {
        change: (state, action) => {
            state.value = action.payload
        },

    }
})


export const { change } = viewMessage.actions

export const selectVal = (state) => state.message.value

export default viewMessage.reducer
