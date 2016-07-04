var pwmOsc;
var mainOsc; 
var vol;
var modOsc;
var mainOsc;


function setupAudio( obj ) {

	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	audioContext = new AudioContext();

	obj.analyser = audioContext.createAnalyser();
	obj.analyser.fftSize = 2048;
  myOscilloscope = new Oscilloscope(obj.analyser, 512, 256);

 

 
vol =  audioContext.createGain();

var modOsc = audioContext.createOscillator();
var vol3 =  audioContext.createGain();

finalvol = audioContext.createGain();

modOsc.connect(vol3);
modOsc.type = 'sawtooth';
modOsc.frequency.value = 2;

vol3.gain.value = 0;
vol3.connect(finalvol.gain);

var tone = parseFloat(document.getElementById("f").value);
console.log(tone);

 
modOsc.start(0); 

mainOsc = audioContext.createOscillator(); 
mainOsc.start(0);

vol.gain.value = 0.05;
vol.connect(finalvol);

finalvol.connect(audioContext.destination);

pwmOsc=createPWMOsc(440,.5);
pwmOsc.output.connect(vol.gain);

finalvol.connect(obj.analyser);

pwmOsc.start(audioContext.currentTime+0.05);

finalvol.gain.value = 0.0;

}

function changeFreq() {

var tone = parseFloat(document.getElementById("f").value);
console.log(tone);

mainOsc.connect(vol);

mainOsc.frequency.value = tone;
  
  
  
}
