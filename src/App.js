import './App.css';
import React, { Component } from 'react';
import Nes from './Nes.jpg';
import { IntroState } from './Component/IntroState';






class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Nesrine Laabidi',
        bio: 'I create and maintain websites by writing code, troubleshooting and revising code.',
        imgSrc:Nes ,
        profession: 'Web Developer Student',
      },
      shows: false,
      
    };

  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show } = this.state;

    return (
      <div className='card'>
       <div className='imgBox'>
       <img src={person.imgSrc} alt={person.fullName} />
        </div>
        <div className='content'>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div className='details'>
            
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
            <IntroState/>
        
  
          </div>
        )}

        </div>
       
      </div>
    );
  }
}

export default App;
