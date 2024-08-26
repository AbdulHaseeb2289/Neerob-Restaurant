import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>📞 (917) 981-1747</span>
          <span>✉️ neerobbronx@gmail.com</span>
          <span>⏰ 08:00 am - 10:30 pm</span>
        </div>
      </div>
      <div className="nav-bar">
        <div className="logo">
          <span>Neerob</span>
          <img src="bird-logo.png" alt="bird-logo" className="bird-logo"/>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/specials">Specials</a>
          <a href="/catering">Catering</a>
          <a href="/about">About</a>
        </nav>
        <div className="actions">
          <button className="reservation-btn">RESERVATION</button>
          <button className="order-btn">ORDER NOW <span>▼</span></button>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-section">
      <h1>Our menu</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
      <div className="menu-categories">
        <button className="menu-button active">Popular Items</button>
        <button className="menu-button">Vegetarian</button>
        <button className="menu-button">Non-Veg</button>
        <button className="menu-button">Seafood</button>
        <button className="menu-button">Biryani & Rice-Based</button>
        <button className="menu-button">Curry</button>
        <button className="menu-button">Seasonal</button>
        <button className="menu-button">Plant Based</button>
        <button className="menu-button">Fusion</button>
        <button className="menu-button">Bhoi</button>
      </div>
    </div>
  );
}

import React from 'react';
import './TacoMenu.css';
import tacoImage from './tacos.png'; // Assuming you have a taco image in your 'src' directory

function TacoMenu() {
  return (
    <div className="taco-menu-container">
      <div className="taco-image">
        <img src={tacoImage} alt="Tacos" />
      </div>
      <div className="taco-items">
        <div className="taco-item">
          <h2>Jack Fruit Tacos</h2>
          <div className="sizes">
            <span>4oz</span> | <span>8oz</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
          <span className="price">$8.50</span>
        </div>
        <div className="taco-item">
          <h2>Baja Cali Tacos</h2>
          <div className="sizes">
            <span>4oz</span> | <span>8oz</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
          <span className="price">$7.25</span>
        </div>
        <div className="taco-item">
          <h2>Impossible Tacos</h2>
          <div className="sizes">
            <span>4oz</span> | <span>8oz</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
          <span className="price">$9.00</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = [
    {
      name: "Jack Fruit Tacos",
      size: ["4oz", "8oz"],
      price: "$8.50",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique."
    },
    {
      name: "Baja Cali Tacos",
      size: ["4oz", "8oz"],
      price: "$7.25",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique."
    },
    {
      name: "Impossible Tacos",
      size: ["4oz", "8oz"],
      price: "$9.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique."
    }
  ];

  return (
    <div className="menu-container">
      <div className="menu-column">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h2>{item.name}</h2>
            <div className="sizes">
              {item.size.map((size, idx) => (
                <span key={idx}>{size}{idx < item.size.length - 1 && " | "}</span>
              ))}
            </div>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="menu-column">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h2>{item.name}</h2>
            <div className="sizes">
              {item.size.map((size, idx) => (
                <span key={idx}>{size}{idx < item.size.length - 1 && " | "}</span>
              ))}
            </div>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2>Come say <span className="highlight">hello</span></h2>
          <button className="schedule-button">View weekly schedule</button>
        </div>
        
        <div className="footer-info">
          <div className="footer-logo">
            <h3>Logo</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          
          <div className="newsletter">
            <p>Sign up for our newsletter!</p>
            <div className="newsletter-signup">
              <input type="email" placeholder="Your email" />
              <button>Sign up</button>
            </div>
          </div>
        </div>
        
        <div className="footer-links">
          <ul>
            <li>Menu</li>
            <li>Schedule</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>Privacy policy</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Catering</li>
          </ul>
        </div>
        
        <div className="footer-bottom">
          <p>© Example 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Header;
