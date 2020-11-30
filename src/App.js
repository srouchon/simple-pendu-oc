import { Component } from 'react';
import './App.css';

const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
const WORD = 'OPENCLASSROOMS';

class App extends Component {
  state = {
    word: WORD.split(''),
    letters: LETTERS,
    usedLetters: [],
  };
  
  //Arrow fx for binding
  handleClick = (letter) => {
    this.setState({usedLetters: [...this.state.usedLetters, letter]})
    // if (this.state.word.includes(letter)) {
    //   console.log('included letter')
    // } else {
    //   console.log('letter not included into word')
    // }
  }
  
  displayLetters() {
    const lettersTags = LETTERS.map(letter => {
      return (
        <li className='letter' key={letter} onClick={() => this.handleClick(letter)}>
          {letter}
        </li>
      );
    });
    return lettersTags;
  };
  
  displayWord() {
    const { word, usedLetters } = this.state;
    const hiddenWord = word.map((letter, index) => {
      if (usedLetters.includes(letter)) {
        return <p className='letter' key={index}>{letter}</p>;
      }
      return <p className='symbol' key={index}>__</p>
    });
    return hiddenWord;
  };
  
  render() {
    
    return (
      <div className="App">
        <div className='letters'>{this.state.usedLetters}</div>
        <div className='letters' key='letters'>{this.displayLetters()}</div>
        <div className='word' key='word'>{this.displayWord()}</div>
      </div>
    );
  };
}

export default App;