import React from "react";

const CardSmEl = ({ imgPath, detail }) => {
  const styles = {
    card: {
      borderRadius: "30px",
      minHeight: "100px",
    },
    imgContainer: {
      width: "100%",
      objectFit: "contain",
      marginRight: "20px",
    },
  };

  return (
    <div className="card bg-dark mb-2" style={styles.card}>
      <div className="card-body">
        <div className="row ">
          <div className="col-3 col-lg-4 d-flex align-items-center">
            <img
              src={imgPath}
              alt="voc"
              className=""
              style={styles.imgContainer}
            />
          </div>
          <div className="col-9 col-lg-8 d-flex align-items-center">
            <div className="text-desc text-white text-start">{detail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSmEl;
