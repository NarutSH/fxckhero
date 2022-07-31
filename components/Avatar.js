import React from "react";

const Avatar = () => {
  const styles = {
    avatarContainer: {
      maxWidth: "800px",
      margin: "auto",
    },
  };

  return (
    <div className="bg-black py-4">
      <div className="container text-center">
        <h1 className="text-title text-white">FXKING HERO SNEAK PEEK</h1>
        <div
          className="row row-cols-1 row-cols-lg-3 g-2"
          style={styles.avatarContainer}
        >
          <img src="/assets/images/avatar1.png" alt="avatar1" className="col" />
          <img src="/assets/images/avatar2.png" alt="avatar2" className="col" />
          <img src="/assets/images/avatar3.png" alt="avatar3" className="col" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
