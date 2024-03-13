import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>Timer Example</p>
      <p>{timer.toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;
