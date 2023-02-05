import './App.css';
import React from 'react';
import NewGrid from './NewGrid';

function App() {  

  let listOfHorse = []

  let numberOfHorse = 8;

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let positions = [14, 15, 16, 17, 18, 19, 20, 21]

  const horseRace = () => {
    for(let i = 1; i <= numberOfHorse; ++i){
      let horse = {
        name: i,
        position: positions[Math.floor(Math.random() * positions.length)],
        1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0
      }
      let position = positions.indexOf(horse.position)
      positions.splice(position, 1);
      listOfHorse.push(horse);

      let total = 0;
      function recur(){
        let random = randomInteger(1, 12);
        if(horse[random]<3){
          horse[random]= horse[random] + 1;
          total = total + 1;
        }
        if(horse.position>total){
          recur();
        }
      }
      recur();
    }

    return <NewGrid listOfHorse={listOfHorse}/>
  }

  return (
    <div className="App">
      {horseRace()}
    </div>
  );
}

export default App;
