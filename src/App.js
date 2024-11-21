// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './components/MainPage';
import WinnersPage from './components/WinnersPage';
// import JuryPage from './components/JuryPage';
import Regulations from './components/Regulations';
import Creteria from './components/Creteria';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
// import ArticlesList from './components/ArticlesList';
// import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
        <Router>
        <div className="App">
        <Menu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/polozhenie" element={<Regulations />} />
            <Route path="/creteria" element={<Creteria />} />
            <Route path="/winners" element={<WinnersPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* 
            <Route path="/jury" element={<JuryPage />} />

            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<Article />} /> */}
          </Routes>
          <Footer  />
        </div>
      </Router>
  );
}

export default App;
