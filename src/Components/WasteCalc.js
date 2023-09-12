import React, { useState } from 'react';
import './WasteCalc.css';

function WasteCalc() {
  const [tonUsed, setTon] = useState('');
  const [results, setResults] = useState(null);

  function calculateWasteEmissions(tonsRecycled) {
    const emissionsSavedPerTon = 2.89; // metric tons CO2 equivalent per ton of waste recycled instead of landfilled
    const metricTonsCO2Saved = tonsRecycled * emissionsSavedPerTon;
    return metricTonsCO2Saved;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const metricTonsCO2 = calculateWasteEmissions(parseFloat(tonUsed));
    setResults(metricTonsCO2);
  };

  return (
    <div className="WasteContainer">
      <div className="waste-header">
        <h1>Waste Consumption</h1>
      </div>
      <div className="waste-form">
        <form onSubmit={handleSubmit}>
          <h3>Waste consumption in a year (tons)</h3>
          <input
            type="number"
            placeholder="Enter tons"
            value={tonUsed}
            onChange={(e) => setTon(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="waste-results">
            <h1>Carbon Emissions:</h1>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WasteCalc;
