import React from "react";
import "./DoctorCard.css";

function DoctorCard({ doctor, onExpand }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMoreInfoClick = () => {
    onExpand(doctor);
  };

  return (
    <div
      className={`card-container ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        <div className="flip-card-front">
          <img src={doctor.image} alt={doctor.name} />
          <h2>{doctor.name}</h2>
          <div className="flip-card-front-content">
            <p>
              specialty{" "}
              <span className="align-right">
                <span>:</span>
                {doctor.specialty}
              </span>
            </p>
            <p>
              experience{" "}
              <span className="align-right">
                <span>:</span>
                {doctor.experience}
              </span>
            </p>
            <p>
              location{" "}
              <span className="align-right">
                <span>:</span>
                {doctor.location}
              </span>
            </p>
            <p>
              rating{" "}
              <span className="align-right">
                <span>:</span>
                <span className="rating">{doctor.rating}</span>
              </span>
            </p>
            <p>
              contact{" "}
              <span className="align-right">
                <span>:</span>
                {doctor.contact}
              </span>
            </p>
            <button
              className="more-info-button"
              onClick={(e) => {
                e.stopPropagation();
                handleMoreInfoClick();
              }}
            >
              More Info
            </button>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-content">
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>experience: {doctor.experience}</p>
            <p>location: {doctor.location}</p>
            <p>rating: {doctor.rating}</p>
            <p>{doctor.bio.substring(0, 100)}</p>
            <button
              className="more-info-button"
              onClick={(e) => {
                e.stopPropagation();
                handleMoreInfoClick();
              }}
            >
              Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
