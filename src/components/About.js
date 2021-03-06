import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Crazy Tales</h1>
      <div className="story">
        <p>This app uses the Madlibz API found <a target="_blank" href="https://madlibz.herokuapp.com/api" rel='noopener noreferrer'>here</a>. This mimics another project I did called Wacky Stories, but with this project I am not using Redux and I am using a pre-existing API. This is also my first project attempting to use React Hooks.</p>
      </div>
    </div>
  );
}
 
export default About;