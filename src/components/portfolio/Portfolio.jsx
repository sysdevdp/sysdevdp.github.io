import React, { useState } from 'react';
import Menu from './Menu';
import './portfolio.css';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const handleFilter = (category) => {
    if (category === 'All') {
      setItems(Menu);
    } else {
      setItems(Menu.filter((item) => item.category === category));
    }
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => handleFilter('All')}>Everything</span>
        <span className="work__item" onClick={() => handleFilter('Networking')}>Networking</span>
        <span className="work__item" onClick={() => handleFilter('Desktop-App')}>Desktop </span>
        <span className="work__item" onClick={() => handleFilter('Web-App')}>Web </span>
        <span className="work__item" onClick={() => handleFilter('Random')}>Random</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button" aria-label={`View more about ${title}`}>
                <i className="icon-link"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
