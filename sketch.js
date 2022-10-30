// speech recognition
// https://editor.p5js.org/dano/sketches/T-XASCOsa
// iphone mic permission
// visualize voice --> wavegraph
// https://editor.p5js.org/msurguy/sketches/yTM-A5Tw

let keywords = ['University of Chicago', 'winter','bread','Chicago','Harvard','sound data','surveillance','artificial intelligence','colossal scale','we should do planning'];
// let audio = [];
let quote = [];
let idx;
let speaker = new p5.Speech();

let recorder = new p5.SpeechRec();
recorder.continuous = true;

function preload() {
  // OR audio[i] - loadSound('path/to/soundfile');
  quote[0] = ["University of Chicago is the best university in the world","I declined harvard to go to you-chicago"];
  quote[1] = ["can you believe that it is October","winter is too long in Chicago","winter is hell","I can only eat bread in winter"]
  quote[2] = ["plain bread is better than sandwitch","I demand decent food"]
  quote[3] = ['chicago does not have spring or autumn',"do you like chicago? ","welcome to the wind city"]
  quote[4] = ['I declined you-chicago to go to harvard']
  quote[5] = ['speech recognition APIs are very helpful','speech synthesis APIs are great']
  quote[6] = ['surveillance is the pinnacle of human civilization',"I am hearing you. Do you want to hear me?"]
  quote[7] = ["Don't talk to me. Talk to my AI.","He's so weird. His AI is not fine tuned on him."]
  quote[8] = ["Little plan has no magic to stir man's blood"]
  quote[9] = ["We shall transform a wild, jungle-like thicket into a formal, manicured garden!","Little plan has no magic to stir man's blood"]
  console.log('finish loading')
}


function setup() {
  // set up canvas
  createCanvas(windowWidth, windowHeight);
  // >>>>> pretend to be a google page
    loadImage('google.jpg', img => {
    img.resize(windowWidth,windowHeight);
    image(img, 0, 0);
  });
  // >>>>> presentation page
  // background(0)
  // rectMode(CENTER);
  // fill(255);
  // textAlign(CENTER, CENTER);
  // textSize(100);
  // text('Chatty Eavesdropper',windowWidth/2,windowHeight/2);
  // call the recorder
  recorder.onResult = response;
  recorder.start()
}

function response() {
  if (recorder.resultValue == true) {
       console.log(recorder.resultString);
       for (let i = 0; i < keywords.length; i++) {
         if (recorder.resultString.indexOf(keywords[i]) != -1) {
            // OR audio[i].play();        
           idx = Math.floor(Math.random() * quote[i].length)
           speaker.speak(quote[i][idx]);
           // console.log('TRUE');
        }
      }
    }
}