import React, { useState } from 'react';
import './PropaneCalc.css';

function PropaneCalc() {
  const [litersUsed, setLitersUsed] = useState('');
  const [results, setResults] = useState(null);

  function calculatePropaneEmissions(litreUsed) {
    const gallonsUsed = litreUsed/3.785412
    const kgCO2PerBarrel = 235.0; // kg of CO2 per barrel of propane
    const barrelsPerGallon = 1 / 42; // Convert gallons to barrels
    const kgToMetricTonConversion = 1 / 1000; // Convert kg to metric tons
  
    const metricTonsCO2 = gallonsUsed * barrelsPerGallon * kgCO2PerBarrel * kgToMetricTonConversion;
    return metricTonsCO2;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const metricTonsCO2 = calculatePropaneEmissions(parseFloat(litersUsed));
    setResults(metricTonsCO2);
  };

  return (
    <div className="PropaneContainer">
      <div className="propane-header">
        <h1>Propane Consumption</h1>
      </div>
      <div className="propane-form">
        <form onSubmit={handleSubmit}>
          <h3>Propane consumption in a year (liters)</h3>
          <input
            type="number"
            placeholder="Enter liters"
            value={litersUsed}
            onChange={(e) => setLitersUsed(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="propane-results">
            <h1>Carbon Emissions:</h1>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropaneCalc;
