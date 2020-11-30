import { Component } from 'react';
import './App.css';

const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
const WORD = 'OPENCLASSROOMS';

class App extends Component {
  state = {
    word: WORD,
    letters: LETTERS,
    usedLetters: ['O','E'],
  };

  displayLetters() {
    const { word, usedLetters } = this.state;
    const wordLetters = word.split('');
    const hiddenWord = wordLetters.map(letter => {
      if (usedLetters.includes(letter)) {
      return <p className='letter'>{letter}</p>;
      }
      return <p className='symbol'>__</p>
    });
    return hiddenWord;
  };
  
  render() {
    return (
      <div className="App">
        <div className='letters'>
          {this.displayLetters()}
        </div>
      </div>
    );
  };
}

export default App;