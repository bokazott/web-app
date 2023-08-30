import React from 'react';
import CardComponent from './CardComponent';
import {FavouritesComponentInterface} from "./FavouritesComponentInterface";


function FavouritesComponent({favouriteCards}: FavouritesComponentInterface) {
    return (
        <div className="container">
            <h2>Your Favourite Cards</h2>
            <div className="row">
                {favouriteCards.map(card => (
                    <CardComponent
                        key={card.title}
                        {...card}
                        addToFavourites={() => {
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default FavouritesComponent;