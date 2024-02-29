import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <label htmlFor="animal">Animal</label>
                <select
                    id="animal"
                    value={animal}
                    onChange={(event) => setAnimal(event.target.value)}
                >
                    {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}
                </select>

                <label htmlFor="breed">Breed</label>
                <select
                    id="breed"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}
                >
                    {BREEDS.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
