import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
const App: React.FC = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Hero/>
    </>
  );
}

export default App;
