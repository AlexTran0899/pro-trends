
// src/App.jsx
import React from 'react';
import './App.css';
import data from './data.json';
import logo from './logo.png'; // place your logo in src/logo.png

function ProductCard({ item }) {
  const change = item.change_30_days || '-';
  const isUp = change.startsWith('+');
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${item.image_url})` }}
      />
      <div className="card-content">
        <span className="category">{item.category}</span>
        <h3 className="product">{item.product}</h3>
        <span className={`change ${isUp ? 'up' : 'down'}`}>{change}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <header className="banner">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Product Search Trends</h1>
      </header>
      {Object.entries(data).map(([section, items]) => (
        <div key={section} className="section">
          <h2>{section.replace('_', ' ')}</h2>
          <div className="grid">
            {items.map((item, idx) => (
              <ProductCard key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
