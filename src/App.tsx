import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { SidePane } from './components/sidePane';
const App: React.FC = () => {
  return (
    <>
    <Header/>
    <SidePane/>
    <Hero/>
    </>
  );
}

export default App;
