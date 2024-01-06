import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">


        <div className="container">
          <div className="copyright">
            Built on Stacks{" "}
            <strong>
              <span style={{ color: "#0d6efd" }}>TMUN </span>
            </strong>
            2023 {/* . All Rights Reserved */}
          </div>
        </div>
      </footer>
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
