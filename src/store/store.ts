
/**
Configures the Redux store with all slices.
Exports the store instance and slice actions.

Application Layer (Store) → manages app state (Redux Toolkit).
 */
/**
 * Application Layer - Redux Store
 *
 * This file configures the global state container for the app.
 * It wires together domain slices (user, cart, store), and exposes
 * actions + reducers that the Presentation layer can use.
 *
 * Layers in Clean Architecture:
 * - Domain Layer: business rules (interfaces, entities)
 * - Data Layer: Firebase API calls, repositories
 * - Application Layer (THIS FILE): manages in-memory state with Redux
 * - Presentation Layer: dumb React Native screens/components
 */

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// -------------------------
// Initial State Definition
// -------------------------
const initialState = {
    user: {
        name: null as string | null,
        email: null as string | null,
        orderHistory: [] as any[], // fetched from Firebase
    },
    cart: {
        items: [] as any[], // cart items before checkout
    },
    store: {
        products: [] as any[], // products fetched from backend
    },
};


// -------------------------
// User Slice
// -------------------------
/**
 * Manages authenticated user state
 * - User profile
 * - Email
 * - Order history
 */
const userSlice = createSlice({
    name: 'user',
    initialState: initialState.user,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => { state.name = action.payload },
        setUserEmail: (state, action: PayloadAction<string>) => { state.email = action.payload },
        setUserOrderHistory: (state, action: PayloadAction<any[]>) => {
            state.orderHistory = action.payload;
        },
        updateUserOrderHistory: (state, action: PayloadAction<any>) => {
            //example : push new order to history
            state.orderHistory.push(action.payload);
        },
        clearUser: (state) => {
            state.name = null;
            state.email = null;
            state.orderHistory = [];
        }
    },
});

// -------------------------
// Store Slice
// -------------------------
/**
 * Manages the store’s product catalog
 */
const storeSlice = createSlice({
    name: 'store',
    initialState: initialState.store,
    reducers: {
        setStoreProducts: (state, action: PayloadAction<any[]>) => {
            state.products = action.payload;
        },
    },
});

// -------------------------
// Cart Slice
// -------------------------
/**
 * Manages shopping cart state
 */
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState.cart,
    reducers: {
        addProductToCart: (state, action: PayloadAction<any>) => {
            state.items.push(action.payload);
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// -------------------------
// Exports
// -------------------------
export const { setUserEmail, setUserName, setUserOrderHistory,
    updateUserOrderHistory, clearUser } = userSlice.actions;

    export const {setStoreProducts} =storeSlice.actions;

    export const {addProductToCart,removeProductFromCart,clearCart} = cartSlice.actions;

// -------------------------
// Store Configuration
// -------------------------    
export const store = configureStore({
    reducer: { 
        user: userSlice.reducer,
        store: storeSlice.reducer,
        cart:cartSlice.reducer
     },
});

// -------------------------
// Types
// -------------------------
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 userSlice → handles user profile & auth session
storeSlice → product catalog
cartSlice → shopping cart
AppDispatch + RootState types → for useDispatch and useSelector in React Native components
 */

