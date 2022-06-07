import './styles/App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import React, {useState} from 'react';
import {ROUTE} from './utils/Routes';

const App = () => {
  const [page, setPage] = useState(ROUTE.home);

  return (
    <div className="App">
      <Sidebar changeContent={setPage} />
      <Home changeContent={setPage} page={page} />
    </div>
  );
}

export default App;
