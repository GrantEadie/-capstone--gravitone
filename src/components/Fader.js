import React from 'react'
import PropTypes from 'prop-types'

function Fader(props) {

  const { handleTitle, handleInputId, handleChangeAmount, handleMax, handleMin, handleDefaultValue, handleDefaultDisplayValue, sliderName } = props

return (
  <>
  <p style={{fontSize: "10px", color: "rgb(150,150,150)", display: "inline"}}>
        {handleTitle}{' '}
        <input
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "10px",
            marginLeft: "5px"
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
          className={sliderName}
        />
      </div>
  </>
)
}

Fader.propTypes = {
  handleTitle: PropTypes.string,
  handleInputId: PropTypes.string,
  handleChangeAmount: PropTypes.func,
  handleMax: PropTypes.string,
  handleMin: PropTypes.string,
  handleDefaultValue: PropTypes.string,
  sliderName: PropTypes.string
}

export default Fader