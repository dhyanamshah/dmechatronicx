import React, { useState } from "react";
import { groupCard } from "../constant/index";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MAX_VISIBILITY = 3;

const Card = ({ image }) => (
  <div className="card-3d">
    <div className="card-image-container">
      <img src={image} alt="Team" className="card-image" />
    </div>
  </div>
);

const AboutUsCards = () => {
  const [active, setActive] = useState(1); // Start with middle card active
  const count = groupCard.length;

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {active > 0 && (
          <button
            className="nav left"
            onClick={() => setActive((i) => i - 1)}
            aria-label="Previous card"
          >
            <FiChevronLeft />
          </button>
        )}

        {groupCard.map((card, i) => (
          <div
            key={card.id}
            className="card-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
            onClick={() => setActive(i)}
          >
            <Card image={card.image} />
          </div>
        ))}

        {active < count - 1 && (
          <button
            className="nav right"
            onClick={() => setActive((i) => i + 1)}
            aria-label="Next card"
          >
            <FiChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default AboutUsCards;
