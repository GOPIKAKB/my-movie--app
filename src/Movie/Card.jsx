import React, { useState } from 'react';

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
const image='/vYm3JDA5ZZbs9hvLs0mPQzqaY95.jpg'
  return (
    <div className="card">
      <img src={image} alt="Card Image" />
      <h1>{title}</h1>
      <p className={expanded ? 'expanded' : 'collapsed'}>{description}</p>
      {description.length > 3 && (
        <button onClick={toggleExpanded}>
          {expanded ? 'Less' : 'More'}
        </button>
      )}
    </div>
  );
};

export default Card;
