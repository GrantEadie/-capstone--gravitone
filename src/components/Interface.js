import React from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
import Fader from "./Fader";

function Interface(props) {

const [buttonFill, handleButtonFill] = useState({background: null})
const [buttonFill1, handleButtonFill1] = useState({background: null})

const changeButtonFill = () => {
  props.handleBeginAuto()

  if (buttonFill.background === null) {
    handleButtonFill({background: 'white', color: 'grey'});
  } else {
    handleButtonFill({background: null})
  }
}

const changeButtonFill1 = () => {
  props.handleMouseGenerate()

  if(buttonFill1.background === null) {
    handleButtonFill1({background: 'white', color: 'grey'});
  } else {
    handleButtonFill1({background: null})
  }
}

  return (
    <>
      <div className="ml-3 mt-5">
        <div className="mb-3">
        <button className="button1" style={buttonFill} onClick={()=>changeButtonFill()}>
          auto
        </button>
        <button className="button1" style={buttonFill1} onClick={()=>changeButtonFill1()}>
          mouse
        </button>
        </div>
        <Fader
          handleTitle="Create Rate"
          handleInputId="createOutput"
          handleChangeAmount={props.handleChangeRate}
          handleMax="200"
          handleMin="5"
          handleDefaultValue="40"
          handleDefaultDisplayValue="40"
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
  handleMouseGenerate: PropTypes.func,
  buttonCSS: PropTypes.object
};

export default Interface;
