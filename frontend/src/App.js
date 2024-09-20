import React from 'react';
import IdentityForm from './components/IdentityForm';
import IdentityList from './components/IdentityList';

function App() {
  return (
    <div className="App">
      <h1>Decentralized Identity Management</h1>
      <IdentityForm />
      <IdentityList />
    </div>
  );
}

export default App;
