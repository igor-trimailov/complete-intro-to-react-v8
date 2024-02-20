import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AdoptedPetState {
    value: Pet | null;
}

const initialState: AdoptedPetState = {
    value: null,
};

export const adoptedPetSlice = createSlice({
    name: "adoptedPet",
    initialState,
    reducers: {
        adopt: (state, action: PayloadAction<Pet>) => {
            state.value = action.payload;
        },
        unadopt: (state) => {
            state.value = null;
        },
    },
});

export const { adopt, unadopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
