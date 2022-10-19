import React from 'react';
import './App.css';
import { Initial } from './pages/initial';
import { Header } from './components/header';

const App: React.FC = () => {
  return (
    <>
    <Header>
      <div>Test</div>
    </Header>
    <Initial/>
    </>
  );
}

export default App;
