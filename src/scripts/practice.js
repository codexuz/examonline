
import {Wave} from "@foobar404/wave";
import Artyom from "artyom.js"

const artyom = new Artyom();
let stream;
let recorder;


//Starting_section

$('#startButton').click(()=>{
  $('#startButton').addClass('hidden')
  $('#mainContainer').removeClass('hidden')
  $('#stopButton').removeClass('hidden')
  $('#recButton').removeClass('hidden')
  $('#canvasElmId').removeClass('hidden') 
  $('#audio').addClass('hidden')
})


$('#responseButton').click(()=>{
$('#mainContainer').addClass('hidden')
$('.currentQuestion').addClass('hidden')
$('#resultPage').removeClass('hidden')
})


$('#stopButton').click(()=>{
  if(currentQuestion === savol.length-1){
      $('#nextButton').addClass('hidden')
      $('#responseButton').removeClass('hidden')
      $('#stopButton').addClass('hidden')
      $('#transcribeContainer').attr('contenteditable', 'true')
      $('#recButton').addClass('hidden')
      $('#retryButton').removeClass('hidden')
      $('#notice').removeClass('hidden')
      $('#audio').removeClass('hidden')
   }
   else {
  $('#stopButton').addClass('hidden')
  $('#recButton').addClass('hidden')
  $('#canvasElmId').addClass('hidden')
  $('#nextButton').removeClass('hidden')
  $('#retryButton').removeClass('hidden')
  $('#notice').removeClass('hidden')
  $('#audio').removeClass('hidden')
  $('#transcribeContainer').attr('contenteditable', 'true')
  }
  
})

document.querySelector('#startButton').onclick=()=>{
  startRecording()
}

document.querySelector('#stopButton').onclick=()=>{
  stopRecording()
}



const canvas = document.querySelector("#canvasElmId");
const audio = document.querySelector("#audio");
const audioCtx = new AudioContext();
var content = '';
var textbox = $('#transcribeContainer');



     // Start listening
    artyom.redirectRecognizedTextOutput(function (recognized) {
        recognized = recognized.charAt(0).toUpperCase() + recognized.slice(1);
        recognized = recognized.trim();
        if (!/[.?!]$/.test(recognized)) {
            recognized += '. ';
        }
        content += recognized;
        console.log(recognized);
        $('#transcribeContainer').text(content);
    });

     // Stop listening
    function stopListening() {
        artyom.fatality(); // Stop listening
    }

    // Start listening again
    function startListening() {
        artyom.initialize({ lang: 'en-US', continuous: true, listen: true, debug: false });
    }




function startRecording() {
 
 if(content.length){
            content += ''
  }
  
  startListening()
 navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
      recorder = new MediaRecorder(stream);
      const wave = new Wave(
                    { context: audioCtx, source: audioCtx.createMediaStreamSource(stream) },
                    canvas,
                    true
                );
                wave.addAnimation(
                    new wave.animations.Lines({
                        lineColor: "dodgerblue",
                        lineWidth: 1,
                        count: 64,
                        rounded: true,
                        bottom: true,
                        mirroredX:true
                    }));

                  

      

      // when there is data, compile into object for preview src
      recorder.ondataavailable = function (e) {
        const url = URL.createObjectURL(e.data);
        audio.src = url;
        audio.controls=true
        var audioPlayer = document.createElement('audio');
        audioPlayer.src=url;
        audioPlayer.controls=true;
        document.querySelector('#answers').appendChild(audioPlayer)
        
      }
        
      recorder.start();

    });
}


function stopRecording() {
    if (recorder && recorder.state !== "inactive") {
    recorder.stop();
    stopListening()
    const tracks = recorder.stream.getTracks();
    tracks.forEach(track => track.stop());
  }
  }


var currentQuestion = 0

$('#nextButton').click(()=>{
   const wordCount = document.querySelector('#transcribeContainer').innerText.split(/\s+/).filter(function(word) {
        return word.length > 0;
      }).length;

      if (wordCount < 5) {
        alert('Say at least 5 words.');
      } else {
   currentQuestion++
  $('.currentQuestion').html(savol[currentQuestion])
  $('#transcribeContainer').text(' ')
  content = ''
  $('#startButton').removeClass('hidden')
  $('#mainContainer').addClass('hidden')
  $('#nextButton').addClass('hidden')
  $('#retryButton').addClass('hidden')
  $('#notice').addClass('hidden')
  $('#transcribeContainer').attr('contenteditable', 'false')
  var p = document.createElement('p');
  p.classList.add('py-2', 'px-5', 'bg-gray-100', 'text-lg', 'text-gray-500', 'rounded-lg')
  p.innerHTML=savol[currentQuestion]
  document.querySelector('#answers').appendChild(p)
   }
})

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.currentQuestion').innerText=savol[currentQuestion]
  var p = document.createElement('p');
  p.innerHTML=savol[currentQuestion]
  p.classList.add('py-2', 'px-5', 'bg-gray-100', 'text-lg', 'text-gray-500', 'rounded-lg')
  document.querySelector('#answers').appendChild(p)
  
})
