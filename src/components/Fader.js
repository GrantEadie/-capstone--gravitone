import React from 'react'
import PropTypes from 'prop-types'

function Fader(props) {

  const { handleTitle, handleInputId, handleChangeAmount, handleMax, handleMin, handleDefaultValue, handleDefaultDisplayValue } = props

return (
  <>
  <p style={{ color: "GREY", marginBottom: "-10px" }}>
        {handleTitle}{" "}
        <input
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            marginLeft: "10px",
          }}
          id={handleInputId}
          type="text"
          defaultValue={handleDefaultDisplayValue}
        ></input>
      </p>
      <div className="slidecontainer1">
        <input
          style={{ marginLeft: "-5px" }}
          defaultValue={handleDefaultValue}
          type="range"
          min={handleMin}
          max={handleMax}
          onChange={handleChangeAmount}
          className="slider1"
        />
      </div>
  </>
)
}

Fader.propTypes = {
  handleTitle: PropTypes.string,
  handleInputId: PropTypes.string,
  handleChangeAmount: PropTypes.func,
  handleMax: PropTypes.number,
  handleMin: PropTypes.number,
  handleDefaultValue: PropTypes.number
}

export default Fader