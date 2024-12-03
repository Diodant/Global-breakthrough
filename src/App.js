// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './components/MainPage';
import WinnersPage from './components/WinnersPage';
import Awards2024 from './components/Awards2024';
import Awards2023 from './components/Awards2023';
import Awards2022 from './components/Awards2022';
import Awards2021 from './components/Awards2021';
import Awards2020 from './components/Awards2020';
import Awards2019 from './components/Awards2019';
import Awards2018 from './components/Awards2018';
import Regulations from './components/Regulations';
import Creteria from './components/Creteria';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Submit from './components/Submit';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
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
            <Route path="/awards2024" element={<Awards2024 />} />
            <Route path="/awards2023" element={<Awards2023 />} />
            <Route path="/awards2022" element={<Awards2022 />} />
            <Route path="/awards2021" element={<Awards2021 />} />
            <Route path="/awards2020" element={<Awards2020 />} />
            <Route path="/awards2019" element={<Awards2019 />} />
            <Route path="/awards2018" element={<Awards2018 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* 
           */}
          </Routes>
          <Footer  />
        </div>
      </Router>
  );
}

export default App;
