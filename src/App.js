import React from 'react';


import Cards from './Cards';
import './Cards.css';
import './CreateOrganization.css';
import CreateOrganization from './CreateOrganization';

function App() {
  return (
    <div className="App">
      <CreateOrganization />
    <Cards/>
    </div>
  );
}

export default App;