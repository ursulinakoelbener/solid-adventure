import React, { useState } from 'react';
import CsvLoader from './components/CsvLoader';
import SeatChart from './components/SeatChart';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <h1>Grosser Rat Appenzell I.Rh.</h1>
      <CsvLoader onData={setData} />
      <SeatChart data={data} />
    </div>
  );
}

export default App;
