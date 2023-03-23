import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    email: null,
    token: null,
    id: null
}

const userSilence = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.email = action.payload.email;
            state.email = action.payload.email;
        },
        removoUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        
    }
})

export const {setUser, removoUser} = userSilence.actions

export default userSilence.reducer;