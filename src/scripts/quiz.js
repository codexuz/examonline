import { app } from "@lib/firebase/client";
import { getFirestore,  collection, doc, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const testName=$('#test').text()
var loader = document.querySelector('.transition-loader')
var telegramUsername=localStorage.getItem("telegram")
var telegramName=localStorage.getItem("telegramName")
const firelink='https://console.firebase.google.com/project/exam-online-384406/firestore/data/~2Fusers~2F'
const questions=[]
let question; 

//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;
var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record


const examSubmitted=moment().format('MMMM Do YYYY, h:mm:ss a');

const storage = getStorage(app);
const db = getFirestore(app)
const uid=localStorage.getItem("storeId")
// Get the current date
const currentDate = new Date();

// Format the date as YYYY-MM-DD
const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}-${currentDate.getMinutes().toString().padStart(2, '0')}`;

// Generate the audio file name
const fileName = `audio_${formattedDate}_${formattedTime}`;

const storageRef = ref(storage, '/answers/' + fileName);
  
 
const playBeep = ()=>{
   var beep = new Audio('/mock-tests/beep.m4a')
   beep.play()
}


function startRecording() {
    var constraints = { audio: true, video:false }
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    	audioContext = new AudioContext();
    	gumStream = stream;
    	input = audioContext.createMediaStreamSource(stream);
    	rec = new Recorder(input,{numChannels:1})
    	rec.record()
    	}).catch(function(err) {
	  	alert('Failed to get permission to record')
    	
	});

  }


  
  function pauseRecording() {
    rec.stop();
  }

  function resumeRecording() {
    rec.record();
  }

 
 function stopRecording() {
	rec.stop();
	//stop microphone access
	gumStream.getAudioTracks()[0].stop();
	rec.exportWAV(createDownloadLink);
}


function createDownloadLink(blob) {
	const formData = new FormData();
		formData.append('audio', blob, 'audio.wav');
		formData.append('caption', `@${telegramUsername} ${telegramName}\n ${testName}\n ${firelink}${uid}`);
		formData.append('title', "Multilevel Mock");
		fetch(`https://api.telegram.org/bot6124695087:AAG2TZUf4KjJrBQUM9OiO8DV6dSUwScqZ2A/sendAudio?chat_id=1483919112`, {
		  method: 'POST',
		  body: formData
		})
		  .then(response => {
			  console.log(response)
			  if (response.ok) {
				window.location.href='/speaking/reports'
				loader.classList.add('hidden')

		  } else {
					  // Handle non-ok response (optional)
					  alert('Failed to send audio:', response.status, response.statusText);
					  // You can show an error message or take other actions as needed
				  }
		  })
		  .catch(error => console.error(error));
}



document.getElementById('start').addEventListener('click', ()=>{
	document.getElementById('home').classList.add('hidden')
	document.getElementById('speaking').classList.remove('hidden')
	step0()
})

    function step0() {
	$('#question').text(q[0]);
	$('#q-number').text(1)
	questions.push($('#question').text())
	var audio = document.getElementById('audio1')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
        startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step1()
			pauseRecording()
            

  }
		  
		}, 1000);
	  }

}


function step1() {
	$('#question').text(q[1]);
	$('#q-number').text(2)
	questions.push($('#question').text())
	console.log(questions)
	var audio = document.getElementById('audio2')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
        resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step2()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}



function step2() {
	$('#question').text(q[2]);
	$('#q-number').text(3)
	questions.push($('#question').text())
	var audio = document.getElementById('audio3')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            step3()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}


function step3() {
	$('#question').text(q[3]);
	$('#q-number').text(4)
	questions.push($('#question').text())
	var audio = document.getElementById('audio4')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            step4()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}



function step4() {
	$('#question').text(q[4]);
	$('#q-number').text(5)
	questions.push($('#question').text())
	var audio = document.getElementById('audio5')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            step5()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}



function step5() {
	$('#question').text(q[5]);
	$('#q-number').text(6)
	questions.push($('#question').text())
	var audio = document.getElementById('audio6')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            part2()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}


function part2(){
    $('#question').text('');
	$('#q-number').text('')
	var audio = document.getElementById('audio7')
    audio.play()
	audio.addEventListener("ended", step6)
    $('#indicator-2').removeClass('bg-blue-500')
    $('#indicator-2').addClass('active')
    

}

function step6() {
	$('#question').html(q[6]);
	$('#q-number').text(7)
	questions.push($('#question').text())
	var audio = document.getElementById('audio8')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 60;
	$('#timer').text(` 00:${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
    $('#timer').text(`02:00`)
     var targetTime = moment().add(2, 'minutes');
     var countdownInterval = setInterval(function() {
         var currentTime = moment();
         var secondsRemaining = targetTime.diff(currentTime, 'seconds');
 
         var formattedTime = moment.utc(secondsRemaining * 1000).format('mm:ss');
         $('#timer').text(`${formattedTime}`);
 
         if (secondsRemaining <= 0) {
             $('#timer').text(`00:00`)
             clearInterval(countdownInterval);
             $('#recorder-blink').addClass('hidden')
             part3()
             pauseRecording()
         }
     }, 1000); 
 
   }


}


function part3(){
    $('#question').text('');
	$('#q-number').text('')
	var audio = document.getElementById('audio9')
    audio.play()
	audio.addEventListener("ended", step7)
    $('#indicator-3').removeClass('bg-blue-500')
    $('#indicator-3').addClass('active')
    

}


function step7() {
	$('#question').html(q[7]);
	$('#q-number').text(8)
	questions.push($('#question').text())
	var audio = document.getElementById('audio10')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step8()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}


function step8() {
	$('#question').html(q[8]);
	$('#q-number').text(9)
	questions.push($('#question').text())
	var audio = document.getElementById('audio11')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step9()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}
 


function step9() {
	$('#question').html(q[9]);
	$('#q-number').text(10)
	questions.push($('#question').text())
	var audio = document.getElementById('audio12')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step10()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}


function step10() {
	$('#question').html(q[10]);
	$('#q-number').text(11)
	questions.push($('#question').text())
	var audio = document.getElementById('audio13')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step11()
			pauseRecording()
  }
		  
		}, 1000);
	  }


}
 

function step11() {
	$('#question').html(q[11]);
	$('#q-number').text(12)
	questions.push($('#question').text())
	question = questions.join(' \n ');
	var audio = document.getElementById('audio14')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		resumeRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			examEnd()
  }
		  
		}, 1000);
	  }


}

function examEnd(){
    $('#question').text('');
	$('#q-number').text('')
	var audio = document.getElementById('audio15')
    audio.play()
	audio.addEventListener("ended", ()=>{
		stopRecording()
		loader.classList.remove('hidden')
	})	
}
 