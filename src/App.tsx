import React from 'react';
import Navbar from './components/Navbar'
import SearchSort from "./components/SearchSort";
import Card from "./components/Card";

function App() {
  return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <SearchSort/>
                <Card></Card>
            </div>
        </div>
  );
}

export default App;
