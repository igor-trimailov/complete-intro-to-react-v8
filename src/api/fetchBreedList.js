import { HOST } from "../const";

const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) return [];

    const apiResponse = await fetch(`${HOST}/breeds?animal=${animal}`);

    if (!apiResponse.ok) {
        throw new Error(`breeds/${animal} fetch not ok`);
    }

    return apiResponse.json();
};

export default fetchBreedList;
