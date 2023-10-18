import { BrowserClient, BrowserMicrophone  } from 'https://cdn.jsdelivr.net/npm/@speechly/browser-client@2.6/+esm' 

  const microphone = new BrowserMicrophone();
const client = new BrowserClient({
  appId: '9251b6f0-6c32-4910-8df2-cd832c67494d',
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
      if (newState === 'disconnected') {
        console.log('Client disconnected. Restarting...');
        startRecognition(); // Restart the recognition
      }
    });
  } catch (error) {
    console.error('Error starting recognition:', error);
  }
}


let fullTranscript = '';

micBtn.addEventListener('click', startRecognition);


client.onSegmentChange((segment) => {
  const text = segment.words.map((word) => word.value).join(' ');
  if (segment.isFinal) {
    const capitalizedText = capitalize(text) + '. ';
    fullTranscript += capitalizedText;
    localStorage.setItem('transcript', fullTranscript);
  }
});

function capitalize(sentence) {
return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}


