import logo from '../../assets/logo.png'
import next from '../../assets/next.png'

import './style.css'



export default function Begin({toFlashCard}){
    return (
        <section className='begin'>
            <img className='logo' src={logo}></img>
            <div className="button" onClick={()=> toFlashCard()}>
                <div className='container'> 
                    <span> Praticar React &nbsp;</span> 
                    <img src={next}></img>
                </div>
            </div>
        </section>  
    )
}