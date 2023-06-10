import React from 'react';
import AppSlide from '../components/Home/AppSlide';
import Trusted from '../components/TrustedVoices/index';
import Mission from '../components/OurMission/Counter';
import Video from '../components/Video/Video';
import Aboutslider from '../components/Home/Aboutslider';
import { Product } from '../components/Product/Product';
import {Featured }from '../components/Featured/Featured';
import Media from '../components/Media/Media';
import Enquire from '../components/Enquire/index';

  const Home = () => {
  return (
    <>
      <AppSlide/>
      <Trusted />
      <Mission/>
      <Video/>
      <Aboutslider/>
      <Product/>
      <Featured/>
      <Media/>
      <Enquire />
    </>
  );
};


export default Home