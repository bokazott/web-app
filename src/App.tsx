import React, {useState, useEffect} from 'react';
import NavbarComponent from './components/NavbarComponent'
import CardComponent from "./components/CardComponent";
import SearchComponent from "./components/SearchComponent";
import SortComponent from "./components/SortComponent";
import socialMediaData from "./components/socialMediaData";
import CardComponentInterface from "./components/CardComponentInterface";

function App() {
    const [filteredData, setFilteredData] = useState(socialMediaData);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const filtered = socialMediaData.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredData(filtered);
    }, [searchValue]);


    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <div className="container">
                <SearchComponent
                    handleSubmit={(searchValue: string) => setSearchValue(searchValue)}
                />
                <SortComponent/>

                <div className="row">
                    {filteredData.length === 0 ? (
                        <p>The results doesnt match</p>
                    ) : (
                        filteredData.map((cardComponent: CardComponentInterface) => (
                            <CardComponent
                                key={cardComponent.title}
                                image={cardComponent.image}
                                title={cardComponent.title}
                                description={cardComponent.description}
                                date={cardComponent.date}
                            />
                        ))

                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
