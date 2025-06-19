import React from "react";
import "./Doctors.css";
import img1 from "../images/Americadoc1.webp";
import img2 from "../images/Indiadoc1.webp";
import img3 from "../images/Zimdoc1.webp";
import img4 from "../images/chinadoc1.webp";
import img5 from "../images/5thdoc.webp";
import { image } from "framer-motion/client";

function Doctors() {
  const doctors = [
    {
      name: "Dr. John Smith",
      specialty: "Cardiology",
      experience: "10 years",
      location: "USA",
      rating: "★★★★☆",
      image: img1,
      Reviews: [
        {
          user: "Alice",
          comment: "Great doctor, very attentive!",
          rating: 5,
        },
        {
          user: "Bob",
          comment: "Helped me with my heart condition.",
          rating: 4,
        },
        {
          user: "Charlie",
          comment: "Professional and caring.",
          rating: 5,
        },
      ],
    },
    {
      name: "Dr. Jane Doe",
      specialty: "Pediatrics",
      experience: "8 years",
      location: "India",
      rating: "★★★☆☆",
      image: img2,
      Reviews: [
        {
          user: "David",
          comment: "Excellent with kids, highly recommend!",
          rating: 5,
        },
        {
          user: "Eva",
          comment: "Very patient and understanding.",
          rating: 4,
        },
        {
          user: "Frank",
          comment: "My child loves visiting her.",
          rating: 5,
        },
      ],
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Orthopedics",
      experience: "12 years",
      location: "Zimbabwe",
      rating: "★★★★★",
      image: img3,
      Reviews: [
        {
          user: "George",
          comment: "Fixed my knee pain, very skilled!",
          rating: 5,
        },
        {
          user: "Hannah",
          comment: "Great surgeon, highly recommend.",
          rating: 5,
        },
        {
          user: "Denny",
          comment: "Good surgeon, recommend.",
          rating: 4,
        },
      ],
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Neurology",
      experience: "15 years",
      location: "China",
      rating: "★★★★★",
      image: img4,
      Reviews: [
        {
          user: "Desire",
          comment: "Excellent Neurologist, highly recommended",
          rating: 4,
        },
        {
          user: "Simon",
          comment: "Diagnosed my heart and head  problem with high accuracy",
          rating: 5,
        },
        {
          user: "Brian",
          comment: "Impressive diagnosing skills, personally recommend him",
          rating: 5,
        },
      ],
    },
    {
      name: "Dr. Sarah Davis",
      specialty: "Dermatology",
      experience: "7 years",
      location: "USA",
      rating: "★★★☆☆",
      image: img5,
      Reviews: [
        {
          user: "Denford",
          comment:
            "Diagnosed my skin disease with ease, i personally recommend him",
          rating: 5,
        },
        {
          user: "Nicky",
          comment:
            "Diagnosed my skin disease with ease, i personally recommend him",
          rating: 5,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="doctors">
        <h1>Doctors</h1>
        <p>
          Meet our team of experienced doctors who are dedicated to providing
          the best care for you and your family.
        </p>
        <div className="doctors-list">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-image"
              />
              <h2>{doctor.name}</h2>
              <div className="doctor-details">
                <p>
                  Specialty <span className="colon">:</span>{" "}
                  <span className="align-right">{doctor.specialty}</span>
                </p>
                <p>
                  Experience <span className="colon">:</span>{" "}
                  <span className="align-right">{doctor.experience}</span>
                </p>
                <p>
                  Location <span className="colon">:</span>{" "}
                  <span className="align-right">{doctor.location}</span>
                </p>
                <p>
                  Rating <span className="colon">:</span>{" "}
                  <span className="rating align-right">{doctor.rating}</span>
                </p>
              </div>
              <div className="doctorCard-buttons">
                <button className="view-profile doctor-button">
                  View Profile
                </button>
                <button className="book-appointment doctor-button">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
