import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: {},
    accessToken: null,
    isLoading: false

}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessTokenAndUser: (state, action) => {
            state.isLoading = true;
            const getToken = localStorage?.getItem("accessToken");
            const getUser = localStorage?.getItem("user");
            state.accessToken = getToken;
            state.user = JSON?.parse(getUser);
            state.isLoading = false;
            
        },
        removeAccessTokenAndUser: (state, action) => {
            state.isLoading = true;
            state.accessToken = null;
            state.user = {};
            localStorage?.setItem("accessToken", null);
            localStorage?.setItem("user", null);
            state.isLoading = false;
        },


    },

})

// Action creators are generated for each case reducer function
export const { setAccessTokenAndUser, removeAccessTokenAndUser } = userSlice.actions

export default userSlice.reducer