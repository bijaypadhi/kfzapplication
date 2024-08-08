import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h1>India's Top Creative Fun Platform By KFZ, for Youngs.</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Use the book or author names to search here."
        />
        <button type="submit">
          <img src="/assets/images/search.svg" alt="Search" />
        </button>
      </div>
    </section>
  );
}

export default Hero;