import React from 'react'
import * as Tone from 'tone';


const synth = new Tone.Synth().toDestination()

function playSynth() {
  synth.triggerAttackRelease("C3", "8n")
}

function MainSynth() {
    return (
      <div>
        <button className="btn btn-outline-dark" onClick={() => playSynth()}>PLAY</button>
      </div>
    )
}

export default MainSynth