import { useState } from "react";

const App = () => {
  const [isCountdownStart, setIsCountdownStart] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);
  const [timer, setTimer] = useState<string>("10:00");

  const handleStart = () => {
    setIsCountdownStart(!isCountdownStart);
  };

  const currentTime = new Date();
  console.log(currentTime);

  const handleReset = () => {};

  console.log(isCountdownStart);

  return (
    <>
      <div>{timer}</div>
      {isCountdownStart ? (
        <button onClick={handleStart}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default App;
