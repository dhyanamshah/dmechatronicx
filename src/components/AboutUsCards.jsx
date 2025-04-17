import React, { useState } from "react";
import { groupCard } from "../constant/index";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MAX_VISIBILITY = 2;

const Card = ({ image }) => (
  <div className="card-3d">
    <div className="card-image-container">
      <img src={image} alt="Team" className="card-image cursor-default" />
    </div>
  </div>
);

const AboutUsCards = () => {
  const [active, setActive] = useState(1); // Start with middle card active
  const count = groupCard.length;

  const handlePrevious = () => {
    setActive((i) => (i - 1 < 0 ? count - 1 : i - 1));
  };

  const handleNext = () => {
    setActive((i) => (i + 1 >= count ? 0 : i + 1));
  };

  // Calculate the shortest distance between cards in a circular array
  const getCircularDistance = (active, index, total) => {
    const directDistance = active - index;
    const wrapDistance =
      directDistance > 0 ? directDistance - total : directDistance + total;

    // Return the shortest path (direct or wrapped)
    return Math.abs(directDistance) < Math.abs(wrapDistance)
      ? directDistance
      : wrapDistance;
  };

  return (
    <div id="" className="carousel-wrapper">
      <div className="carousel">
        {/* Navigation button - always visible now */}
        <button
          className="nav left"
          onClick={handlePrevious}
          aria-label="Previous card"
        >
          <FiChevronLeft />
        </button>

        {groupCard.map((card, i) => {
          // Calculate the shortest circular distance
          const distance = getCircularDistance(active, i, count);
          const absDistance = Math.abs(distance);

          return (
            <div
              key={card.id}
              className="card-container"
              style={{
                "--active": i === active ? 1 : 0,
                "--offset": distance / 3,
                "--direction": Math.sign(distance),
                "--abs-offset": absDistance / 3,
                pointerEvents: active === i ? "auto" : "none",
                opacity: absDistance >= MAX_VISIBILITY ? "0" : "1",
                display: absDistance > MAX_VISIBILITY ? "none" : "block",
              }}
              onClick={() => setActive(i)}
            >
              <Card image={card.image} />
            </div>
          );
        })}

        {/* Navigation button - always visible now */}
        <button
          className="nav right"
          onClick={handleNext}
          aria-label="Next card"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AboutUsCards;
