/*if you want to beep without using a wave file*/
function beep(frequency = 800, time = 100){
var context = new AudioContext();
var oscillator = context.createOscillator();
oscillator.type = "sine";
oscillator.frequency.value = frequency;
oscillator.connect(context.destination);
oscillator.start(); 
// Beep for 500 milliseconds
setTimeout(function () {
    oscillator.stop();
}, time); 
}