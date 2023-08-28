
import getRandomElement from '../utils/getRandomElemtArray'; 

const BtnQuote = ({setQuote, phrases, setNumberBg}) => {

  const handleRandomPhrase = ( ) =>{
    setQuote(getRandomElement(phrases))
    setNumberBg(getRandomElement([1, 2, 3, 4]));
  }
  return (
    <button className='container_btn' onClick={handleRandomPhrase}>Other phrase 🥐</button>
  )
}

export default BtnQuote