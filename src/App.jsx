import React from 'react';
import ReactGA from 'react-ga';

import Navbar from './nav/Navbar';
import Landing from './landing/Landing';
import About from './about/About';
import Schedule from './schedule/Schedule';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

import './assets/css/app.css';
import './assets/css/fontello.css';

const sections = [
  {
    title: 'Home',
    id: 'landing',
    titleColor: '#BF0400',
    Component: Landing
  },
  {
    title: 'About',
    id: 'about',
    titleColor: '#C20C82',
    Component: About
  },
  {
    title: 'Schedule',
    id: 'schedule',
    titleColor: '#8D18C5',
    Component: Schedule
  },
  {
    title: 'FAQs',
    id: 'faqs',
    titleColor: '#2625C8',
    Component: FAQs
  },
  {
    title: 'Sponsors',
    id: 'sponsors',
    titleColor: '#3398CC',
    Component: Sponsors
  }
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
