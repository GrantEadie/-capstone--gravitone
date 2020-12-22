import React from 'react'
import PropTypes from 'prop-types'

function Fader(props) {

  const { handleTitle, handleInputId, handleChangeAmount, handleMax, handleMin, handleDefaultValue, handleDefaultDisplayValue, sliderName } = props

return (
  <>
  <label for={handleInputId} style={{fontSize: "1vw", color: "rgb(150,150,150)", marginBottom: "-10px", display: "inline"}}>
        {handleTitle}{'    '}
      </label>
        <input
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1vw",
          }}
          id={handleInputId}
          type="text"
          defaultValue={handleDefaultDisplayValue}
        ></input>
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
  handleMax: PropTypes.number,
  handleMin: PropTypes.number,
  handleDefaultValue: PropTypes.number,
  sliderName: PropTypes.string
}

export default Fader