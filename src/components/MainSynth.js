import * as Tone from 'tone';

export default function MainSynth(noteArray, oscType) {
  const synth = new Tone.PolySynth(Tone.Synth, 32);
  let reverb = new Tone.Reverb(10, 10)
  reverb.wet.value = .75
  synth.set({
    oscillator: {
    type:  oscType
    },
    envelope: {
      attack: .05,
      release: 2
    },
    volume: -12
  })

  synth.chain(reverb, Tone.Destination);


  this.playSynth = function(noteIndex, velocity) {
    synth.triggerAttackRelease(noteArray[noteIndex], '32n', '+0', velocity);
  }
}