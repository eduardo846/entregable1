import { useState } from 'react'
import reactLogo from './assets/react.svg'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'
import './App.css'


function App() {

  /*const sentence  = (quotes[0].quote)
  const author = (quotes[0].author)*/

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changeSentences = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
      setIndex(randomIndex);
    };

    const sentence = (quotes[index].quote)
    const author = (quotes[index].author)

    const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F']
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`

  /*console.log(text1)*/
  return (
    <div className="App">
      <QuoteBox sentence={sentence} author = {author} changeSentences = {changeSentences}/>
    </div>
  )
}

export default App
