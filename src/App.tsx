import { useEffect, useState } from "react";
import "./App.css";
import audio from "./assets/10sec-countdown-bell-sound-79584.mp3";

const App = () => {
  const [minute, setMinute] = useState(25);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [play, setPlay] = useState(false);
  const test = new Audio(audio);

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        clearInterval(interval);
        if (second === 0) {
          if (minute !== 0) {
            setSecond(59);
            setMinute(minute - 1);
          } else {
            setMinute(5);
            setSecond(0);
          }
        } else {
          setSecond(second - 1);
        }
      }, 1000);
    }
  }, [minute, second, isStart]);
  const paddedMinute = minute <= 9 ? "0" + minute : minute;
  const paddedSecond = second <= 9 ? "0" + second : second;

  if (play === true && minute <= 0 && second <= 16) {
    test.play();
  }

  const handleStart = () => {
    setIsStart(true);
    setPlay(true);
  };

  const handleStop = () => {
    setIsStart(false);
    test.pause();
  };

  const handleReset = () => {
    setMinute(25);
    setSecond(0);
    setIsStart(false);
  };

  const handleSwitchPomodoro = () => {
    setMinute(1);
    setSecond(0);
  };

  const handleSwitchShortBreak = () => {
    setMinute(5);
    setSecond(0);
    setIsStart(false);
  };

  const handleSwitchLongBreak = () => {
    setMinute(15);
    setSecond(0);
    setIsStart(false);
  };

  return (
    <>
      <div className="wrapper">
        <div>{isStart && "Focus mode on"}</div>
        <div className="typeBtnWrapper">
          <button className="typeBtn" onClick={handleSwitchPomodoro}>
            Pomodoro
          </button>
          <button className="typeBtn" onClick={handleSwitchShortBreak}>
            Short Break
          </button>
          <button className="typeBtn" onClick={handleSwitchLongBreak}>
            Long Break
          </button>
        </div>
        <div className="time">
          {paddedMinute} : {paddedSecond}
        </div>
        <div className="btnWrapper">
          <div>
            {isStart ? (
              <button className="btnStop" onClick={handleStop}>
                Stop
              </button>
            ) : (
              <button className="btn" onClick={handleStart}>
                Start
              </button>
            )}
          </div>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
