import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/");
  }
  return (
    <div className="about">
      <h1>Google Clone</h1>;
      <p>This is google clone created using React an its awesome Hooks.</p>
      <h3>Created By Suyog.</h3>
      <button onClick={goBack}>Back to Homepage.</button>
    </div>
  );
}

export default About;
