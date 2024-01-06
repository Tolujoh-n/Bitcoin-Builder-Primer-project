/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import heroImage from "../../assets/img/update-image.png";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div id="aboutmore" className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <Image
                id="aboutimg"
                src={heroImage}
                alt=""
                className="img-fluid hidden sm:block"
                objectFit="cover"
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>What is this for?</h3>
              <p>
                When a change occurs—like when an NFT's metadata gets updated— wallets and other services won't automatically know about these changes. They become aware only after you use this tool to publish the notification message. Once that's out in the ether, SIP-19-aware services catch it and refresh the metadata accordingly. This is key for scenarios ranging from displaying updated artwork to keeping in-game assets fresh. The spec also provides different update modes: 'standard', 'frozen', or 'dynamic', giving you some real control over how frequently metadata can be altered.
              </p>
              <p>
                So here's the deal: We've implemented the SIP-19 spec on this site, and if you're not already in the know, it's all about metadata updates for Stacks tokens. This web app emits notifications that metadata has changed for either fungible or non-fungible tokens.
              </p>
              <p>
                So, no fluff here: If you want to keep tabs on metadata changes in a really effective way, SIP-19 compliance is where it's at.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
