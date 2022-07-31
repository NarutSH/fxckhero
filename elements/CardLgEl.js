import React from "react";

const CardLgEl = ({ imgPath, detail }) => {
  const styles = {
    card: {
      borderRadius: "30px",
    },
  };

  return (
    <div className="card bg-dark" style={styles.card}>
      <div className="card-body p-5">
        <img src={imgPath} alt="voc" className="w-100 mb-4" />
        <div className="text-detail text-white">{detail}</div>
      </div>
    </div>
  );
};

export default CardLgEl;
