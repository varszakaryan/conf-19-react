import React from 'react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

import About from './About/About';
import Team from './Team/Team';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Footer from './Footer/Footer';
import Speakers from './Speakers/Speakers'; 

import './App.scss';

const App = () => {
  const position = useWindowScrollPosition({
    throttle: 0,
  });
  const backgroundOffset = 0.4 * position.y;

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Speakers />
      <Team />
      <Footer />
     </div>
  );
};

export default App;
