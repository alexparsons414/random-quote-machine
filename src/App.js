import './App.scss';
import QuoteApi from './apis/QuoteApi';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { setQuote } from './features/quotes/quoteSlice';


function App() {
  const [quoteData, setQuoteData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    QuoteApi.get().then(response => {
      setQuoteData(response.data[0]);
    });
    dispatch(setQuote(quoteData));
  }, []);

  const handleClick = () => {
    QuoteApi.get().then(response => {
      setQuoteData(response.data[0]);
    });
    dispatch(setQuote(quoteData));
  }

  return (
    <div className="App" id='quote-box'>
      <p id='text'>"{quoteData.quote}</p>
      <p id='author'>-{quoteData.author}</p>
      <button id='new-quote' onClick={handleClick}>New quote</button>
      <div id='links'>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text="${quoteData.quote}"%0A%0A-${quoteData.author}`} target='_blank'><FontAwesomeIcon icon={faXTwitter} size='lg'/></a>
      </div>
    </div>
  );
}

export default App;
