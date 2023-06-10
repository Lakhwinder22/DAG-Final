import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
} from './ServicesElements';
import Sharman1 from '../../images/Sharman1.jpg';
import chetan from '../../images/chetan.jpg';
import Vishwanathan from '../../images/Vishwanathan.jpeg';

const Trusted = () => {
  return (
    <ServicesContainer className="trusted">
      <ServicesH1>Trusted Voices</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <a target="_self" href="https://www.instagram.com/tv/CZHnC3UBAHm/">
            <img
              src={Sharman1} height={240} width={250}
              alt=""
            />
          </a>
          <ServicesH2>Mr. Sharman Joshi </ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <a target="_self" href="https://www.instagram.com/tv/CZCUW4Bh31A/">
            <img
              src={chetan} height={240}  width={250}
              alt=""
            />
          </a>
          <ServicesH2>Mr. Chetan Bhagat</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <a target="_self" href="https://www.instagram.com/tv/CaKpGj1JOUW/">
            <img
              src= {Vishwanathan} height={240} width={250}
              alt=""
            />
          </a>
          <ServicesH2>Mr. Vishwanathan Anand</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Trusted;
