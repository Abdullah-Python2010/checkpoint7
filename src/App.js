import React, { useState, useEffect } from 'react';
import './App.css'
const App = () => {
  // State for the person's information
  const [person, setPerson] = useState({
    fullName: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: 'https://placekitten.com/200/200', // Replace with the actual image source
    profession: 'Software Developer',
  });

  // State to control whether to show the person's profile
  const [show, setShow] = useState(false);

  // State to keep track of the time interval since the component mounted
  const [interval, setInterval] = useState(0);

  // useEffect to handle the interval setup and cleanup
  useEffect(() => {
    // Setup interval to update the time every second
    const intervalId = setInterval(() => {
      setInterval((prevInterval) => prevInterval + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  // Function to toggle the visibility of the person's profile
  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  // JSX to render the component
  return (
    <div className="App">
      {/* Button to toggle the profile visibility */}
      <button onClick={toggleShow}>Toggle Profile</button>
      
      {/* Conditionally render the person's profile if 'show' is true */}
      {show && (
        <div className="card">

          <img src={person.imgSrc} alt="Profile" />
          <h1>{person.fullName}</h1>
          <p>{person.bio}</p>
          <p>Profession: {person.profession}</p>
        </div>
      )}
      
      {/* Display the time since mount */}
      <p>Time since mount: {interval} seconds</p>
    </div>
  );
};

export default App;
