import React from "react";
import PropTypes from "prop-types";
import Fader from "./Fader";

function Interface(props) {
  return (
    <div className="ml-2 mt-2">
      {/* <p style={{ color: "GREY", marginBottom: "-10px" }}>
        GRAVITY{" "}
        <input
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            marginLeft: "10px",
          }}
          id="gravityOutput"
          type="text"
          defaultValue="100"
        ></input>
      </p>
      <div className="slidecontainer1">
        <input
          style={{ marginLeft: "-5px" }}
          defaultValue="10000"
          type="range"
          min="0"
          max="10000"
          onChange={props.handleChangeGravityAmount}
          className="slider1"
        />
      </div> */}
      <Fader
        handleTitle="Gravity"
        handleInputId="gravityOutput"
        handleChangeAmount={props.handleChangeGravityAmount}
        handleMax="10000"
        handleMin="0"
        handleDefaultValue="10000"
        handleDefaultDisplayValue="100"
      />
      <Fader
        handleTitle="Generator X"
        handleInputId="generatorXOutput"
        handleChangeAmount={props.handleChangeGenXAmount}
        handleMax="1000"
        handleMin="0"
        handleDefaultValue="500"
        handleDefaultDisplayValue="500"
      />
      <Fader
        handleTitle="Generator Y"
        handleInputId="generatorYOutput"
        handleChangeAmount={props.handleChangeGenYAmount}
        handleMax="1000"
        handleMin="0"
        handleDefaultValue="500"
        handleDefaultDisplayValue="500"
      />
      {/* <p style={{ color: "GREY", marginBottom: "-10px" }}>
        Generator Y:{" "}
        <input
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            marginLeft: "10px",
          }}
          id="generatorYOutput"
          type="text"
          defaultValue="500"
        ></input>
      </p>
      <div className="slidecontainer1">
        <input
          style={{ marginLeft: "-5px" }}
          defaultValue="500"
          type="range"
          min="0"
          max="1000"
          onChange={props.handleChangeGenYAmount}
          className="slider1"
        />
      </div> */}
      <div className=" bg-transparent">
        <button
          className="btn btn-outline-warning"
          onClick={props.handleBeginAuto}
        >
          auto
        </button>
        <button
          className="btn btn-outline-warning ml-3"
          onClick={props.handleMouseGenerate}
        >
          mouse
        </button>
      </div>
    </div>
  );
}

Interface.propTypes = {
  handleChangeGravityAmount: PropTypes.func,
  handleChangeGenXAmount: PropTypes.func,
  handleChangeGenYAmount: PropTypes.func,
  handleBeginAuto: PropTypes.func,
  handleMouseGenerate: PropTypes.func,
};

export default Interface;
