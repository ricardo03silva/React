import React from 'react';
import './App.css';
import { useState } from 'react';
import Button from './components/UI/Button/Button';

const App = () => {
    const [showP, setShowP] = useState(false);

    const showPHandler = () => {
        setShowP((prev) => {
            return !prev;
        });
    };

    console.log('APP RUNNING');

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {showP && <p>This is new</p>}
            <Button onClick={showPHandler}>Toogle Paragraph</Button>
        </div>
    );
};

export default App;
