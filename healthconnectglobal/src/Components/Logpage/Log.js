import React, { useState, useEffect } from "react";
import "./Log.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

function Log() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorColor, setErrorColor] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Signing in states and functions
  const [signinPassword, setSigninPassword] = useState("");
  const handleSigninPasswordChange = (e) => {
    setSigninPassword(e.target.value);
  };

  // Location-related states
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState(null);
  const [locationInputText, setLocationInputText] = useState("");
  const [showLocationError, setShowLocationError] = useState(false);

  async function getVisitorIP() {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  }

  async function fetchIPInfo(ipToFetch) {
    try {
      const response = await fetch(`https://ip-api.com/json/${ipToFetch}`);
      const data = await response.json();

      if (data.status === "success") {
        setGeoInfo(data);
        const formattedLocation = `${data.country || ""}, ${
          data.regionName || ""
        }, ${data.city || ""}`
          .replace(/, ,/g, ",")
          .replace(/^, /g, "")
          .replace(/,$/g, "")
          .trim();

        setShowLocationError(false);
      } else {
        console.error("Error fetching IP info:", data.message);
        setGeoInfo(null);
        setLocationInputText("");
        setShowLocationError(true);
      }
    } catch (error) {
      console.error("Error fetching IP info:", error);
      setGeoInfo(null);
      setLocationInputText("");
      setShowLocationError(true);
    }
  }

  useEffect(() => {
    getVisitorIP();
  }, []);

  useEffect(() => {
    if (ipAddress) {
      fetchIPInfo(ipAddress);
    }
  }, [ipAddress]);

  useEffect(() => {
    let timer;
    if (showLocationError) {
      timer = setTimeout(() => {
        setShowLocationError(false);
        if (geoInfo === null && locationInputText === "") {
          setLocationInputText("");
        }
      }, 2500);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showLocationError, geoInfo, locationInputText]);

  // Handler for changes in the location input field
  const handleLocationInputChange = (event) => {
    setLocationInputText(event.target.value);
    setShowLocationError(false);
  };

  // Handler for the "current location" div click
  const handleCurrentLocationClick = () => {
    setShowLocationError(false);
    if (ipAddress) {
      fetchIPInfo(ipAddress);
    } else {
      getVisitorIP();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const Options = [
    { label: "choose an option", value: "" },
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "other", value: "other" },
  ];

  const handleChange = (value) => {
    setPhoneNumber(value);
    if (value && !isValidPhoneNumber(value)) {
      setErrorColor(true);
    } else {
      setErrorColor(false);
    }
  };

  const handleDropDownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="signin-form">
        <form>
          <h3 className="log-title">Sign in form</h3>
          <hr />
          <div className="username min-div">
            <label htmlFor="username">Username:</label>
            <input
              placeholder="Donald John Maccall"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="email min-div">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="eg. example@gmail.com"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="password min-div">
            <label htmlFor="password">Password:</label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              name="password"
              value={signinPassword}
              onChange={handleSigninPasswordChange}
              placeholder="enter password"
              required
            />
            <div
              className={`passwordVisibility ${showPassword ? "show" : "hide"}`}
              type="button"
              onClick={togglePasswordVisibility}
            ></div>
          </div>

          <button type="submit">Sign in</button>
          <p className="log-text">
            Don't have an account? <a href="/signup">Create</a>
          </p>
        </form>
      </div>

      {/* Signup form */}

      <div className="signup-form">
        <form>
          <h3 className="log-title">Signup form</h3>
          <hr />
          <div className="fullname min-div">
            <label htmlFor="fullname">Full name:</label>
            <input
              placeholder="eg. Donald John Maccall"
              type="text"
              id="fullname"
              name="fullname"
              required
            />
          </div>
          <div className="email min-div">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="eg. example@gmail.com"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="phone">
            <label>Contact:</label>

            <PhoneInput
              value={phoneNumber}
              onChange={handleChange}
              placeholder="eg. 9876543210"
              defaultCountry="IN"
              className={`phone-input ${errorColor ? "error-border" : ""}`}
              inputProps={{
                required: true,
              }}
            />
          </div>
          <div className="gender min-div">
            <label htmlFor="gender">Gender:</label>
            <select
              value={selectedValue}
              onChange={handleDropDownChange}
              id="gender"
              required
            >
              {Options.map((option) => (
                <option key={option.value || option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="location min-div">
            <label htmlFor="location">Location:</label>
            <input
              // Conditional value: error message or normal text
              value={
                showLocationError
                  ? "Couldn't find your exact location"
                  : locationInputText
              }
              // Conditional placeholder: default or empty if value is showing error
              placeholder={showLocationError ? "" : "enter your location"}
              className={`loc ${
                showLocationError ? "location-error-input" : ""
              }`}
              type="text"
              onChange={handleLocationInputChange}
              required
            />
            <div className="gpsInfo" onClick={handleCurrentLocationClick}>
              current location
            </div>
          </div>
          <div className="username min-div">
            <label htmlFor="username">Username:</label>
            <input
              placeholder="eg. Don_Maccall"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="password min-div">
            <label htmlFor="password">Password:</label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="set your password"
              required
            />
            <div
              className={`passwordVisibility ${showPassword ? "show" : "hide"}`}
              type="button"
              onClick={togglePasswordVisibility}
            ></div>
          </div>

          <button type="submit">Sign up</button>
          <p className="log-text">
            Already have an account? <a href="/login">Login</a>
            <br />
            Privacy policy <a href="/login">Read</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Log;
