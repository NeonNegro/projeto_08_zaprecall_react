import Header from "../Header"
import Card from "../Card"
import { useState } from "react/cjs/react.development";


export default function FlashCard({deck}){

    const [actualPosition, setActualPosition] = useState(1);
    const last = deck.length;


    const deckJSX = deck.map( c => <Card card ={c} setActualPosition={setActualPosition} last= {last}/>);

    return (
        <section className='table'>
            <Header />
            {deckJSX.find(c => c.props.card.position === actualPosition)}
        </section>
    )
}