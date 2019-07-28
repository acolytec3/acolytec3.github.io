import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import Repository from '../components/Repository';
import Contributions from '../components/Contributions';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
             <Repository />
        </div>
    </section>
    <section id="activity" className="projects-section bg-light">
      <div className="container">
             <Contributions />
        </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
