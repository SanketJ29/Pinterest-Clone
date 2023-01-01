import React, { useEffect, useState } from 'react';
import './index.scss';

const About = () => {
  const [nowDate, setNowDate] = useState('');
  const getNow = () => {
    const date = new Date().toUTCString();
    const newDateFormat = date.split(' ').slice(0, 4).join(' ');
    setNowDate(newDateFormat);
  };

  useEffect(() => {
    getNow();
  }, []);
  return (
    <div className='heading'>
      <h3>{nowDate}</h3>
      <h1>Hello! My name is Sanket Jaiswal</h1>
      <br></br>
      <p>This is a Pinterest Clone created using React. It uses "Unsplash API" to generate images for this app.</p>
    </div>
  );
};

export default About;
