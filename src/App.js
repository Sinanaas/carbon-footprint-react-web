import './App.css';
import Topbar from './Components/Topbar.js'
import ArticlePictureSection from './Components/ArticlePictureSection';
import PropaneCalc from './Components/PropaneCalc';
import ElectricityCalc from './Components/ElectricityCalc';
import WasteCalc from './Components/WasteCalc';
import FuelCalc from './Components/FuelCalc';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Rank from './Components/Rank';
import Map from './Components/Map';

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
        <h1 style={{color: '#313638'}}>Calculate your carbon footprint now!</h1>
        <div className="calc-section">
          <PropaneCalc updateTotalSum={updateTotal2} />
          <ElectricityCalc updateTotalSum={updateTotal2}/>
          <WasteCalc updateTotalSum={updateTotal2}/>
          <FuelCalc updateTotalSum={updateTotal2}/>
        </div>
        <div className="calc-result">
          <h2>Total Carbon Footprint: {totalSum} metric tons CO2</h2>
        </div>
        <div className="calc-disclaimer">
          <div className="disclaimer-title">
            <p><b>Disclaimer:</b></p>
          </div>
          <div className="disclaimer-text">
            <p>Calculating your carbon footprint involves various metrics, each contributing to a comprehensive assessment of your environmental impact. However, on this platform, we focus on four key metrics to provide you with a simplified estimate of your carbon footprint.</p>
          </div>
        </div>
      </div>
      <div className="map-div bg-white">
        <Map />
        <Rank />
      </div>
      <Footer />
    </div>
  );
}

export default App;
