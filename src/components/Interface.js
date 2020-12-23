import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Fader from "./Fader";

import { PowerButton, MouseButton } from "./SVGs.js";

function Interface(props) {
  const [buttonFill, handleButtonFill] = useState({ background: null });
  const [buttonFill1, handleButtonFill1] = useState({ background: null });
  const [buttonFill2, handleButtonFill2] = useState({ background: null });

  const changeButtonFill = () => {
    props.handleBeginAuto();

    if (buttonFill.background === null) {
      handleButtonFill({ background: "rgb(247, 140, 0)", color: "grey" });
    } else {
      handleButtonFill({ background: null });
    }
  };

  const changeButtonFill1 = () => {
    props.handleMouseGenerate();

    if (buttonFill1.background === null) {
      handleButtonFill1({ background: "white", color: "grey" });
    } else {
      handleButtonFill1({ background: null });
    }
  };

  const changeButtonFill2 = () => {
    props.handleBeginAuto1();

    if (buttonFill2.background === null) {
      handleButtonFill2({ background: "rgb(111, 173, 255)", color: "grey", fill: 'white' });
    } else {
      handleButtonFill2({ background: null });
    }
  };
  return (
    <>
      <div className="ml-3 mt-5 ">
        <div className="mb-3">
          <button
            className="button1"
            style={buttonFill1}
            onClick={() => changeButtonFill1()}
          >
            <MouseButton/>
          </button>
          <button
            className="button2"
            style={buttonFill}
            onClick={() => changeButtonFill()}
          >
            <PowerButton />
          </button>
          <button
            className="button3"
            style={buttonFill2}
            onClick={() => changeButtonFill2()}
          >
            <PowerButton/>
          </button>
        </div>
        <Fader
          handleTitle="Create Rate"
          handleInputId="createOutput"
          handleChangeAmount={props.handleChangeRate}
          handleMax="200"
          handleMin="5"
          handleDefaultValue="170"
          handleDefaultDisplayValue="170"
          sliderName="slider3"
        />
        <Fader
          handleTitle="Gravitation"
          handleInputId="gravityOutput"
          handleChangeAmount={props.handleChangeGravityAmount}
          handleMax="10000"
          handleMin="0"
          handleDefaultValue="10000"
          handleDefaultDisplayValue="100"
          sliderName="slider3"
        />
        <br />
        <br />
        {/* Blue Generator */}
        <Fader
          handleTitle="Generator X"
          handleInputId="generatorXOutput"
          handleChangeAmount={props.handleChangeGenXAmount}
          handleMax="1000"
          handleMin="0"
          handleDefaultValue="500"
          handleDefaultDisplayValue="50%"
          sliderName="slider2"
        />
        {/* Blue Generator */}
        <Fader
          handleTitle="Generator Y"
          handleInputId="generatorYOutput"
          handleChangeAmount={props.handleChangeGenYAmount}
          handleMax="1000"
          handleMin="0"
          handleDefaultValue="500"
          handleDefaultDisplayValue="50%"
          sliderName="slider2"
        />
        {/* Blue Generator */}
        <Fader
          handleTitle="Generator X"
          handleInputId="generatorXOutput1"
          handleChangeAmount={props.handleChangeGenXAmount1}
          handleMax="1000"
          handleMin="0"
          handleDefaultValue="500"
          handleDefaultDisplayValue="50%"
          sliderName="slider1"
        />
        {/* Blue Generator */}
        <Fader
          handleTitle="Generator Y"
          handleInputId="generatorYOutput1"
          handleChangeAmount={props.handleChangeGenYAmount1}
          handleMax="1000"
          handleMin="0"
          handleDefaultValue="800"
          handleDefaultDisplayValue="20%"
          sliderName="slider1"
        />
        <Fader
          handleTitle="1 Barrier Tilt"
          handleInputId="barrier1Tilt"
          handleChangeAmount={props.handleBarrier1Tilt}
          handleMax="1000"
          handleMin="-1000"
          handleDefaultValue="125"
          handleDefaultDisplayValue="125"
          sliderName="slider3"
        />
        <Fader
          handleTitle="2 Barrier Tilt"
          handleInputId="barrier2Tilt"
          handleChangeAmount={props.handleBarrier2Tilt}
          handleMax="1000"
          handleMin="-1000"
          handleDefaultValue="-250"
          handleDefaultDisplayValue="-250"
          sliderName="slider3"
        />
        <br />
        <br />
        <Fader
          handleTitle="Osc Type"
          handleInputId="oscType"
          handleChangeAmount={props.handleChangeOscType1}
          handleMax="3"
          handleMin="0"
          handleDefaultValue="0"
          handleDefaultDisplayValue="sine"
          sliderName="slider2"
        />
        <Fader
          handleTitle="Osc Type"
          handleInputId="oscType1"
          handleChangeAmount={props.handleChangeOscType2}
          handleMax="3"
          handleMin="0"
          handleDefaultValue="0"
          handleDefaultDisplayValue="sine"
          sliderName="slider1"
        />
        <Fader
          handleTitle="Hall Amount"
          handleInputId="reverb"
          handleChangeAmount={props.handleReverb}
          handleMax="100"
          handleMin="0"
          handleDefaultValue="70"
          handleDefaultDisplayValue="70"
          sliderName="slider3"
        />
        <Fader
          handleTitle="Echo Amount"
          handleInputId="delayWet"
          handleChangeAmount={props.handleDelayAmount}
          handleMax="100"
          handleMin="0"
          handleDefaultValue="30"
          handleDefaultDisplayValue="30"
          sliderName="slider3"
        />
        <Fader
          handleTitle="Filter Freq."
          handleInputId="filterFreq"
          handleChangeAmount={props.handleFreqAmount}
          handleMax="10000"
          handleMin="20"
          handleDefaultValue="5000"
          handleDefaultDisplayValue="5000hz"
          sliderName="slider3"
        />
        <Fader
          handleTitle="Chord"
          handleInputId="chordName"
          handleChangeAmount={props.handleChord}
          handleMax="3"
          handleMin="0"
          handleDefaultValue="0"
          handleDefaultDisplayValue="Pentatonic"
          sliderName="slider3"
        />
        <br/><br/>
      </div>
    </>
  );
}

Interface.propTypes = {
  handleChangeGravityAmount: PropTypes.func,
  handleChangeGenXAmount: PropTypes.func,
  handleChangeGenYAmount: PropTypes.func,
  handleChangeGenXAmount1: PropTypes.func,
  handleChangeGenYAmount1: PropTypes.func,
  handleBeginAuto: PropTypes.func,
  handleBeginAuto1: PropTypes.func,
  handleMouseGenerate: PropTypes.func,
  buttonCSS: PropTypes.object,
  handleChangeOscType1: PropTypes.func,
  handleReverb: PropTypes.func,
  handleDelayAmount: PropTypes.func,
  handleFreqAmount: PropTypes.func,
  handleChord: PropTypes.func,
  handleBarrier1Tilt: PropTypes.func,
  handleBarrier2Tilt: PropTypes.func
};

export default Interface;
