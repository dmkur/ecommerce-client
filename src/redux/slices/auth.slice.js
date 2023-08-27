import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false
}

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, rejectWithValue) => {
        try {
            console.log(user)
            const {data} = await authService.login({user});
            console.log(data)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const authSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isFetching = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.isFetching = false
            })
    }
});

const {reducer: authReducer, actions: {}} = authSlice;

const authActions = {login}


export {authActions, authReducer}
