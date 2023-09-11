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
    let totalSemua = 0
    if(fuelValues !== 0 && fuelValues !== null) {
      // if(fuelValue > fuelValues) {
        updateTotal(fuelValues - fuelValue)
        setFuelValue(fuelValues)
      // } else {
      //   updateTotal(fuelValues)

      // }
      // totalSemua += fuelValue
    }
    if(propaneValues !== 0 && propaneValues !== null) {
      setPropaneValue(propaneValues - propaneValue)
      updateTotal(propaneValues)
      // totalSemua += propaneValue
    }
    if(electricityValues !== 0 && electricityValues !== null) {
      setElectricityValue(electricityValues - electricityValue)
      updateTotal(electricityValues)
      // totalSemua += electricityValue
    }
    if(wasteValues !== 0 && wasteValues !== null) {
      setWasteValue(wasteValues - wasteValue)
      updateTotal(wasteValues)
      // totalSemua += wasteValue
    }
    // console.log("Fuel Value: ", fuelValue, "Propane Value: ", propaneValue, "Electricity Value: ", electricityValue, "Waste Value: ", wasteValue)
    // console.log("Propane Value: ", propaneValue)
    // console.log("Electricity Value: ", electricityValue)
    // console.log("Waste Value: ", wasteValue)
    // setTotalSum(totalSum + fuelValue)
    // setTotalSum(totalSum + propaneValue)
    // setTotalSum(totalSum + electricityValue)
    // setTotalSum(totalSum + wasteValue)
    // setTotalSum(totalSemua)
    // console.log(fuelValues, propaneValues, electricityValues, wasteValues)
    // console.log(fuelValue, propaneValue, electricityValue, wasteValue, "[", totalSum, "]")
  }

  return (
    <div className="App">
      <div className="topbar">
        <Topbar/>
      </div>
      <div className="left-right">
        <div className="calc-section">
          <div className="kiri">
            <PropaneCalc updateTotalSum={updateTotal2} />
            <ElectricityCalc updateTotalSum={updateTotal2}/>
          </div>
          <div className="kanan">
            <WasteCalc updateTotalSum={updateTotal2}/>
            <FuelCalc updateTotalSum={updateTotal2}/>
          </div>
        </div>
        <h1>Results</h1>
        <p>Total Sum: {totalSum}</p>
      </div>
    </div>
  );
}

export default App;
