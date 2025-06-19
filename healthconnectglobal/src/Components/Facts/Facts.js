import React from "react";
import "./Facts.css";

function Facts() {
  return (
    <div className="facts-container">
      <div className="facts">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Secure and private health record management</li>
          <li>Connect with healthcare providers worldwide</li>
          <li>Access to a vast network of medical resources</li>
          <li>User-friendly interface for easy navigation</li>
        </ul>
      </div>
      <div className="fun-facts">
        <h2>Fun Facts</h2>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p class="d-block w-100">
                Your brain uses about 20% of the oxygen and calories you
                consume. Even though it only makes up about 2% of your body
                weight, your brain is a very energy-intensive organ, constantly
                working to process information, control your body, and keep you
                alive.
              </p>
            </div>
            <div class="carousel-item">
              <p class="d-block w-100">
                Laughter is actually good for you. It boosts your immune system,
                triggers the release of endorphins (your body's natural
                feel-good chemicals), reduces stress, and even burns a few
                calories. So go ahead and have a good laugh!
              </p>
            </div>
            <div class="carousel-item">
              <p class="d-block w-100">
                The average adult heart beats about 100,000 times a day. Over a
                lifetime, that's billions of beats! Your heart is an incredibly
                hard-working muscle, constantly pumping blood throughout your
                body.
              </p>
            </div>
            <div class="carousel-item">
              <p class="d-block w-100">
                You are taller in the morning than in the evening. Throughout
                the day, the cartilage between your bones in your spine
                compresses due to gravity. When you lie down and sleep, this
                cartilage decompands, making you slightly taller.
              </p>
            </div>
            <div class="carousel-item">
              <p class="d-block w-100">
                Your sense of smell is directly linked to your memory. The
                olfactory bulb (the part of the brain that processes smells) is
                directly connected to the hippocampus and amygdala, brain
                regions involved in memory and emotion. This is why certain
                smells can trigger vivid memories and strong emotions.
              </p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden next">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Facts;
