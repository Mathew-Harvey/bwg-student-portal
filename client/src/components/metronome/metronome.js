import { useMetronome } from 'react-metronome-hook';
import click1 from './click1.wav';
import click2 from './click2.wav';
import "./metronome.css"

 
function Metronome() {
 
  const {
    startMetronome,
    isTicking,
    stopMetronome,
    bpm,
    setBpm,
    setBeatsPerMeasure,
    setSounds 
  } = useMetronome(60, 4, [click1, click2]);
  
  return (
    <div>
        <h1> Handstand Second Timer </h1>
      <button id="metronomeBtn" onClick={isTicking ? stopMetronome : startMetronome}>
        {isTicking ? "Stop" : "Start"}
      </button>
      {/* <div>{bpm}</div>
      <input placeholder="Change BPM" onChange={e => setBpm(e.target.value)} />
      <input placeholder="Change beats per measure" onChange={e => setBeatsPerMeasure(e.target.value)} />
      <button onClick={() => setSounds([click1, click2])}>Change sounds</button> */}
    </div>
  );
  
}
export default Metronome