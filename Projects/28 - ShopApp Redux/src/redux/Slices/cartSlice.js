import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [], //intial value empty array
    reducers: {
        add: (state, action) => {
            state.push(action.payload); //IT DEFINES HATEVER INPUT PARAMETER WE HAVE SENT
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
})

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
