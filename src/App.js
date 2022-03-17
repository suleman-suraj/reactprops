import React from 'react';
import NavBar from './components/NavBar';
import Todo from './components/Todo';

const App = () => {
  let title = "my first react app";
  return (
    <div>
    <NavBar title={title}/>
    <main>
    <Todo title="learning react"datetime= " 23rd March 2022"/>
    <Todo title="premest training"datetime= "2nd january 2022"/>
    <Todo title="going to market" datetime="3rd April 2022"/>
    <Todo title="writing exams"datetime="18th December 2022" / >
    <Todo title="Depreciating cedis"datetime="4th october 2022"/>
    </main>
  </div>
  );
}

export default App;