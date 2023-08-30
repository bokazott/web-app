import NavbarComponent from './components/NavbarComponent'
import HomePage from "./components/HomePage";
import {Routes,Route} from "react-router";
import FavouritesComponent from "./components/FavouritesComponent";
import HistoryComponent from "./components/HistoryComponent";
import ProfileComponent from "./components/ProfileComponent";
import {useState} from "react";
import CardComponentInterface from "./components/CardComponentInterface";

function App() {
    const [favouriteCards, setFavouriteCards] = useState<CardComponentInterface[]>([]);
    const [searchHistory, setSearchHistory] = useState<string[]>([]); // State for search history

    const updateSearchHistory = (searchQuery: string) => {
       if(searchQuery!==''){
           setSearchHistory(prevSearchHistory => [...prevSearchHistory, searchQuery]);
       }
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
                <Route path="/favourites" element={<FavouritesComponent favouriteCards={favouriteCards} />} />
                <Route path="/history" element={<HistoryComponent searchHistory={searchHistory} />} />
                <Route path="/profile" element={<ProfileComponent />} />
            </Routes>
        </div>
    );
}

export default App;