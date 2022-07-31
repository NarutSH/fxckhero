import React from "react";
import CardLgEl from "../elements/CardLgEl";
import CardSmEl from "../elements/CardSmEl";
import StatsEl from "../elements/StatsEl";

const Statistics = () => {
  const styles = {
    benefitContainer: {
      maxWidth: "800px",
      margin: "0 auto",
    },
  };

  const displayStats = (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col">
        <StatsEl title="3,500" detail="SUPPLY" />
      </div>
      <div className="col">
        <StatsEl title="200+" detail="TRAITS" />
      </div>
      <div className="col">
        <StatsEl title="0 ETH" detail="PRICE" />
      </div>
      <div className="col">
        <StatsEl title="ERC-721" detail="TECH" />
      </div>
    </div>
  );

  const displayUtils = (
    <div className="py-4 text-center">
      <h1 className="text-title text-white">FXCK BENEFITS</h1>

      <div style={styles.benefitContainer}>
        <div className="row g-2">
          <div className="col-lg-6">
            <CardLgEl
              imgPath="/assets/images/voc.png"
              detail="Access to the V.O.C"
            />
          </div>
          <div className="col-lg-6">
            <CardSmEl
              imgPath="/assets/images/utility.png"
              detail="Utility NFT that unlocks while held"
            />
            <CardSmEl
              imgPath="/assets/images/own-ip.png"
              detail="You own the IP"
            />
            <CardSmEl
              imgPath="/assets/images/fxh.png"
              detail="WL and Free MintsFor Fxcking Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black py-4">
      <div className="container">
        {displayStats}
        {displayUtils}
      </div>
    </div>
  );
};

export default Statistics;
