import { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

function App() {
  const [text,setText] = useState()
  const [isCopied, setCopied] = useClipboard(text);

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <div className="head">Speech Recognify</div>
      <div className="outline">
        <div className="main">
          {transcript}
        </div>
      </div>

      <div className="buttons" onClick={() => setText(transcript)}>
        <button className="button-89" onClick={setCopied}>{isCopied ? "Copied!" : "Copy to Clipboard"}</button>
        <button className="button-89" onClick={startListening}>Start Recording</button>
        <button className="button-89" onClick={SpeechRecognition.stopListening}>Stop Recording</button>
      </div>
    </div>
  );
}

export default App;
