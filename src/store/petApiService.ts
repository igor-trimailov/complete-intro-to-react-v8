import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST } from "../const";

export const petApi = createApi({
    reducerPath: "petApi",
    baseQuery: fetchBaseQuery({ baseUrl: HOST }),
    endpoints: (builder) => ({
        getPet: builder.query({
            query: (id: string) => ({ url: "pets", params: { id } }),
            transformResponse: (response: PetAPIResponse) => response.pets[0],
        }),
        getBreeds: builder.query({
            query: (animal: string) => ({ url: "breeds", params: { animal } }),
            transformResponse: (response: BreedListAPIResponse) =>
                response.breeds,
        }),
        serarch: builder.query({
            query: ({
                animal,
                location,
                breed,
            }: {
                animal: string;
                location: string;
                breed: string;
            }) => ({
                url: "pets",
                params: { animal, location, breed },
            }),
            transformResponse: (response: PetAPIResponse) => response.pets,
        }),
    }),
});

export const { useGetPetQuery, useGetBreedsQuery, useSerarchQuery } = petApi;
