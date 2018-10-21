
import React from 'react';

import AddNote from './AddNote';
import FilterNotes from './FilterNotes';
import ListNotes from './ListNotes';
import '../styles/styles.css';


const Dashboard = () => (
    <div>
        <div className="header">
            <h1 className="header-content container">Note App</h1>
        </div>
        <AddNote />
        <FilterNotes />
        <ListNotes />
    </div >
);


export default Dashboard;