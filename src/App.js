
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AboutPage from './components/About/AboutPage.js';
import ContactPage from './components/contact/ContactPage.js';
import PrivacyPolicyPage from './components/legal/PrivacyPolicyPage.js';
import TermsOfServicePage from './components/legal/TermsOfServicePage.js';
import HomePage from './components/home/HomePage.js';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

function App() {
  return (
    <div className="App">

      <Header />
    
      <Routes>

        <Route path='/' Component={HomePage}/>
        <Route path='about' Component={AboutPage}/>
        <Route path='contact' Component={ContactPage}/>
        <Route path='privacy' Component={PrivacyPolicyPage}/>
        <Route path='terms' Component={TermsOfServicePage}/>

        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
