import React from "react";

const InstructionModal = ({ visible, toggle }) => {
  return visible ? (
    <>
      <div className="modal-container">
        <div className="modal">
          <h2 style={{ float: "right", margin: "0" }} onClick={() => toggle()}>
            &times;
          </h2>
          <div className="font-alt" style={{ clear: "both", padding: "5px" }}>
            <h4 className="text-center">
              <u>How to play Curse of NEXT Academy?</u>
            </h4>
            <p>
              <strong>
                <u>Disclaimer!</u>
              </strong>
            </p>
            <p>
              This game was designed to be best enjoyed as an app on your phone!
            </p>
            <p>
              <strong>iOS</strong>: Open using Safari and "Add to Homescreen" in
              the share menu.
            </p>
            <p>
              <strong>Android</strong>: Open in Chrome and you will be prompted
              to install to homescreen.
            </p>
            <p>
              <u>Round 1:</u>
            </p>
            <p>
              Smash all the Pumpkins as fast as possible. Hint: They may need
              hitting more than once. <span role="img" aria-label="wink">😉</span>
            </p>
            <p>
              <u>Round 2:</u>
            </p>
            <p>
              Find all the matching pairs of cards. Click on the card to display
              what is beneath and find the matching partner. Fail to find the
              matching pair and both will flip back around.
            </p>
            <p>
              <u>Round 3:</u>
            </p>
            <p>
              Find the differences between the 2 images. There are 8 in total.
              Click on the differences on the lower image, if you find a correct
              difference it will be shown with a red circle.
            </p>
            <button
              onClick={() => toggle()}
              className="btn-instruction mx-auto d-block font-alt"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default InstructionModal;
