let readingScore=JSON.parse(localStorage.getItem("readingScore"))
console.log(readingScore)
document.getElementById("check").addEventListener("click", ()=>{
		document.getElementById("check").style.display="none";
		//document.getElementById("next-btn").style.display="block";

var ex0, ex, result, score, part3, part03,text, text2, text3, text03, word, word0, part5, part5a;
result=true; score=0;

ex=['mammals', 'underwater', 'whales', 'sleep', 'conscious', 'surface' ];
				for (var i=1; i<7; i++) 
					{
						ex0=document.getElementById("ex"+i);
						if (ex0.value.trim().toLowerCase()!=ex[i-1])
						{ result=false; 
				/*	document.getElementById("s"+i).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
</svg>`;
*/
ex0.classList.add("bg-pink-100", "text-pink-500","font-bold", "border-pink-500")
}
						else {

						/*
							document.getElementById("s"+i).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>`;
*/
ex0.classList.add("bg-green-50", "text-green-400","font-bold", "border-green-400")
score++;}
}

//Part2

for (var i=7; i<15; i++) {
						text3="sel"+i; text03="true"+i;
					if (document.getElementById(text3).value=="1")	
				{document.getElementById(text03).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>`;
				  score++;}
						
					else { result=false; document.getElementById(text03).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd"></path>
</svg>`;}
					}


//Part3
		
part3=['d', 'g', 'f', 'c', 'a', 'e'];
				for (var i=15; i<21; i++) 
					{
						part03=document.getElementById("ex"+i);
						if (part03.value.trim().toLowerCase()!=part3[i-15])
						{ result=false; 

					/*document.getElementById("s"+i).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
</svg>`;
*/
part03.classList.remove("bg-white", "border-blue-500")
part03.classList.add("bg-pink-50", "text-pink-500","font-bold", "border-pink-500")

}
						else {

							/*document.getElementById("s"+i).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>`;
*/
part03.classList.remove("bg-white", "border-blue-500")
part03.classList.add("bg-green-100", "text-green-400","font-bold", "border-green-500")					
score++;}
					}


for (var i=21; i<30; i++) 
					{
						text="a"+i; text2="s"+i;
					if (document.getElementById(text).checked == true)	
				{document.getElementById(text2).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>
`;
				score++;}
					else { result=false; document.getElementById(text2).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
</svg>
`;}
}


word=['skin', 'clues', 'stress', 'lights'];
				
				for (var i=30; i<34; i++) 
					{
						word0=document.getElementById("ex"+i);
				if (word0.value.trim().toLowerCase()!=word[i-30])
				{ 
				result=false; 
				/*document.getElementById("s"+i).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
</svg>`;
*/
word0.classList.add("bg-pink-100", "text-pink-500","font-bold", "border-pink-500")
}

				else {
				/*	document.getElementById("s"+i).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>`;
*/
word0.classList.add("bg-green-100", "text-green-400","font-bold", "border-green-500")
				score++;}
}
for (var i=34; i<36; i++) 
					{
						part5="a"+i; part5a="s"+i;
					if (document.getElementById(part5).checked == true)	
				{document.getElementById(part5a).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-400">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>
`;
				score++;}
					else { result=false; document.getElementById(part5a).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
</svg>
`;}
}
					


document.getElementById("answers").classList.remove("hidden");
document.getElementById("score").innerHTML=`Your Score: ${score}/35`
var d=new Date();
var year=d.getFullYear()
var month=d.getMonth()+1;
var date = d.getDate()
var sana=`${date}-${month}-${year}`;
if(!readingScore){
readingScore=[];
}
var template={today:sana, ball:score}
readingScore.push(template)	
localStorage.setItem("readingScore", JSON.stringify(readingScore))
})
