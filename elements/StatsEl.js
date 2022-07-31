import React from "react";

const StatsEl = ({ title, detail }) => {
  const styles = {
    title: {
      color: "#f40000",
      fontSize: "clamp(50px , 5vw ,80px)",
    },
    detail: {
      color: "white",
      fontSize: "clamp(30px , 3vw ,40px)",
    },
  };

  return (
    <div className="text-center">
      <div style={styles.title}>{title}</div>
      <div style={styles.detail}>{detail}</div>
    </div>
  );
};

export default StatsEl;
