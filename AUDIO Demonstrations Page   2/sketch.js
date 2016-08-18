var song; 
var song2;
var song3;
var song4;
var song5;
var song6a;
var song6b;
var song6c;
var song6d;
var song6e;
var song7a;
var song7b;
var song8a;
var song8b;
var song9a;
var song9b;
var song9c;

var button;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;
var button10;
var button11;
var button12;
var button13;
var button14;
var button15;
var button16;
var button17;

var h1;

function setup() {
h1 = createElement("h2","Audio Demonstrations of the Pulsar Synthesizer");
h1.position(320,0);



song = loadSound("Audio/1-initialPreset.wav" );
song.setVolume(0.4); 

song2 = loadSound("Audio/2-infrasonictoaudio.wav" );
song2.setVolume(0.4);

song3 = loadSound("Audio/3-DutyCycleSlider.wav" );
song3.setVolume(0.4);

song4 = loadSound("Audio/4-DutyCycleBufferrate.wav" );
song4.setVolume(0.4);

song5 = loadSound("Audio/5-Overlap.wav" );
song5.setVolume(0.4);

song6a = loadSound("Audio/6c-Line.wav" );
song6a.setVolume(0.4);

song6b = loadSound("Audio/6a-Triangle.wav" );
song6b.setVolume(0.4);

song6c = loadSound("Audio/6b-Three-Stage-Line-SegmentFASTandSlow.wav" );
song6c.setVolume(0.4);

song6d = loadSound("Audio/6d-expodec.wav" );
song6d.setVolume(0.4);

song6e = loadSound("Audio/6e-noiseslowfast.wav" );
song6e.setVolume(0.4);

song7a = loadSound("Audio/7aForkTine.wav" );
song7a.setVolume(0.4);

song7b = loadSound("Audio/7blongSoundFile.wav" );
song7b.setVolume(0.4);

song8a = loadSound("Audio/8amulticycle.wav" );
song8a.setVolume(0.4);

song8b = loadSound("Audio/8bsquares.wav" );
song8b.setVolume(0.4);

song9a = loadSound("Audio/9asinc.wav" );
song9a.setVolume(0.4);

song9b = loadSound("Audio/9bGauss.wav" );
song9b.setVolume(0.4);

song9c = loadSound("Audio/9ccleangauss.wav" );
song9c.setVolume(0.4);


button = createButton("Play");
button.parent("text1");
button.mousePressed(toggleplay);

button2 = createButton("Play");
button2.parent("text2");
button2.mousePressed(toggleplay2);  
  
button3 = createButton("Play");
button3.parent("text3");
button3.mousePressed(toggleplay3);  
 
button4 = createButton("Play");
button4.parent("text4");
button4.mousePressed(toggleplay4);   

button5 = createButton("Play");
button5.parent("text5");
button5.mousePressed(toggleplay5);  
  
button6 = createButton("Play");
button6.parent("text8");
button6.mousePressed(toggleplay6);  

button7 = createButton("Play");
button7.parent("text9");
button7.mousePressed(toggleplay7);   
  
button8 = createButton("Play");
button8.parent("text10");
button8.mousePressed(toggleplay8);   

button9 = createButton("Play");
button9.parent("text11");
button9.mousePressed(toggleplay9);

button10 = createButton("Play");
button10.parent("text12");
button10.mousePressed(toggleplay10);

button11 = createButton("Play");
button11.parent("text13");
button11.mousePressed(toggleplay11);

button12 = createButton("Play");
button12.parent("text14");
button12.mousePressed(toggleplay12);

button13 = createButton("Play");
button13.parent("text16");
button13.mousePressed(toggleplay13);

button14 = createButton("Play");
button14.parent("text17");
button14.mousePressed(toggleplay14);

button15 = createButton("Play");
button15.parent("text18");
button15.mousePressed(toggleplay15);

button16 = createButton("Play");
button16.parent("text19");
button16.mousePressed(toggleplay16);

button17 = createButton("Play");
button17.parent("text20");
button17.mousePressed(toggleplay17);
  
}















function toggleplay() {
  
if (!song.isPlaying()) {
song.play();
button.html("Stop"); 

} else {

song.stop();
button.html("Play"); 
    
}
}
 




function toggleplay2() {
  
if (!song2.isPlaying()) {
song2.play();
button2.html("Stop");

} else {

song2.stop();
button2.html("Play");
    
}
}
 
 
 
 function toggleplay3() {
  
if (!song3.isPlaying()) {
song3.play();
button3.html("Stop");

} else {

song3.stop();
button3.html("Play");
    
}
}





function toggleplay4() {
  
if (!song4.isPlaying()) {
song4.play();
button4.html("Stop");

} else {

song4.stop();
button4.html("Play");
    
}
}
 
 
 
 
function toggleplay5() {
  
if (!song5.isPlaying()) {
song5.play();
button5.html("Stop");

} else {

song5.stop();
button5.html("Play");
    
}
} 
 



function toggleplay6() {
  
if (!song6a.isPlaying()) {
song6a.play();
button6.html("Stop");

} else {

song6a.stop();
button6.html("Play");
    
}
} 



function toggleplay7() {
  
if (!song6b.isPlaying()) {
song6b.play();
button7.html("Stop");

} else {

song6b.stop();
button7.html("Play");
    
}
} 





function toggleplay8() {
  
if (!song6c.isPlaying()) {
song6c.play();
button8.html("Stop");

} else {

song6c.stop();
button8.html("Play");
}
} 


function toggleplay9() {
  
if (!song6d.isPlaying()) {
song6d.play();
button9.html("Stop");

} else {

song6d.stop();
button9.html("Play");
}
} 
 
 
function toggleplay10() {
  
if (!song6e.isPlaying()) {
song6e.play();
button10.html("Stop");

} else {

song6e.stop();
button10.html("Play");
}
}  
 
 
function toggleplay11() {
  
if (!song7a.isPlaying()) {
song7a.play();
button11.html("Stop");

} else {

song7a.stop();
button11.html("Play");
}
}  


 function toggleplay12() {
  
if (!song7b.isPlaying()) {
song7b.play();
button12.html("Stop");

} else {

song7b.stop();
button12.html("Play");
}
} 
 
 



function toggleplay13() {
  
if (!song8a.isPlaying()) {
song8a.play();
button13.html("Stop");

} else {

song8a.stop();
button13.html("Play");
}
} 
 
 
function toggleplay14() {
  
if (!song8b.isPlaying()) {
song8b.play();
button14.html("Stop");

} else {

song8b.stop();
button14.html("Play");
}
} 
 
 
 
function toggleplay15() {
  
if (!song9a.isPlaying()) {
song9a.play();
button15.html("Stop");

} else {

song9a.stop();
button15.html("Play");
}
} 
 
 
function toggleplay16() {
  
if (!song9b.isPlaying()) {
song9b.play();
button16.html("Stop");

} else {

song9b.stop();
button16.html("Play");
}
} 
 
 
function toggleplay17() {
  
if (!song9c.isPlaying()) {
song9c.play();
button17.html("Stop");

} else {

song9c.stop();
button17.html("Play");
}
} 