import React from "react";

const LearnMore = () => {
  const styles = {
    button: {
      borderRadius: "25px",
      backgroundColor: "#00ff00",
      color: "white",
      fontSize: "28px",
    },
  };

  const displayContent = (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src="/assets/images/card.png" alt="card" className="w-100" />
        </div>
        <div className="col-lg-6 py-4 ">
          <h1 className="text-white text-title">WHAT THE FXCK IS THIS?</h1>
          <p className="text-white text-detail">
            A collection of 3,456 built with utility PFPs. This NFT Startup
            project is centered around Creativity, Collaboration, Art and Brand.
            [ ARTIVERSE ] FFH will have exclusive access to the private
            membership "V.O.C" project and additional benefits the longer you
            hold them.
          </p>

          <button className="btn" style={styles.button}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  return <div className="bg-black py-4">{displayContent}</div>;
};

export default LearnMore;
