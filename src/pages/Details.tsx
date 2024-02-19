import { lazy, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../api/fetchPet";
import Carousel from "../components/Carousel";
import ErrorBoundary from "../components/ErrorBoundary";
import AdoptedPetContext from "../context/AdoptedPet";

// this is just an example do not do this in real life
const Modal = lazy(() => import("../components/Modal"));

const Details = () => {
    const { id } = useParams();
    if (!id) {
        throw new Error("id not supplied? why? what are you trying to do?");
    }

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const results = useQuery(["details", id], fetchPet);

    const [_, setAdoptedPet] = useContext(AdoptedPetContext);

    if (results.isError) {
        return <h2>Error!!!</h2>;
    }

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🫥</h2>
            </div>
        );
    }

    const pet = results?.data?.pets[0];
    if (!pet) {
        throw new Error("no pet lol..");
    }

    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                </h2>
                <button onClick={() => setShowModal(true)}>
                    {" "}
                    Adopt {pet.name}
                </button>
                <p>{pet.description}</p>
                {showModal ? (
                    <Modal>
                        <div className="mx-4 max-w-md rounded-3xl bg-pink-100 px-4 py-3 text-center">
                            <h1 className="my-4 text-center text-4xl">
                                Would you like to adopt {pet.name}?
                            </h1>
                            <div className="mt-4 flex justify-center">
                                <button
                                    className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-white last:mr-0 hover:bg-blue-600"
                                    onClick={() => {
                                        setAdoptedPet(pet);
                                        navigate("/");
                                    }}
                                >
                                    Yes
                                </button>
                                <button
                                    className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-white last:mr-0 hover:bg-blue-600"
                                    onClick={() => setShowModal(false)}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) : null}
            </div>
        </div>
    );
};

function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;
