var audioContext = null;
var myBuffer = null;

var osc = null;

var finalvol;
var time;


function setDutyCycle(amt) {

	this.delay.delayTime.value = amt/this.frequency;	

	this.dcGain.gain.value = 1.7*(0.5-amt);
}

function start(time) {

	this.osc1.start(time);
	
	this.osc2.start(time);
	
	this.dcOffset.start(time);
}

function stop(time) {

	this.osc1.stop(time);

	this.osc2.stop(time);

	this.dcOffset.stop(time);
}


function createDCOffset() {

	var buffer=audioContext.createBuffer(1,1,audioContext.sampleRate);
	var data = buffer.getChannelData(0);

	for (var i=0; i<1; i++)
		data[i]=1;

	var bufferSource=audioContext.createBufferSource();
	bufferSource.buffer=buffer;
	bufferSource.loop=true;

	return bufferSource;

  
}

function createPWMOsc(freq, dutyCycle) {

	var pwm = new Object();

	var osc1 = audioContext.createOscillator();
	var osc2 = audioContext.createOscillator();

	var inverter = audioContext.createGain();
	var output = audioContext.createGain();

	var delay = audioContext.createDelay();

	inverter.gain.value=-1;

	osc1.type="sawtooth";
	osc2.type="sawtooth";

	osc1.frequency.value=freq;
	osc1.frequency.value=freq;
	osc1.connect(output);
	osc2.connect(inverter);

	inverter.connect(delay);
	delay.connect(output);

	var dcOffset = createDCOffset();
	var dcGain = audioContext.createGain();
	dcOffset.connect(dcGain);
	dcGain.connect(output);

	output.gain.value =  0.1;  // purely for debugging.

	pwm.osc1=osc1;
	pwm.osc2=osc2;
	pwm.output=output;
	pwm.delay=delay;
	pwm.frequency = freq;
	pwm.dcGain=dcGain;
	pwm.dcOffset=dcOffset;
	pwm.setDutyCycle = setDutyCycle;
	pwm.start=start;
	pwm.stop=stop;

	pwm.setDutyCycle(dutyCycle);
	return pwm;
}


function toggle() {
  
var volpoint1 = parseFloat(document.getElementById("vp1").value); // vp stands for "volume point" and the number is their point in time
var volpoint2 = parseFloat(document.getElementById("vp2").value); // you can set the volume for each point to form an envelope for the pulsar.
var volpoint3 = parseFloat(document.getElementById("vp3").value);
var volpoint4 = parseFloat(document.getElementById("vp4").value);

var len = parseFloat(document.getElementById("length").value); 

time = audioContext.currentTime; 
 
    finalvol.gain.cancelScheduledValues(time);
   
    finalvol.gain.setValueAtTime(finalvol.gain.value, time);
    
    finalvol.gain.linearRampToValueAtTime( volpoint1 , time - 0.080 + len);
    
    finalvol.gain.linearRampToValueAtTime( volpoint2 , time - 0.060 + len);
    
    finalvol.gain.linearRampToValueAtTime( volpoint3 , time - 0.040 + len);
    
    finalvol.gain.linearRampToValueAtTime( volpoint4 , time - 0.020 + len);
    
    finalvol.gain.linearRampToValueAtTime( 0.0 , time + len);
}


