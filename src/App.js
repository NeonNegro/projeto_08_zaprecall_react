import Begin from './components/Begin'
import FlashCard from './components/FlashCard';
import { useState } from 'react'  

export default function App() {

  const [screen, setScreen] = useState('Begin');

  function toFlashCard(){ setScreen('FlashCard')}
  function toBegin(){ setScreen('Begin')}

  // function changeScreen(screen){
  //   setScreen(screen);
  // }

  let screenNow;
  if(screen === 'Begin') screenNow =  <Begin toFlashCard={toFlashCard}/>
  if(screen === 'FlashCard') screenNow =  <FlashCard toBegin={toBegin}/>

  return screenNow;
}



