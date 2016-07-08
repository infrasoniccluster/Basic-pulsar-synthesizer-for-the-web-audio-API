var pwmOsc;
var mainOsc; 
var tone;
 
function setupAudio( obj ) {

window.AudioContext = window.AudioContext || window.webkitAudioContext;
audioContext = new AudioContext();

obj.analyser = audioContext.createAnalyser();
obj.analyser.fftSize = 2048;
myOscilloscope = new Oscilloscope(obj.analyser, 512, 256);


// Creating an oscillator and two gain nodes
mainOsc = audioContext.createOscillator(); // creating main oscillator

var vol =  audioContext.createGain(); // creating gain node for main oscillator

finalvol = audioContext.createGain(); // Creating a final gain node that will be automated to create an envelope. 
                                     //The code for the envelope is located in the "toggle()" function in "audio.js" at the bottom of the page


// making the connections
mainOsc.connect(vol); 

vol.connect(finalvol); // connnecting the "vol" gain node to the "finalvol" so the "mainOsc" oscillator's signal is put through an envelope 

finalvol.connect(obj.analyser);

finalvol.connect(audioContext.destination);


// setting the values 
vol.gain.value = 0.05;

finalvol.gain.value = 0.0; 

mainOsc.start(0);
 

// pwmOsc 
tone = parseFloat(document.getElementById("f").value); // taking data from the frequency slider
                                                       // and sending it to the frequency of the pwmOsc
 
pwmOsc=createPWMOsc(tone,.5); // the frequecy of the pulse width oscillators is the first argument in the brackets
                             //and the second argument is the pulse width value
pwmOsc.output.connect(vol.gain);

pwmOsc.start(audioContext.currentTime+0.05);

/*
// modulation oscillator
var modOsc = audioContext.createOscillator();
var vol2 =  audioContext.createGain();
modOsc.connect(vol2);
vol2.connect(finalvol.gain);
modOsc.type = 'sawtooth';
modOsc.frequency.value = 2;
vol2.gain.value = 0.3;
modOsc.start(0); 
 */
}


function changeFreq() { // change the frequency of "mainOsc" with a slider

tone = parseFloat(document.getElementById("f").value);
console.log(tone);

mainOsc.frequency.value = tone;
}
