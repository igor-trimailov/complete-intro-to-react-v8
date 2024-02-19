import { useContext, useState } from "react";
import Results from "../components/Results";
import { useQuery } from "@tanstack/react-query";

import fetchBreedList from "../api/fetchBreedList";
import fetchSearch from "../api/fetchSearch";
import AdoptedPetContext from "../context/AdoptedPet";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [animal, setAnimal] = useState<Animal>("" as Animal);
    const [requestParams, setRequerstParams] = useState({
        location: "",
        animal: "" as Animal,
        breed: "",
    });
    const [adoptedPet] = useContext(AdoptedPetContext);

    const breedResults = useQuery(["breeds", animal], fetchBreedList);
    const breedList = breedResults?.data?.breeds ?? [];

    const searchResults = useQuery(["search", requestParams], fetchSearch);
    const pets = searchResults?.data?.pets ?? [];

    return (
        <div className="my-0 mx-auto w-11/12">
            <form
                className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    setRequerstParams({
                        animal: (formData.get("animal")?.toString() ??
                            "") as Animal,
                        breed: formData.get("breed")?.toString() ?? "",
                        location: formData.get("location")?.toString() ?? "",
                    });
                }}
            >
                {adoptedPet ? (
                    <div className="pet image-container">
                        <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                    </div>
                ) : null}
                <label htmlFor="location">
                    Location
                    <input
                        className="search-input"
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        className="search-input"
                        id="animal"
                        name="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value as Animal)}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        className="search-input grayed-out-disabled"
                        id="breed"
                        name="breed"
                        disabled={!breedList.length}
                    >
                        <option />
                        {breedList.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button
                    className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
