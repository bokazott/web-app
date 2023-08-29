import React from 'react';

interface HistoryProps {
    searchHistory: string[];
}

function History({ searchHistory }: HistoryProps) {
    return (
        <div className="container">
            <h1>This is your history</h1>
            <ul>
                {searchHistory.map((searchQuery, index) => (
                    <li key={index}>{searchQuery}</li>
                ))}
            </ul>
        </div>
    );
}

export default History;