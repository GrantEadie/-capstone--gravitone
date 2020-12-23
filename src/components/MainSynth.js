import * as Tone from 'tone';

export default function MainSynth(noteArray, oscType) {
  this.noteArray = noteArray;
  this.synth = new Tone.PolySynth(Tone.Synth, 32);
  this.reverb = new Tone.Reverb(15, 15)
  this.delay = new Tone.FeedbackDelay(4, 0.5)
  this.filter = new Tone.Filter(2000, "lowpass", -48)
  this.delay.wet.value = .3
  this.reverb.wet.value = .75
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

  this.synth.chain(this.filter, this.reverb, this.delay, Tone.Destination);


  
  this.changeOscType = function(synthType) {
    this.synth.set({
      oscillator: {
        type: synthType
      }
    })
  }
  this.playSynth = function(noteIndex, velocity) {
    this.synth.triggerAttackRelease(this.noteArray[noteIndex], '32n', '+0', velocity);
  }

  this.changeReverb = function(reverbAmount) {
    const outputAmount = reverbAmount/100
    this.reverb.wet.value = outputAmount
  }

  this.changeDelayAmount = function(delayAmount) {
    const outputAmount = delayAmount/100
    this.delay.delayTime.value = outputAmount
  }

  this.changeFilterFreq = function(filterFreq) {
    this.filter.frequency.value = filterFreq
  }

  this.changeNoteArray = function(inputArray) {
    this.noteArray = inputArray
  }
}