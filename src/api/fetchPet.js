import { HOST } from "../const";

const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiResponse = await fetch(`${HOST}/pets?id=${id}`);

    if (!apiResponse.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiResponse.json();
};

export default fetchPet;
