import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    currentUser: null,
    isFetching: false,
    error: null
}

const login = createAsyncThunk(
    'authSlice/login',
    async (user, {rejectWithValue}) => {
        try {
            const {data} = await authService.login(user);
            console.log(data,"SLICE")
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null
            authService.deleteTokens()
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isFetching = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload
                authService.setTokens(action.payload.accessToken)
                state.isFetching = false
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);

                if (type === 'rejected') {
                    state.error = action.payload
                    state.isFetching = false
                } else {
                    state.error = null
                }
            })
    }
});

const {reducer: authReducer, actions:{logout}} = authSlice;

const authActions = {login, logout}


export {authActions, authReducer}
