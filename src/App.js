import Begin from './components/Begin'
import FlashCard from './components/FlashCard'
import { useState } from 'react'  
import {deck} from './assets/deck.js'

export default function App() {

  const [screen, setScreen] = useState('Begin');

  function toFlashCard(){ setScreen('FlashCard')}
  function toBegin(){ setScreen('Begin')}

  let screenNow;
  if(screen === 'Begin') screenNow =  <Begin toFlashCard={toFlashCard}/>
  if(screen === 'FlashCard') screenNow =  <FlashCard deck={deck} toBegin={toBegin}/>

  return screenNow;
}



