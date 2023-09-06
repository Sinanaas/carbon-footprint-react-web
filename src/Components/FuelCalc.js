import React, { useState } from 'react';

function FuelCalc() {
  const [fuelType, setFuelType] = useState('gasoline'); // Default to gasoline
  const [literUsed, setLiter] = useState('');
  const [results, setResults] = useState(null);

  function calculateEmissions(litersConsumed) {
    const emissionsData = {
      gasoline: {
        gramsPerLiter: 8887, // grams of CO2 per liter of gasoline
      },
      diesel: {
        gramsPerLiter: 10180, // grams of CO2 per liter of diesel
      },
    };

    const metricTonsPerLiter = emissionsData[fuelType].gramsPerLiter * 1e-3; // Convert to metric tons
    return litersConsumed * metricTonsPerLiter;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const metricTonsCO2 = calculateEmissions(parseFloat(literUsed));
    setResults(metricTonsCO2);
  };

  return (
    <div className="FuelContainer">
      <div className="fuel-header">
        <h1>Fuel Consumption</h1>
      </div>
      <div className="fuel-form">
        <form onSubmit={handleSubmit}>
          <h3>Fuel consumption in a year (liters)</h3>
          <label>
            Select Fuel Type:
            <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
              <option value="gasoline">Gasoline</option>
              <option value="diesel">Diesel</option>
            </select>
          </label>
          <input
            type="number"
            placeholder="Enter liters"
            value={literUsed}
            onChange={(e) => setLiter(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="fuel-results">
            <h1>Carbon Emissions:</h1>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FuelCalc;
