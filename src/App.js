import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookPreviewCards from './components/BookPreviewCards';
import AITools from './components/AITools';
import Footer from './components/Footer';
import './App.css';
import './index.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BookPreviewCards />
      <AITools />
      <Footer />
    </div>
  );
}

export default App;