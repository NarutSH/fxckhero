import React from "react";

const Voc = () => {
  const styles = {
    imgContainer: {
      borderRadius: "30px",
      backgroundColor: "#FFD210",
      textAlign: "center",
    },
  };

  return (
    <div className="py-4">
      <div className="container ">
        <h1 className="text-title text-center">WHAT THE FXCK IS V.O.C ?</h1>
        <p className="text-detail">
          A startup company with a passion for creating derivative art via
          physical and digital productsthat connect to the NFT Space. We will
          either purchase the NFT or collaborate with famous holders,and it will
          be called "Multi-NFT brand collective company."
        </p>

        <div style={styles.imgContainer}>
          <img
            src="/assets/images/voc-foil.png"
            alt="voc-foil"
            className="w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Voc;
