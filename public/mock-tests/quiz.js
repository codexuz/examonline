const part1=document.getElementById("quizBar");
const section1=document.getElementById("part1");
const section2=document.getElementById("part2")
const section3=document.getElementById("part3")
const welcome=document.getElementById("welcome")
const que=document.getElementById("question-bar");
const audio1=document.getElementById("audio_1");
const audio2=document.getElementById("audio_2");
const audio3=document.getElementById("audio_3");
const audio4=document.getElementById("audio_4");
const audio5=document.getElementById("audio_5");
const audio6=document.getElementById("audio_6");
const audio7=document.getElementById("audio_7");
const audio8=document.getElementById("audio_8");
const audio9=document.getElementById("audio_9");
const audio10=document.getElementById("audio_10");
const audio11=document.getElementById("audio_11");
const audio12=document.getElementById("audio_12");
const audio13=document.getElementById("audio_13");
const audio14=document.getElementById("audio_14");
const audio15=document.getElementById("audio_15");
const beep=document.getElementById("beep");
const timer=document.getElementById("timer");
const que_id=document.getElementById("que-id");
let recorder, audioChunks = [];

part1.style.display="none";

// Get the user agent string
const userAgent = navigator.userAgent;


function startRecording() {
	navigator.mediaDevices.getUserMedia({ audio: true })
	  .then(function (stream) {
		recorder = new MediaRecorder(stream);
  
		// Attach ondataavailable event
		recorder.ondataavailable = (event) => {
		if (event.data.size > 0) {
		  audioChunks.push(event.data);
		}
		const caption = localStorage.getItem("name")
		const formData = new FormData();
		const opusBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
		  formData.append('audio', opusBlob, 'audio.mp3');
		  formData.append('caption', caption);
		  formData.append('title', "Multilevel Mock");
		  fetch('https://api.telegram.org/bot6124695087:AAG0NprnUOPuxyaHA_79ZDazy870_007Dtk/sendAudio?chat_id=1483919112', {
			method: 'POST',
			body: formData
		  })
			.then(response => response.json())
			.then(data => {
			  if (data === 'ok') {
			    // If the response is 'ok', redirect to '/speaking-mock'
			    window.location.href = '/speaking-mock';
			  }
			})
			.catch(error => console.error(error));
	  }; 
  
		recorder.start();
  
	  });
  }
  




function stopRecording() {
    recorder.stop();
  }



//Scale UpandDown
var TextSize=document.getElementById("question-bar");
 function sizeUp(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize+1)+'px'
 }

 function sizeDown(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize-1)+'px'
 }

 //Fullscreen

function toggleFullScreen() {
  const element = document.documentElement;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
    document.getElementById("full-screen").innerHTML = `<i class="fa fa-compress"></i>`;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    document.getElementById("full-screen").innerHTML = `<i class="fa fa-expand"></i>`;
  }
}

  


//Step1
function step0() {
	startRecording();
	welcome.style.display="none";
	part1.style.display="block"
	que.innerHTML=q[0];
	que_id.innerHTML=1
	audio1.play();
	audio1.addEventListener("ended", startCountdown)

	// Define a function to start the 5-second countdown
function startCountdown() {
	let count = 5;
	timer.innerHTML += `${count} seconds`;
	const interval = setInterval(() => {
	  count--;
	  timer.innerHTML = `${count} seconds`;
	  if (count <= 0) {
		beep.play();
		clearInterval(interval);
		start30SecondCountdown();
	  }
	}, 1000);
  }

	// Define a function to start the 30-second countdown
	function start30SecondCountdown() {
		let count = 30;
		timer.innerHTML = ` ${count}  LEFT`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} LEFT`;
		  if (count <= 0) {
			timer.innerHTML="";
			clearInterval(interval);
			step1();
  }
		  
		}, 1000);
	  }
	
}

//Step1 fun

function step1(){
	que.innerHTML=q[1];
	que_id.innerHTML=2
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q2").style.display="block"
	// Display the "Next" button
	const q2 = document.getElementById("q2"); // Replace with your actual button ID
	q2.addEventListener("click",()=>{
	audio2.play()	
	})
  }

	audio2.play();
	audio2.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q2").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step2();
				
			  }
			}, 1000);
		  }
}


//step2

function step2(){
	que.innerHTML=q[2];
	que_id.innerHTML=3
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q3").style.display="block"
	// Display the "Next" button
	const q3 = document.getElementById("q3"); // Replace with your actual button ID
	q3.addEventListener("click",()=>{
	audio3.play()	
	})
  }
	audio3.play();
	audio3.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q3").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step3();
		        
			  }
			}, 1000);
		  }
}

//step3

function step3(){
	que.innerHTML=q[3];
	que_id.innerHTML=4
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q4").style.display="block"
	// Display the "Next" button
	const q4 = document.getElementById("q4"); // Replace with your actual button ID
	q4.addEventListener("click",()=>{
	audio4.play()	
	})
  }
	audio4.play();
	audio4.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q4").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step4();
			  }
			}, 1000);
		  }
}


//step4

function step4(){
	que.innerHTML=q[4];
	que_id.innerHTML=5
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q5").style.display="block"
	// Display the "Next" button
	const q5 = document.getElementById("q5"); // Replace with your actual button ID
	q5.addEventListener("click",()=>{
	audio5.play()	
	})
  }
	audio5.play();
	audio5.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q5").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step5();
			  }
			}, 1000);
		  }
}


//step5

function step5(){
	que.innerHTML=q[5];
	que_id.innerHTML=6
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q6").style.display="block"
	// Display the "Next" button
	const q6 = document.getElementById("q6"); // Replace with your actual button ID
	q6.addEventListener("click",()=>{
	audio6.play()	
	})
  }
	audio6.play();
	audio6.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q6").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				part2();
		
			  }
			}, 1000);
		  }
}


//part2 intro

function part2(){
	que.innerHTML='';
	que_id.innerHTML=''
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q7").style.display="block"
	// Display the "Next" button
	const q7 = document.getElementById("q7"); // Replace with your actual button ID
	q7.addEventListener("click",()=>{
	audio7.play()	
	})
  }
	audio7.play();
	section1.innerHTML=`<i class="fa fa-check"></i>`;
	section2.classList.add("bg-success");
	audio7.addEventListener("ended", step6);
}

//step6

function step6(){
	document.getElementById("q7").style.display="none"
	que.innerHTML=q[6];
	que_id.innerHTML=7
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q8").style.display="block"
	// Display the "Next" button
	const q8 = document.getElementById("q8"); // Replace with your actual button ID
	q8.addEventListener("click",()=>{
	audio8.play()	
	})
  }
	audio8.play();
	audio8.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q8").style.display="none"
		let count = 60;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 120;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				part3();
			  }
			}, 1000);
		  }
}


//part3 intro

function part3(){
	que.innerHTML='';
	que_id.innerHTML=''
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q9").style.display="block"
	// Display the "Next" button
	const q9 = document.getElementById("q9"); // Replace with your actual button ID
	q9.addEventListener("click",()=>{
	audio9.play()	
	})
  }
	audio9.play();
	section1.innerHTML=`<i class="fa fa-check"></i>`;
	section2.innerHTML=`<i class="fa fa-check"></i>`;
	section3.classList.add("bg-success");
	audio9.addEventListener("ended", step7);
}


//step7


function step7(){
	document.getElementById("q9").style.display="none"
	que.innerHTML=q[7];
	que_id.innerHTML=8
	audio10.play();
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q10").style.display="block"
	// Display the "Next" button
	const q10 = document.getElementById("q10"); // Replace with your actual button ID
	q10.addEventListener("click",()=>{
	audio10.play()	
	})
  }
	audio10.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q10").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step8();
		
			  }
			}, 1000);
		  }
}




//step8

function step8(){
	que.innerHTML=q[8];
	que_id.innerHTML=9
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q11").style.display="block"
	// Display the "Next" button
	const q11 = document.getElementById("q11"); // Replace with your actual button ID
	q11.addEventListener("click",()=>{
	audio11.play()	
	})
  }
	audio11.play();
	audio11.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q11").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step9();
		
			  }
			}, 1000);
		  }
}


//step9

function step9(){
	que.innerHTML=q[9];
	que_id.innerHTML=10
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q12").style.display="block"
	// Display the "Next" button
	const q12 = document.getElementById("q12"); // Replace with your actual button ID
	q12.addEventListener("click",()=>{
	audio12.play()	
	})
  }
	audio12.play();
	audio12.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q12").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step10();
		
			  }
			}, 1000);
		  }
}


//step10

function step10(){
	que.innerHTML=q[10];
	que_id.innerHTML=11
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q13").style.display="block"
	// Display the "Next" button
	const q13 = document.getElementById("q13"); // Replace with your actual button ID
	q13.addEventListener("click",()=>{
	audio13.play()	
	})
  }
	audio13.play();
	audio13.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q13").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				step11();
		
			  }
			}, 1000);
		  }
}


//step11


function step11(){
	que.innerHTML=q[11];
	que_id.innerHTML=12
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q14").style.display="block"
	// Display the "Next" button
	const q14 = document.getElementById("q14"); // Replace with your actual button ID
	q14.addEventListener("click",()=>{
	audio14.play()	
	})
  }
	audio14.play();
	audio14.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		document.getElementById("q14").style.display="none"
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				timer.innerHTML="";
				clearInterval(interval);
				examEnd();
		
			  }
			}, 1000);
		  }
}

function examEnd(){
	if (/iPad|iPhone|iPod/.test(userAgent)) {
		document.getElementById("q15").style.display="block"
	// Display the "Next" button
	const q15 = document.getElementById("q15"); // Replace with your actual button ID
	q15.addEventListener("click",()=>{
	audio15.play()	
	})
  }
	audio15.play();
	que.innerHTML='';
	que_id.innerHTML='';
	audio15.addEventListener("ended",function(){
		stopRecording();
		document.querySelector(".uploader").style.display="block"
	
});		
}
