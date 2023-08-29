import React, {useState} from "react";
import SearchComponentInterface from "./SearchComponentInterface";

const SearchComponent = (props: SearchComponentInterface) => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (event.target.value === '') {
            props.handleSubmit("")
        }
    }

    const onFormSubmit = (event: any) => {
        event.preventDefault();
        props.handleSubmit(inputValue);
    }

    return (

        <div className='col-8 mt-5'>
            <form onSubmit={onFormSubmit}>
                <div className='row'>
                    <div className='col'>
                        <input type="text" value={inputValue} onChange={handleChange} className="form-control"
                               placeholder="Search something"
                               aria-label="Recipient's username" aria-describedby="button-addon2"
                        />
                    </div>
                    <div className='col'>
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}
export default SearchComponent;