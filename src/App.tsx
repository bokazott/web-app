import NavbarComponent from './components/NavbarComponent'
import HomePage from "./components/HomePage";
import {Routes,Route} from "react-router";
import Favourites from "./components/Favourites";
import History from "./components/History";
import Profile from "./components/Profile";
import {useState} from "react";
import CardComponentInterface from "./components/CardComponentInterface";

function App() {
    const [favouriteCards, setFavouriteCards] = useState<CardComponentInterface[]>([]);
    const [searchHistory, setSearchHistory] = useState<string[]>([]); // State for search history

    const updateSearchHistory = (searchQuery: string) => {
        setSearchHistory(prevSearchHistory => [...prevSearchHistory, searchQuery]);
    };
    return (
        <div>
            <NavbarComponent />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage favouriteCards={favouriteCards}
                                       setFavouriteCards={setFavouriteCards}
                                       updateSearchHistory={updateSearchHistory}
                    />}
                />
                <Route path="/favourites" element={<Favourites favouriteCards={favouriteCards} />} />
                <Route path="/history" element={<History searchHistory={searchHistory} />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;