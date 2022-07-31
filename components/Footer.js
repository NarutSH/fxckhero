import React from "react";

const Footer = () => {
  const styles = {
    container: {
      backgroundColor: "#f40000",
    },
  };

  return (
    <div style={styles.container} className="p-4">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="text-white text-title">FXCK FACE HERO</h1>
          <small className="text-white">&copy; Copyright 2022</small>

          <ul className="list-unstyled mt-3">
            <li className="">
              <a href="#" target="_blank" className="text-white a-unstyled">
                TWITTER
              </a>
            </li>
            <li className="">
              <a href="#" target="_blank" className="text-white a-unstyled">
                DISCORD
              </a>
            </li>
            <li className="">
              <a href="#" target="_blank" className="text-white a-unstyled">
                OPENSEA
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src="/assets/images/gas.png" alt="gas" width={200} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
