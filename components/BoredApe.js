import React from "react";

const BoredApe = () => {
  const styles = {
    container: {
      backgroundColor: "#f40000",
    },
  };

  return (
    <div style={styles.container} className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex align-items-center">
            <div>
              <h1 className="text-title text-white mb-3">
                BORED APE CARD CLUB
              </h1>
              <p className="text-detail text-white">
                PFPs Utility NFT collection based on IP rights authorized by
                BAYC holders #5216, #8433 generative project of X99 unique NFTs.
                owner can then claim a physical Premium Card Set Design by
                fxcking amazing artist group."
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <img src="/assets/images/mascot.png" alt="ape" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoredApe;
