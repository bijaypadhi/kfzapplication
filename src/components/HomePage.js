import React from 'react';
import Header from './Header';
import Hero from './Hero';
import BookPreviewCards from './BookPreviewCards';
import AITools from './AITools';
import Footer from './Footer';
import '../App.css';
import '../index.css';

function HomePage() {
  return (
    <div className="App">
      <Hero />
      <BookPreviewCards />
      <AITools />
      <Footer />
    </div>
  );
}

export default HomePage;