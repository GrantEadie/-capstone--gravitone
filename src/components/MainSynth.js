import * as Tone from 'tone';

export default function MainSynth(noteArray, oscType) {
  this.synth = new Tone.PolySynth(Tone.Synth, 32);
  let reverb = new Tone.Reverb(10, 10)
  reverb.wet.value = .75
  this.synth.set({
    oscillator: {
    type:  oscType
    },
    envelope: {
      attack: .05,
      release: 2
    },
    volume: -12
  })

  this.synth.chain(reverb, Tone.Destination);


  
  this.changeOscType = function(synthType) {
    console.log(this.synth)
    this.synth.set({
      oscillator: {
        type: synthType
      }
    })
  }
  this.playSynth = function(noteIndex, velocity) {
    this.synth.triggerAttackRelease(noteArray[noteIndex], '32n', '+0', velocity);
  }
}