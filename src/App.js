import React, {useState} from 'react';
import Tweet from './Tweet';
import './App.css';
import { isUserWhitespacable } from '@babel/types';

function App(){
  const [users,setUsers] = useState([
    {name:"Ed",message:"Hello there"},
    {name:"John",message:"I am john snow"},
    {name:"traversy",message:"I am awesome"}
  ]);
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;