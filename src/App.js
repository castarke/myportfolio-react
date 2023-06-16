import React from 'react';
import './App.css';
import Header from './components/Header';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
import Footer from './components/Footer';
// import Navigation from './components/Navigation';
// import Projects from './components/pages/Projects';
// import Resume from './components/pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
  <div>
    <div>
    <Header />
    </div>
    <footer>
    <Footer />
    </footer>
  </div>
)
}

export default App;