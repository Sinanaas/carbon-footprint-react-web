import './App.css';
import Topbar from './Components/Topbar.js'
import ArticlePictureSection from './Components/ArticlePictureSection';
import PropaneCalc from './Components/PropaneCalc';
import ElectricityCalc from './Components/ElectricityCalc';
import WasteCalc from './Components/WasteCalc';
import FuelCalc from './Components/FuelCalc';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [totalSum, setTotalSum] = useState(0)
  const [fuelValue, setFuelValue] = useState(0)
  const [electricityValue, setElectricityValue] = useState(0)
  const [propaneValue, setPropaneValue] = useState(0)
  const [wasteValue, setWasteValue] = useState(0)

  const updateTotal = (value) => {
    setTotalSum(parseFloat(totalSum) + parseFloat(value))
  }

  const updateTotal2 = (fuelValues, propaneValues, electricityValues, wasteValues) => {
    if(fuelValues  !== 0 && fuelValues !== null) {
        updateTotal(fuelValues - fuelValue)
        setFuelValue(fuelValues)
    }
    if(propaneValues !== 0 && propaneValues !== null) {
      updateTotal(propaneValues - propaneValue)
      setPropaneValue(propaneValues)
    }
    if(electricityValues !== 0 && electricityValues !== null) {
      updateTotal(electricityValues - electricityValue)
      setElectricityValue(electricityValues)
    }
    if(wasteValues !== 0 && wasteValues !== null) {
      updateTotal(wasteValues - wasteValue)
      setWasteValue(wasteValues)
    }
    console.log("#Fuel Value: " + fuelValue + " Propane Value: " + propaneValue + " Electricity Value: " + electricityValue + " Waste Value: " + wasteValue)
    // console.log("Fuel Values: " + fuelValues + " Propane Values: " + prop  aneValues + " Electricity Values: " + electricityValues + " Waste Values: " + wasteValues)
  }

  return (
    <div className="App">
      <div className="topbar">
        <Topbar/>
      </div>
      <div className="article-picture">
        <ArticlePictureSection/>
      </div>
      <div className="calc">
        <div className="calc-section">
          <PropaneCalc updateTotalSum={updateTotal2} />
          <ElectricityCalc updateTotalSum={updateTotal2}/>
          <WasteCalc updateTotalSum={updateTotal2}/>
          <FuelCalc updateTotalSum={updateTotal2}/>
        </div>
        <div className="calc-result">
          <h1>Your Carbon Footprint: {totalSum}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
