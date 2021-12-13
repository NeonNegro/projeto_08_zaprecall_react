import { useState } from 'react';
import  './style.css'
import arrow from '../../assets/arrow.png'

const next = arrow;




function turnCard(setTurnedUp){
    setTurnedUp('back');
}


//export default function  Card({answer, question, setTurnedUp, position, setPosition, last}){
export default function  Card({card, last, setActualPosition}){      
    const [turnedUp, setTurnedUp] = useState('front');
    //const [question, setQuestion] = useState ('O que é JSX?');
    //const [position, setPosition] = useState (1);
    //const [last, setLast] = useState (8);
    //const [answer, setAnswer] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.');
    
    return (
        <div className='card'>
            <div className={`card-inner ${turnedUp !== 'front'?'turned' : ''}`}>
                <FrontCard setTurnedUp={setTurnedUp} question={card.question} position={card.position} last={last} />
                <BackCard question={card.question} position={card.position} last={last} answer={card.answer} setActualPosition= {setActualPosition}/>
            </div>
        </div>
    )
}



function FrontCard({setTurnedUp, question, position, last}){
    return (
        <div className='card-front'>
            <span className='progress'>{position} / {last}</span>
            <span className='question'>{question} </span>
            <img className='turnCard' onClick={() => turnCard(setTurnedUp)} src={arrow}></img>
        </div>
    )
}

function BackCard({question, position, last, answer, setActualPosition}){

    const results = [{eng:'now', pt:'Aprendi agora'},
    {eng:'remember-cant', pt:'Não lembrei'},
    {eng:'remember-hard', pt:'Lembrei com esforço'},
    {eng:'remember-zap', pt:'Zap!'}];

    const[result, setResult] = useState('none');

    return (
        <div className={`card-back ${(result!=='none') && result.type}`}>
            <span className='title'>{question}</span>
            <span className='progress'>{position} / {last}</span>
            <span className='answer'>{answer} </span>
            {result === 'none'? (
            <>
                <Results results= {results} setResult={setResult} />
            </>)
            : (
            <>
                <img src={next} onClick={(position) => setActualPosition(position+1)}></img>
            </>
            )}
        </div>
    )
}


function Results({results, setResult}){
    return (
        <div className='results'>
            {results.map(r => <Result type={r.eng} setResult={setResult}>{r.pt} </Result>)}
        </div>
    )
}

function Result({type, children, setResult}){
    return <div onClick={() => setResult({type})} className={`result ${type}`}><span>{children}</span></div>
}




