
import React, { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimer(0);
  };

  const handleSave = () => {
    const newResult = {
      id: results.length + 1,
      time: timer,
    };
    setResults((prevResults) => [...prevResults, newResult]);
  };

  return (
    <div>
      <h1>Секундомер</h1>
      <div>
        <span>{timer}</span>
      </div>
      <button onClick={handleStart}>Старт</button>
      <button onClick={handleStop}>Стоп</button>
      <button onClick={handleReset}>Сброс</button>
      <button onClick={handleSave}>Сохранить результат</button>
      <h2>Результаты</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.time}</li>
          ))}
        </ul>
      ) : (
        <p>Нет сохраненных результатов.</p>
      )}
    </div>
  );
}



export default App;
