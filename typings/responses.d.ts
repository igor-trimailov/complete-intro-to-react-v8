type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

interface Pet {
    id: number;
    name: string;
    animal: Animal;
    description: string;
    breed: string;
    images: string[];
    city: string;
    state: string;
}

interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[];
}

interface BreedListAPIResponse {
    animal: Animal;
    breeds: string[];
}
