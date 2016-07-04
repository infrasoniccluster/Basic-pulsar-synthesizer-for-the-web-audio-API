# Basic-pulsar-synthesizer-for-the-web-audio-API
This is a repository for a basic pulsar synthesizer that will be constructed for the web audio API. 

#Introduction
Pulsar synthesis is a special type of granular synthesis that was designed by Curtis Roads and Alberto de Campo. It was first implemented in SuperCollider 2 in 2001 with the title "PulsarGenerator". It was made popular by Roads in his book Microsound (2001) and also in his article "Sound Composition With Pulsars" in 2001 of March's issues of the Journal of the Audio Engineering Society: http://clang.mat.ucsb.edu/articles_files/SoundCompwithPulsars.pdf.
As of today it has not been updated and can only be obtained from Roads and will only work on a OS-9 Mac computer:
http://clang.mat.ucsb.edu/software.html
There have been a few redesigns in recent years as plugins for various digital audio software programs so that it can be controlable with a MIDI event editor or a keyboard. However there has never been a version designed for the web audio API.  

#Basic Pulsar Synthesis
As an achievable aim for this project I want to construct a basic pulsar synthesizer. I will describe in detail how a basic pulsar synthesizer works and what components it needs to be constructed. 

Pulsar synthesis is a type of granular synthesis which produces sounds similar to an impulse generator’s signal sent through a band pass filter. In this basic pulsar synthesiser there is no filter used, what is used is envelopes that can be any arbitrary shape. This type of synthesis is part of a family of granular synthesis known as Particle synthesis. A pulsar (which is a particle of sound) consists of two things, a burst of energy known as a pulsaret and a period of silence. The pulsar always begins with a pulsaret waveform and the period of silence follows afterwards. The pulsaret can be any arbitrary waveform and this waveform can be shortened or lengthened with its duty cycle parameter. This is known as the duty cycle and silence ratio, where the lower the duty cycle the smaller the pulsaret period, this could be called the “formant frequency”. A continuous output of pulsars forms what is known as “pulsar trains”, the rate at which these pulsars are emitted is known as the fundamental frequency which can range from 1Hz to 5KHz. When the fundamental frequency is set low the period of silence is long and when the fundamental is set really high the period of silence decreases to a shorter time span. 

These two main parameters (rate of pulsar emission and duty cycle ratio) are controlled separately with envelopes of their own which can be any arbitrary shape allowing for simultaneous manipulation. Basic pulsar synthesis has a third envelope which can also be any arbitrary shape, this is known as the pulsaret envelope. This envelope limits each pulsaret in the time domain and has a strong affect on the pulsar train spectrum. Examples of shapes this envelope can have are: rectangular, Gaussian, linear attack and decay and exponential attack and decay.  

See below a diagram from the second page of Curtis Roads' article demonstrating the "anatomy" of a pulsar. 
![screen shot 2016-07-01 at 15 59 57](https://cloud.githubusercontent.com/assets/19801391/16525797/e9afc698-3f62-11e6-9c79-fecbce6e6aeb.png)

This basic pulsar synthesizer will consist of Three envelopes for controlling the parameters of the duty cycle, the rate of emission and the pulsaret envelope. There will also be another parameter to change the frequency of the individual pulsarets. 

So far I have reworked an example of an oscillscope and a duty cycle web audio sketch. I downloaded this from http://webaudiodemos.appspot.com/oscilloscope/index.html, which was designed by Chris Wilson. The variations I made to this was by adding an envelope to the final gain node that is triggered by a button. This envelope was designed using several schduled timepoints, where each point is set at a different point in time and each point has a different amplitude value. 

 ```javascript
function toggle() {
  
var volpoint1 = parseFloat(document.getElementById("vp1").value); // vp stands for "volume point" and the number is their point in time
var volpoint2 = parseFloat(document.getElementById("vp2").value); // you can set the volume for each point to form an envelope for the pulsar.
var volpoint3 = parseFloat(document.getElementById("vp3").value);
var volpoint4 = parseFloat(document.getElementById("vp4").value);

var len = parseFloat(document.getElementById("length").value); 

sound = audioContext.currentTime;
 
    finalvol.gain.cancelScheduledValues(sound);
   
    finalvol.gain.setValueAtTime(finalvol.gain.value, sound);
    
    finalvol.gain.linearRampToValueAtTime( volpoint1 , sound - 0.080 + len);
    
    finalvol.gain.linearRampToValueAtTime( volpoint2 , sound - 0.060 + len);
    
    finalvol.gain.linearRampToValueAtTime( volpoint3 , sound - 0.040 + len);
    
    finalvol.gain.linearRampToValueAtTime( volpoint4 , sound - 0.020 + len);
    
    finalvol.gain.linearRampToValueAtTime( 0.0 , sound + len);
 
 
}
 
 ```
This is borrowed and reworked from http://stackoverflow.com/questions/15862155/web-audio-api-gain-node-envelope-generators/

Each of the four timepoint's amplitude is controlled by a slider (labled "vp" for volume point) ranging from 0 to 1. The slider labled "length" controls the overall length of the evelope ranging from 10 to 200 milliseconds, if you set this really low and play around with the volume point sliders by lowering about two to their minimum and increasing two to a high value you might get a interesting pulsar sound. 

There is also a frequency slider which controls the frequency value of an oscillator I added to the oscilloscope example. This will work as the frequency value of the individual pulsarets. However there is a bug with this, before you can trigger any sounds you must first move the frequncy slider anywhere you like to activate it so that when you click on the "play" button it should tigger the envelope otherwise it wont work.   



 


The Prototype can be found here:
https://infrasoniccluster.github.io/Basic-pulsar-synthesizer-for-the-web-audio-API/

 
