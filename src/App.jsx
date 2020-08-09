import React from 'react';


//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
  //      </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
  //        Learn React
//        </a>
//      </header>
  //  </div>
//  );
//}

//import ReactGA from 'react-ga';

import Navbar from './nav/Navbar';
import Landing from './landing/Landing';
import About from './about/About';
//import Schedule from './schedule/Schedule';
import FAQs from './faqs/FAQs';
//import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

import './assets/css/app.css';
import './assets/css/fontello.css';

const sections = [
  {
    title: 'Home',
    id: 'landing',
    titleColor: 'black',
    Component: Landing
  },
  {
    title: 'About',
    id: 'about',
    titleColor: '#9BAAD7',
    Component: About
  },
  //{
  //  title: 'Schedule',
  //  id: 'schedule',
  //  titleColor: '#8D18C5',
  //  Component: Schedule
//  },
  {
    title: 'FAQs',
    id: 'faqs',
    titleColor: '#2625C8',
    Component: FAQs
  }//,
  //{
//    title: 'Sponsors',
//    id: 'sponsors',
//    titleColor: '#3398CC',
//    Component: Sponsors
//  }
];

export default () => (
  <React.Fragment>
    <Navbar navItems={sections} />
    {sections.map(({ title, id, titleColor, Component }) => (
      <Component id={id} key={id} titleColor={titleColor} />
    ))}
    <Footer />
  </React.Fragment>
);
