import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../../utils/constants";
import axios from "axios";

export const createUser = createAsyncThunk(
    'user/createUser',
    async (payolad, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/users`, payolad);
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    })

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (payolad, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payolad);
            const login = await axios.get(`${BASE_URL}/auth/profile`, {
               headers : {
                   "Authorization": `Bearer ${res.data.access_token}`
               }
            });
            return login.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    })

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (payolad, thunkAPI) => {
        try {
            const res = await axios.put(`${BASE_URL}/users/${payolad.id}`, payolad);
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    })

const addCurrentUser = (state, {payload}) => {
    state.currentUser = payload
}

const userSlice = createSlice({
    name: 'user',
    initialState : {
        currentUser : null,
        cart: [],
        isLoading: false,
        formType: 'signup',
        showForm: false,
    },
    reducers: {
        addItemToCart : (state, {payload}) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({id}) => id === payload.id)

            if(found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity + 1}
                        : item;
                })
            } else newCart.push({...payload, quantity : 1 })
            state.cart = newCart;
        },
        removeItemToCart : (state, {payload}) => {
           state.cart = state.cart.filter(({id}) => id !== payload.id);
        },
        toggleForm: (state, {payload}) => {
          state.showForm = payload;
        },
        toggleFormType: (state, {payload}) => {
            state.formType = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled,  addCurrentUser);
        builder.addCase(loginUser.fulfilled,  addCurrentUser);
        builder.addCase(updateUser.fulfilled,  addCurrentUser);
    }
})

export const {addItemToCart, toggleForm, toggleFormType, removeItemToCart} = userSlice.actions;

export default userSlice.reducer;