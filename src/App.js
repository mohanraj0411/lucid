import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import NavHeader from './header/header'
import Footer from './footer/footer'
import HomeCarousel from './homeCarousel/homeCarousel'
import Features from './overview/features'
import TwoColumn from './overview/twocolum'
import TwoColumnLeftImg from './overview/twocolum-leftImg'
import CarouselStory from './carouselStory/carouselStory'
import DownloadContainer from './downloadContainer/downloadContainer'
import PricingPlan from './PricingPlan/PricingPlan'
import Contact from './contact/contact'

import './App.css';

const App = () => (
  <section>
    <header><NavHeader /></header>
    <Container fluid as="main"><Row><HomeCarousel /></Row></Container>
    <Container fluid as="section" className='section'><Features /></Container>
    <Container fluid as="section" className='section'><TwoColumn /></Container>
    <Container fluid as="section" className='section'><TwoColumnLeftImg /></Container>
    <Container fluid as="section"><CarouselStory /></Container>
    <Container fluid as="section" className='section-dark'><DownloadContainer /></Container>
    <Container fluid as="section" className='section'><PricingPlan /></Container>
    <section className='section-gray'><Contact /></section>
    <footer><Footer /></footer>
  </section>
);

export default App;
