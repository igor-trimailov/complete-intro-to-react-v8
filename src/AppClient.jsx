import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./context/AdoptedPet";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const Details = lazy(() => import("./pages/Details"));
const SearchParams = lazy(() => import("./pages/SearchParams"));

const AppClient = () => {
    const adoptedPet = useState(null);
    return (
        <div className="bg-pet-pattern m-0 p-0">
            <QueryClientProvider client={queryClient}>
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center p-4">
                            <h2 className="animate-spin text-5xl">🤮</h2>
                        </div>
                    }
                >
                    <AdoptedPetContext.Provider value={adoptedPet}>
                        <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
                            <Link
                                className="text-6xl text-white hover:text-gray-200"
                                to="/"
                            >
                                Adopt Me!
                            </Link>
                        </header>
                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </AdoptedPetContext.Provider>
                </Suspense>
            </QueryClientProvider>
        </div>
    );
};

export default AppClient;
