import React, {useState} from 'react';
import NavbarComponent from './components/NavbarComponent'
import CardComponent from "./components/CardComponent";
import SearchComponent from "./components/SearchComponent";
import SortComponent from "./components/SortComponent";
import socialMediaData from "./components/socialMediaData";
import CardComponentInterface from "./components/CardComponentInterface";

function App() {

    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div className="container">
                <SearchComponent
                    handleSubmit={(searchValue: string) => console.log(searchValue)}
                />
                <SortComponent/>

                <div className="row">
                    {
                        socialMediaData.map((cardComponent: CardComponentInterface) => {
                            return <CardComponent key={cardComponent.title}
                                                  image={cardComponent.image}
                                                  title={cardComponent.title}
                                                  description={cardComponent.description}
                                                  date={cardComponent.date}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
