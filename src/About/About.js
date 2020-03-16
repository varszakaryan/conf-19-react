import React from 'react';

import Title, { TitleAccent } from '../_components/Title';
import Description from '../_components/Description';

import './About.scss';

const About = () => (
  <section id="About" className="About">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="SectionBox">
            <Title>
              What is
              {' '}
              <TitleAccent color="primary1">
                Tech Events Armenia
              </TitleAccent>
            </Title>
            <Description>
              Tech Events Armenia is a tech events management company that is behind the biggest technology conferences in Armenia and the region.
            </Description>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="IllustrationContainer">
            <img
              className="Illustration"
              src="./about-conf-image.png"
              alt="About Tech Events Armenia"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
