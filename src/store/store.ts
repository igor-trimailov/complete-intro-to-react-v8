import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice";
import serarchParamsSlice from "./serarchParamsSlice";
import { petApi } from "./petApiService";

const store = configureStore({
    reducer: {
        adoptedPet: adoptedPetSlice,
        searchParams: serarchParamsSlice,
        [petApi.reducerPath]: petApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petApi.middleware),
});

// Type for the root state
export type RootState = ReturnType<typeof store.getState>;

// Type for the dispatch function
export type AppDispatch = typeof store.dispatch;

export default store;
