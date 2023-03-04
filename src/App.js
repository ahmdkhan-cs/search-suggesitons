import { useState, useEffect } from 'react';
import { getSuggestions } from './services/OpenaiService';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setSuggestions([]);
  }

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      const response = await getSuggestions(search);
      setSuggestions(response);

    }, 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <div className='container'>
      <div className='general-container'>
        <input type='search' className='search-bar' placeholder='Search for suggestions...' value={search} onChange={searchHandler}/>
      </div>
      <div className='general-container'>
        <div className='suggestions'>
          {suggestions.map((suggestion, index) => (
            <p className='suggestion' key={`suggestion-${index}`}>{`${search} ${suggestion.text.split('\n')[0]}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
