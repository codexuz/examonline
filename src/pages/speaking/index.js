
---
import Layout from '../../layouts/Layout.astro'
---
	
<Layout title="Speaking Sample Answers">
<div class="w-full min-h-screen" style="padding: 10px 0 90px 0;">

<!-- Tab Content -->
    <div id="tab1" class="tab-content active">
      <div class="py-5 w-full " id="part1"></div>
    </div>
    
    <div id="tab2" class="tab-content">
     <div class="py-5 w-full  " id="part2"></div>
    </div>
    
    <div id="tab3" class="tab-content">
      <div class="py-5 w-full" id="part3"></div>
    </div>
  </div>


  <div class="tab-container bg-gray-800 w-full">
    <!-- Tab Buttons -->
    <div class="tab-buttons">
      <button class="tab-button bg-indigo-600 rounded-2xl" onclick="openTab(event, 'tab1')">Part 1</button>
      <button class="tab-button bg-indigo-600 rounded-2xl" onclick="openTab(event, 'tab2')">Part 2</button>
      <button class="tab-button bg-indigo-600 rounded-2xl" onclick="openTab(event, 'tab3')">Part 3</button>
    </div>
    </div>
<Layout/> 	
<script is:inline>
	
	
async function partOne() {
    const Api_URL='https://xirurgabdukarim.uz/wp-json/wp/v2/posts/?per_page=100';
	const row=document.getElementById("part1");
    row.innerHTML='';
	const response = await fetch(Api_URL);
	const json= await response.json();
        const part1 = JSON.stringify(json)
  	localStorage.setItem("part1", part1)
	var part1Data=localStorage.getItem("part1")
	var data=JSON.parse(part1Data)
	console.log(data)
	data.forEach(el => {
		 row.innerHTML+=`
		 <details class="w-full px-2 my-2 py-1 bg-gray-200 rounded">
         <summary class="bg-gray-700 text-white rounded px-3 font-bold" style="margin:10px 0; padding:20px; font-size: 18px;">${el.title.rendered}</summary>
         <p class="py-3">${el.content.rendered}</p>
		 </details>`
	});

}

partOne();


async function partTwo() {
    const Api_URL='https://xirurgabdukarim.uz/wp-json/wp/v2/part2/?per_page=100';
	const row=document.getElementById("part2");
    row.innerHTML='';
	const response = await fetch(Api_URL);
	const json= await response.json();
	const part2 = JSON.stringify(json)
  	localStorage.setItem("part2", part2)
	var part2Data=localStorage.getItem("part2")
	var data=JSON.parse(part2Data)
	console.log(data)
	data.forEach(el => {
		 row.innerHTML+=`
		 <details class="w-full px-2 my-2 py-1 bg-gray-200 rounded">
         <summary class="bg-gray-700 text-white rounded px-3 font-bold" style="margin:10px 0; padding:20px; font-size: 18px;">${el.title.rendered}</summary>
         <p class="py-3">${el.content.rendered}</p>
		 </details>`
	});

}

partTwo();

async function partThree() {
    const Api_URL='https://xirurgabdukarim.uz/wp-json/wp/v2/part3/?per_page=100';
	const row=document.getElementById("part3");
    row.innerHTML='';
	const response = await fetch(Api_URL);
	const json= await response.json();
	const part3 = JSON.stringify(json)
  	localStorage.setItem("part3", part3)
	var part3Data=localStorage.getItem("part3")
	var data=JSON.parse(part3Data)
	console.log(data)
	data.forEach(el => {
		 row.innerHTML+=`
		 <details class="w-full my-2 px-2 py-1 bg-gray-200 rounded">
         <summary class="bg-gray-700 text-white rounded px-3 font-bold" style="margin:10px 0; padding:20px; font-size: 18px;">${el.title.rendered}</summary>
         <p class="py-3">${el.content.rendered}</p>
		 </details>`
	});

}

partThree();


// Open the specified tab and hide others
    function openTab(event, tabName) {
      var i, tabContent, tabButton;
      
      // Get all tab content elements and hide them
      tabContent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
      }
      
      // Get all tab button elements and remove the active class
      tabButton = document.getElementsByClassName("tab-button");
      for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
      }
      
      // Show the selected tab content and set the button as active
      document.getElementById(tabName).style.display = "block";
      event.currentTarget.className += " active";
    }

</script>

<style>

      /* Tabbed Content Container */
    .tab-container {
      position:fixed;
      bottom:0;
      padding:10px 0;
      left:0;
      display:flex;
      justify-content:center;
      align-items:center
    }
    
    /* Tab Buttons */
    .tab-button {
      display: inline-block;
      padding: 10px 30px;
      margin: 0 8px;
      cursor: pointer;
      color:white;
    }
    
    .tab-button.active {
      background-color: #4338ca;
    }
    
    /* Tab Content */
    .tab-content {
      display: none;
      padding:10px;
    }
    
    /* Show active tab */
    .tab-content.active {
      display: block;
    }

		summary{
			width: 100%;
			margin: 10px 0;
			padding: 20px 20px;
			border: 1px solid #f6f6fa;
			border-radius: 5px;
			font-size: 18px;
			font-weight:bold;
		}

		

	</style>
