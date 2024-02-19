import { QueryFunction } from "@tanstack/react-query";
import { HOST } from "../const";

const fetchPet: QueryFunction<PetAPIResponse, ["details", string]> = async ({
    queryKey,
}) => {
    const id = queryKey[1];

    const apiResponse = await fetch(`${HOST}/pets?id=${id}`);

    if (!apiResponse.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiResponse.json();
};

export default fetchPet;
