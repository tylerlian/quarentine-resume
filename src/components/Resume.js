import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Resume.css';
import Background from '../resume1.jpg';

function Resume() {
  return (
    <div className='resume-container' style={{backgroundImage: `url(${Background})`, textAlign: `center`}}>
      <h1>QUARANTINE RESUME</h1>
      <p>Made with React!</p>
      <div className='resume-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('cool')}
        >
          DOWNLOAD RESUME
        </Button>
      </div>
    </div>
  );
}

export default Resume;