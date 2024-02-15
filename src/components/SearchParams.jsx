import { useState, useEffect } from "react";
// import useBreedList from "../hooks/useBreedList";
import Results from "./Result";
import { HOST } from "../const";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "lizzard"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    const breedResults = useQuery(["breeds", animal], fetchBreedList);
    const breedList = breedResults?.data?.breeds ?? [];
    const breedListStatus = breedResults.status;

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `${HOST}/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        requestPets();
    };

    return (
        <div className="search-params">
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        disabled={!breedList.length}
                    >
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
