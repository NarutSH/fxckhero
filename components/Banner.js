import React from "react";

const Banner = () => {
  const styles = {
    bannerImg: {
      width: "25%",
      maxWidth: "250px",
    },
    bannerText: {
      width: "50%",
      maxWidth: "500px",
    },
  };

  const displayBtnGroup = (
    <div className="d-flex justify-content-center py-4 flex-wrap">
      <div>
        <button className="btn-social">TWITTER</button>
        <button className="btn-social">DISCORD</button>
      </div>
      <div>
        <button className="btn-social">OPENSEA</button>
        <button className="btn-social">LOOKRARE</button>
      </div>
    </div>
  );

  const displayBanner = (
    <div className="text-center position-relative">
      <img
        src="/assets/images/banner-text.png"
        alt="fxcky*u"
        style={styles.bannerText}
      />
      <img
        src="/assets/images/banner-img.png"
        alt="fxcky*u"
        style={styles.bannerImg}
        className="position-absolute start-50 top-50 translate-middle"
      />
    </div>
  );

  const displayMarquee = (
    <div>
      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-content">
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
            * FXCK FACE HERO * FXCK FACE HERO * FXCK FACE HERO
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black py-4">
      {displayBtnGroup}
      {displayBanner}
      {displayMarquee}
    </div>
  );
};

export default Banner;
