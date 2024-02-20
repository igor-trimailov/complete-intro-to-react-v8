import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface serarchParamsState {
    value: {
        animal: string;
        location: string;
        breed: string;
    };
}

const initialState: serarchParamsState = {
    value: {
        location: "",
        breed: "",
        animal: "",
    },
};

export const serarchParamsSlice = createSlice({
    name: "searchParams",
    initialState,
    reducers: {
        all: (
            state,
            action: PayloadAction<{
                location: string;
                breed: string;
                animal: string;
            }>,
        ) => {
            state.value = action.payload;
        },
    },
});

export const { all } = serarchParamsSlice.actions;
export default serarchParamsSlice.reducer;
