import React from "react";

const Faq = () => {
  const styles = {
    container: {
      backgroundColor: "#E5E4D3",
    },
    accordionQuestion: {
      backgroundColor: "#E5E4D3",
      borderTop: "1px solid black",
    },
    accordionAnswer: {
      backgroundColor: "rgba(229, 228, 211,0.5)",
      borderTop: "1px solid black",
    },
  };

  const displayAccordion = (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              style={styles.accordionQuestion}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Who’s the team behind Fxck Face Hero project?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={styles.accordionAnswer}>
              You don't fucking need to know this! You are going to mint it
              anyway.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              style={styles.accordionQuestion}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How big is the collection?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={styles.accordionAnswer}>
              What? You haven't read the information on the website!?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              style={styles.accordionQuestion}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What Inspired You To Make This?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={styles.accordionAnswer}>
              Because the market during this time Fxck!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              style={styles.accordionQuestion}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              what can I do with Fxck Face Hero?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={styles.accordionAnswer}>
              As long as you mint and hold it. You can do anything whatever you
              want and I don't care. But let me tell you, do something creative.
              Don't be boring
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              style={styles.accordionQuestion}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Collection Who would this collection be suitable for?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={styles.accordionAnswer}>
              Only suitable for cool people. Seriously if you like art, if you
              like seeing the physical products and of you like tangible
              collectibles, this is perfect. But if you come to be a flipper,
              it's up to you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={styles.container} className="py-4">
      <div className="container">
        <h1 className="mb-4">FAQ</h1>
        <div className="container">{displayAccordion}</div>
      </div>
    </div>
  );
};

export default Faq;
