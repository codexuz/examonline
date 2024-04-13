const DG_KEY = "7e152e9866bbc69d6487e1bea4b6c250aeeab7ca";
const DG_URL = 'https://api.deepgram.com/v1/listen?model=nova-2&smart_format=true';
const headers = {
    'Authorization': `Token ${DG_KEY}`,
    'Content-Type': 'application/json'
};

export const transcribeAudio = async (audioURL) => {
    try {
        const res = await fetch(DG_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ url: audioURL }) // Assuming you need to provide the audio URL in the request body
        });

        if (!res.ok) {
            throw new Error('Failed to transcribe audio');
        }

        const result = await res.json();
        return result;
    } catch (error) {
        console.error('Error transcribing audio:', error);
        throw error; // Propagate the error for handling by the caller
    }
};



export const scoreSpeaking = async (transcription) => {

  const res =  await fetch('https://generate.edumoacademy.uz/report/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({transcript: transcription}),
  });

  const data = await res.json()
  const response = JSON.parse(data)
  return response
}