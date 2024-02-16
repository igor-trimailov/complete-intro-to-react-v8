import { useState } from "react";
import Results from "./Result";
import { useQuery } from "@tanstack/react-query";

import fetchBreedList from "../api/fetchBreedList";
import fetchSearch from "../api/fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "lizzard"];

const SearchParams = () => {
    const [animal, setAnimal] = useState("");
    const [requestParams, setRequerstParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });

    const breedResults = useQuery(["breeds", animal], fetchBreedList);
    const breedList = breedResults?.data?.breeds ?? [];

    const searchResults = useQuery(["search", requestParams], fetchSearch);
    const pets = searchResults?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    setRequerstParams({
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    });
                }}
            >
                <label htmlFor="location">
                    Location
                    <input id="location" name="location" placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        name="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select id="breed" name="breed" disabled={!breedList.length}>
                        <option />
                        {breedList.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
