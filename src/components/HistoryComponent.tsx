import React from 'react';
import {HistoryComponentInterface} from "./HistoryComponentInterface";

const HistoryComponent = (props: HistoryComponentInterface) => {
    return (
        <div className="container">
            <h1> This is your history search </h1>
            <ul>
                {props.searchHistory.map((searchQuery, index) => (
                    <li key={index}>{searchQuery}</li>
                ))}
            </ul>
        </div>
    );
}

export default HistoryComponent;