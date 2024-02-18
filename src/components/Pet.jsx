import { Link } from "react-router-dom";
import { HOST } from "../const";

const Pet = ({ name, animal, breed, images, location, id }) => {
    let hero = `${HOST}/pets/none.jpg`;

    if (images.length) {
        hero = images[0];
    }
    return (
        <Link to={`/details/${id}`} className="relative block">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white via-orange-100 to-transparent px-2 pt-2">
                <h1>{name}</h1>
                <h2>
                    {animal} - {breed} - {location}
                </h2>
            </div>
        </Link>
    );
};

export default Pet;
