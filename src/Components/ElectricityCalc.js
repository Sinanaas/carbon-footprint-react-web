import React, { useState } from 'react';
import './ElectricityCalc.css';

function ElectricityCalc() {
  const [kWhUsed, setkWhUsed] = useState('');
  const [results, setResults] = useState(null);

  function calculateElectricityEmissions(kWhUsed) {
    const lbsCO2PerMWhGenerated = 884.2; // lbs of CO2 per megawatt-hour generated
    const MWhDeliveredToGeneratedRatio = 1 / (1 - 0.073); // Ratio of MWh delivered to MWh generated
    const kWhToMWhConversion = 1 / 1000; // Convert kWh to MWh
    const lbToMetricTonConversion = 1 / 2204.6; // Convert lbs to metric tons
  
    const metricTonsCO2 = kWhUsed * lbsCO2PerMWhGenerated * MWhDeliveredToGeneratedRatio * kWhToMWhConversion * lbToMetricTonConversion;
    return metricTonsCO2;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const metricTonsCO2 = calculateElectricityEmissions(parseFloat(kWhUsed));
    setResults(metricTonsCO2);
  };

  return (
    <div className="ElectricityContainer">
      <div className="electricity-header">
        <h1>Electricity Consumption</h1>
      </div>
      <div className="electricity-form">
        <form onSubmit={handleSubmit}>
          <h3>Electricity consumption in a year (kWh)</h3>
          <input
            type="number"
            placeholder="Enter kWh"
            value={kWhUsed}
            onChange={(e) => setkWhUsed(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="electricity-results">
            <h1>Carbon Emissions:</h1>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ElectricityCalc;
