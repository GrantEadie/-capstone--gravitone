import * as Tone from 'tone';

export default function MainSynth(noteArray) {
  const synth = new Tone.PolySynth(Tone.Synth, 48);
  let reverb = new Tone.Reverb(10, 10)
  reverb.wet.value = .75
  synth.set({
    oscillator: {
    type:  "sine"
    },
    envelope: {
      attack: .05,
      release: 2
    },
    volume: -9
  })

  synth.chain(reverb, Tone.Destination);

  // Tone.setContext(new Tone.Context({ latencyHint : "interactive" }))


  this.playSynth = function(noteIndex) {
    console.log(noteArray[noteIndex])
    synth.triggerAttackRelease(noteArray[noteIndex], '32n');
  }
}