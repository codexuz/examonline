import { BrowserClient, BrowserMicrophone  } from 'https://cdn.jsdelivr.net/npm/@speechly/browser-client@2.6/+esm' 

  const microphone = new BrowserMicrophone();
const client = new BrowserClient({
  appId: '89d6eff7-77b5-4e79-82b7-53450cfb27f8',
  logSegments: true,
  debug: true,
})

const micBtn = document.getElementById('start-btn');

const attachMicrophone = async () => {
  if (microphone.mediaStream) return;
  await microphone.initialize();
  await client.attach(microphone.mediaStream);
};



async function stopRecognition(){
    await client.stop();
    
  }

  

// Function to start recognition and handle disconnections

async function startRecognition() {
  try {
    await attachMicrophone();
    await client.start();

    // Handle client state changes
    client.onStateChange((newState) => {
      if (newState === 'Disconnected') {
        console.log('Client disconnected. Restarting...');
        startRecognition(); // Restart the recognition
      }
    });
  } catch (error) {
    console.error('Error starting recognition:', error);
  }
}


let fullTranscript = [];

micBtn.addEventListener('click', startRecognition);


client.onSegmentChange((segment) => {
  const text = segment.words.map((word) => word.value).join(' ');
  localStorage.setItem('transcript', fullTranscript);
  if (segment.isFinal) {
    const capitalizedText = capitalize(text) + '. ';
    var newText+=capitalizedText
    fullTranscript.push(newText)
  }
});

function capitalize(sentence) {
return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}


