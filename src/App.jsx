import { useState } from 'react'
import Flashcard from './components/Flashcard'
import data from './data/data'
import './App.css'

const randomizedQuestions = shuffle(data)

function App() {
  const [cardNumber, setCardNumber] = useState(0)
  return (
    <>
      <h1><img src="/images/js.png" alt="js-icon" />JavaScript Knowledge Test</h1>
      <h2>Show everyone you have a foundational knowledge of Javascript concepts!</h2>
      <h3>Number of cards: {data.length} --- Current Card: {cardNumber + 1}</h3>
      <Flashcard question={randomizedQuestions[cardNumber]['question']} answer={randomizedQuestions[cardNumber]['answer']}
      cardNumber={cardNumber} setCardNumber={setCardNumber} dataLength={randomizedQuestions.length}/>
    </>
  )
}

/* credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default App