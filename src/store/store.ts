import {configureStore} from "@reduxjs/toolkit";
import productReducer from './products.slice';

const store = configureStore({
    reducer:{
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store