import { React, useState } from "react";
import "./Doctors.css";
import DoctorCard from "./DoctorCard";

// doctors images
import img1 from "../images/Americadoc1.webp";
import img2 from "../images/Indiadoc1.webp";
import img3 from "../images/Zimdoc1.webp";
import img4 from "../images/chinadoc1.webp";
import img5 from "../images/5thdoc.webp";

function Doctors() {
  // doctors array
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiology",
      experience: "10 years",
      location: "USA",
      rating: "★★★★☆",
      contact: "8968973376",
      image: img1,
      availability: "Monday - Friday",
      time: "9:00 AM - 5:00 PM",
      emergenceServicesOnCall: "Yes",
      VirtualConsultation: "Yes",
      researchAndpublications: [
        { name: "book1", title: "Heart disease treatment" },
        { name: "book2", title: "Heart disease prevention" },
        { name: "book3", title: "Heart disease management" },
      ],
      paymentOptions: [
        { method: "cash", rating: 5 },
        { method: "online", rating: 4 },
        { method: "card", rating: 3 },
      ],
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
      bio: "Dr. John Smith is a highly respected cardiologist with over a decade of experience in diagnosing and treating heart conditions. He is known for his patient-centric approach and dedication to innovative cardiac care.",
    },
    {
      id: 2,
      name: "Dr. Jane Doe",
      specialty: "Pediatrics",
      experience: "8 years",
      location: "India",
      rating: "★★★☆☆",
      contact: "8968973376",
      image: img2,
      availability: "Monday - Friday",
      time: "9:00 AM - 5:00 PM",
      emergenceServicesOnCall: "Yes",
      VirtualConsultation: "Yes",
      researchAndpublications: ["book1", "book2", "book3"],
      paymentOptions: ["cash", "online", "card"],
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
      bio: "Dr. Jane Doe is a compassionate pediatrician focused on providing comprehensive healthcare for children from infancy through adolescence. She creates a comfortable and friendly environment for her young patients.",
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialty: "Orthopedics",
      experience: "12 years",
      location: "Zimbabwe",
      rating: "★★★★★",
      contact: "8968973376",
      image: img3,
      availability: "Monday - Friday",
      time: "9:00 AM - 5:00 PM",
      emergenceServicesOnCall: "Yes",
      VirtualConsultation: "Yes",
      researchAndpublications: ["book1", "book2", "book3"],
      paymentOptions: ["cash", "online", "card"],
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
      bio: "Dr. Emily Johnson is a leading orthopedic surgeon specializing in musculoskeletal injuries and conditions. Her expertise includes joint replacements, sports medicine, and fracture care, with a focus on restoring mobility.",
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      specialty: "Neurology",
      experience: "15 years",
      location: "China",
      rating: "★★★★★",
      contact: "8968973376",
      image: img4,
      availability: "Monday - Friday",
      time: "9:00 AM - 5:00 PM",
      emergenceServicesOnCall: "Yes",
      VirtualConsultation: "Yes",
      researchAndpublications: ["book1", "book2", "book3"],
      paymentOptions: ["cash", "online", "card"],
      Reviews: [
        {
          user: "Desire",
          comment: "Excellent Neurologist, highly recommended",
          rating: 4,
        },
        {
          user: "Simon",
          comment: "Diagnosed my heart and head problem with high accuracy",
          rating: 5,
        },
        {
          user: "Brian",
          comment: "Impressive diagnosing skills, personally recommend him",
          rating: 5,
        },
      ],
      bio: "Dr. Michael Brown is a distinguished neurologist known for his extensive experience in diagnosing and treating complex neurological disorders. He is dedicated to providing cutting-edge care for his patients.",
    },
    {
      id: 5,
      name: "Dr. Sarah Davis",
      specialty: "Dermatology",
      experience: "7 years",
      location: "USA",
      rating: "★★★☆☆",
      contact: "8968973376",
      image: img5,
      availability: "Monday - Friday",
      time: "9:00 AM - 5:00 PM",
      emergenceServicesOnCall: "Yes",
      VirtualConsultation: "Yes",
      researchAndpublications: ["book1", "book2", "book3"],
      paymentOptions: ["cash", "online", "card"],
      Reviews: [
        {
          user: "Denny",
          comment:
            "Diagnosed my skin disease with ease, i personally recommend him",
          rating: 5,
        },
        {
          user: "Nicky",
          comment:
            "Apart from his excellent medical diagnostic skills, has a great skills in handling patience",
          rating: 5,
        },
        {
          user: "Natty",
          comment: "Great dermatologist, recommended",
          rating: 4,
        },
      ],
      bio: "Dr. Sarah Davis is a skilled dermatologist specializing in a wide range of skin conditions, from acne to complex dermatological diseases. She emphasizes personalized treatment plans for optimal skin health.",
    },
  ];

  const [expandedDoctor, setExpandedDoctor] = useState(null);

  const handleCardClick = (doctorToExpand) => {
    setExpandedDoctor(doctorToExpand);
  };

  const handleCloseExpandedView = () => {
    setExpandedDoctor(null);
  };

  return (
    <div className="outer-container">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onExpand={handleCardClick}
        />
      ))}

      {/* Expanded doctor overlay */}
      {expandedDoctor && (
        <div className="expanded-doctor-overlay">
          <div className="expanded-doctor-content">
            <button className="close-button" onClick={handleCloseExpandedView}>
              &times;
            </button>
            <div className="expanded-header">
              <img
                src={expandedDoctor.image}
                alt={expandedDoctor.name}
                className="expanded-image"
              />
              <h3>Dr. {expandedDoctor.name}</h3>
              <p>{expandedDoctor.specialty}</p>
            </div>
            <div className="expanded-details">
              <p>
                <strong>location:</strong>
                {expandedDoctor.location}
              </p>
              <p>
                <strong>rating:</strong>
                {expandedDoctor.rating}
              </p>
              <p>
                <strong>contact:</strong>
                {expandedDoctor.contact}
              </p>
              <p>
                <strong>availability:</strong>
                {expandedDoctor.availability} {expandedDoctor.time}
              </p>
              <p>
                <strong>emergence services:</strong>
                {expandedDoctor.emergenceServicesOnCall}
              </p>
              <p>
                <strong>virtual consultation:</strong>
                {expandedDoctor.VirtualConsultation}
              </p>

              <h4>Bio:</h4>
              <p>{expandedDoctor.bio}</p>

              <h4>Reviews</h4>
              {Array.isArray(expandedDoctor.Reviews) &&
              expandedDoctor.Reviews.length > 0 ? (
                expandedDoctor.Reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <p>
                      <strong>{review.user}:</strong> "{review.comment}"
                    </p>
                    <p>Rating: {review.rating} out of 5</p>
                  </div>
                ))
              ) : (
                <p>No reviews available</p>
              )}
              {expandedDoctor.researchAndpublications && (
                <>
                  <h4>Research and Publications</h4>
                  <ul>
                    {expandedDoctor.researchAndpublications.map(
                      (item, index) => (
                        <li key={index}>{item.title || item}</li>
                      )
                    )}
                  </ul>
                </>
              )}
              {expandedDoctor.paymentOptions && (
                <>
                  <h4>Payment Options</h4>
                  <ul>
                    {expandedDoctor.paymentOptions.map((item, index) => (
                      <li key={index}>{item.method || item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;
