import React, {useState, useEffect} from 'react';
import CardComponent from "./CardComponent";
import SearchComponent from "./SearchComponent";
import SortComponent from "./SortComponent";
import socialMediaData from "./socialMediaData";
import CardComponentInterface from "./CardComponentInterface";
import NoResultsFoundComponent from "./NoResultsFoundComponent";
import HomePageInterface from "./HomePageInterface";

function HomePage({ favouriteCards, setFavouriteCards,updateSearchHistory }: HomePageInterface) {
    const [filteredData, setFilteredData] = useState(socialMediaData);
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        const filtered = socialMediaData.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredData(filtered);
    }, [searchValue]);

    const addToFavourites = (card: CardComponentInterface) => {
        const isCardAdded=favouriteCards.some((favouriteCards)=>favouriteCards.title===card.title)
        if(!isCardAdded){
            setFavouriteCards(prevFavourites => [...prevFavourites, card]);
        }
    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <SearchComponent
                        handleSubmit={(searchValue: string) => {
                            setSearchValue(searchValue);
                            updateSearchHistory(searchValue);
                        }}
                    />
                    <SortComponent />
                </div>

                <div className="row">
                    {filteredData.length === 0 ? (
                        <NoResultsFoundComponent searchCriteria={searchValue} />
                    ) : (
                        filteredData.map((cardComponent: CardComponentInterface) => (
                            <CardComponent
                                key={cardComponent.title}
                                {...cardComponent}
                                addToFavourites={() => addToFavourites(cardComponent)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

