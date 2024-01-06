/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Services = () => {
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container">
        <div className="section-title">
          <h2>Metadata Updater</h2>
          <p>How It Works</p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
          >
            <div className="card">

              <div className="card-icon">
                <i className="ri-brush-4-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Select Token Type</a></h5>
                <p className="card-text">
                  Start by choosing the token type you're looking to keep tabs on. Currently we provide support for SIP-9 and SIP-10 tokens.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
          >
            <div className="card">

              <div className="card-icon">
                <i className="ri-calendar-check-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Enter Contract Identifier</a></h5>
                <p className="card-text">
                  Next, you'll need to plug in the contract identifier tied to your selected token. It let's the wallet know which token to run a update for.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
          >
            <div className="card">

              <div className="card-icon">
                <i className="ri-movie-2-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Specify Token IDs (NFTs only)</a></h5>
                <p className="card-text">
                  If you want updates for specific instances of your token- provide the Token IDs, seperated by commas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
