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

// Produit une représentation textuelle de l’état de la partie,
// chaque lettre non découverte étant représentée par un _underscore_.
// (CSS assurera de l’espacement entre les lettres pour mieux visualiser le tout).
// function computeDisplay(phrase, usedLetters) {
  // return phrase.replace(/\w/g,
    // (letter) => (usedLetters.has(letter) ? letter : '_')  )}...