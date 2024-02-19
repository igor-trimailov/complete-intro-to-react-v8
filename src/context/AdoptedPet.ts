import { createContext } from "react";

const AdoptedPetContext = createContext<
    [Pet | null, (adoptedPet: Pet) => void]
>([null, () => {}]);

export default AdoptedPetContext;
