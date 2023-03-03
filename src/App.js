import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='general-container'>
        <input type='search' className='search-bar' placeholder='Search for suggestions...'/>
      </div>
      <div className='general-container'>
        <div className='suggestions'>
          <p className='suggestion'>Hi, this is a suggestion.</p>
          <p className='suggestion'>Hi, this is another suggestion.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
