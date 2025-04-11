import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isLoggedIn: false
    },
    reducers: {
        userData: (state, action) => {
            if (action.payload.firstName) {
                state.user = action.payload
                state.isLoggedIn = true
            } else {
                state.user = action.payload
                state.isLoggedIn = false
            }

        }
    }
})

export default userSlice.reducer;