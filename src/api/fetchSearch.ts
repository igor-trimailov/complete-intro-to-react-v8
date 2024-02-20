import { QueryFunction } from "@tanstack/react-query";
import { HOST } from "../const";

const fetchSearch: QueryFunction<
    PetAPIResponse,
    [
        "search",
        {
            animal: string;
            location: string;
            breed: string;
        },
    ]
> = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1];

    const apiResponse = await fetch(
        `${HOST}/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );

    if (!apiResponse.ok) {
        throw new Error(
            `pet search fetch not ok ${animal} ${location} ${breed}`,
        );
    }

    return apiResponse.json();
};

export default fetchSearch;
