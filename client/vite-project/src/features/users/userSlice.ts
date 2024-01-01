// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersAPI from "./services/usersAPI.js";
import { UserRegister } from "./types/UserInfo";
import { client } from "../../main.js";

interface UserState {
    userInfo:UserRegister|null
    loading: boolean;
    error: string|undefined;
    
}

const initialState: UserState = {
    userInfo: null,
    loading: false,
    error: '',

};

interface Credentials {
    email: string;
    password: string;
}

export const loginAsync = createAsyncThunk(
    "user/login",
    async (credentials: Credentials) => {
        try {
            const response = await usersAPI.login(
               { email:credentials.email,
                password:credentials.password}
            );
            localStorage.setItem("userInfo", JSON.stringify(response));
            return response;
        } catch (error) {
            // Handle error or rethrow it
            throw error;
        }
    }
);



const userSlice = createSlice({
    name: "user",
    initialState,
  
    reducers: {
        changeUserInfo:(state,action)=>{
            state.userInfo = action.payload
        },
        logout: (state) => {
            client.clearStore();
            localStorage.removeItem("userInfo");
            state.userInfo = null;
            return state
        },
    },
  
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                return state
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                console.log('hello from loginAsync.fulfilled',state.userInfo)
                return state
            })
            .addCase(loginAsync.rejected, (state,action) => {
                state.loading = false;
                state.error = action.error.message;
                return state
            })
           
    },
});

export const {changeUserInfo,logout} = userSlice.actions
export default userSlice.reducer;
