// importamos pharse.json.
// y las otras las otras 2 componentes.

import phrases from './utils/phrases.json';
import Quote from './components/Quote';
import BtnQuote from './components/BtnQuote';
import { useState } from 'react';
import getRandomElement from './utils/getRandomElemtArray';
import './App.css';
import './index.css';

function App() {

  const pharseRandom = getRandomElement(phrases)
  // reutilizamos el codigo para que eligiera
  // la imagen ramdon.
  const numberRamdom = getRandomElement([1,2,3,4])
  const [quote, setQuote] = useState(pharseRandom)
  const [numberBg ,setNumberBg] = useState(numberRamdom)
  const bgStyle = {
    // importando la imagen desde public.
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }
  // console.log(quote);

  // const imgStyle = {
  //   backgroundImage: `url(/rectangle1.svg)`
  // }
 
  
  getRandomElement
  
  return (


      <div className='container' style={bgStyle}>
        {/* style recibe un objet */}
        <h1 className='container_title'>Fortune Cookies</h1>
        <Quote phrase={quote}/>
        <BtnQuote 
        setQuote={setQuote}
          phrases={phrases}
          setNumberBg={setNumberBg}

        />
        
      </div>
    
  )
}

export default App
