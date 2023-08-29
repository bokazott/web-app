import React from 'react';
import CardComponentInterface from './CardComponentInterface';
import CardComponent from './CardComponent';

interface FavouritesProps {
    favouriteCards: CardComponentInterface[];
}

function Favourites({ favouriteCards }: FavouritesProps) {
    return (
        <div className="container">
            <h2>Your Favourite Cards</h2>
            <div className="row">
                {favouriteCards.map(card => (
                    <CardComponent
                        key={card.title}
                        {...card}
                        addToFavourites={() => {}}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favourites;