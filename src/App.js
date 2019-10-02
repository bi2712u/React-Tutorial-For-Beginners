import React from 'react';
import Tweet from './Tweet';
import './App.css';

function App(){
  return(
    <div className="app">
      <Tweet name="Dev ED" message="This is a random tweet"/>
      <Tweet name="John Snow" message="I am the true king"/>
      <Tweet name="Traversy Media" message="700k my dudes"/>
      <Tweet name="Mosh" message="My new course is available"/>
    </div>
  );
}

export default App;