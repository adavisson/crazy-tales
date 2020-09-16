import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Crazy Tales</h1>
      <div className="story">
        <p>Welcome to Crazy Tales! Click <Link to="/templates">here</Link> to get started, or if you would like to read more about this project then click <Link to="/about">here</Link> to go to the about page.</p>
      </div>
    </div>
  );
}
 
export default Home;