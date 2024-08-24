import React from 'react';
import './App.css';
import './index.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import BookStore from './components/BookStore';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookstore" element={<BookStore />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
         </Routes>    
    </>
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <BookPreviewCards />
    //   <AITools />
    //   <Footer />
    // </div>
  );
}

export default App;