import React, {useState, useEffect} from 'react';
import NavbarComponent from './components/NavbarComponent'
import CardComponent from "./components/CardComponent";
import SearchComponent from "./components/SearchComponent";
import SortComponent from "./components/SortComponent";
import socialMediaData from "./components/socialMediaData";
import CardComponentInterface from "./components/CardComponentInterface";
import NoResultsFoundComponent from "./components/NoResultsFoundComponent";

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
                <div className="row">
                    <SearchComponent
                        handleSubmit={(searchValue: string) => setSearchValue(searchValue)}
                    />
                    <SortComponent/>
                </div>

                <div className="row">
                    {filteredData.length === 0 ? (
                        <NoResultsFoundComponent searchCriteria={searchValue}/>
                    ) : (
                        filteredData.map((cardComponent: CardComponentInterface) => (
                            <CardComponent
                                key={cardComponent.title}
                                {...cardComponent}
                            />
                        ))

                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
