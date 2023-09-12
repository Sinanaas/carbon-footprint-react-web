import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar.js'
import ArticlePictureSection from './Components/ArticlePictureSection';
import PropaneCalc from './Components/PropaneCalc';
import ElectricityCalc from './Components/ElectricityCalc';
import WasteCalc from './Components/WasteCalc';
import FuelCalc from './Components/FuelCalc';

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <Topbar/>
      </div>
      <div className="article-picture">
        <ArticlePictureSection/>
      </div>
      <div className="calc-section">
        <PropaneCalc/>
        <ElectricityCalc/>
        <WasteCalc/>
        <FuelCalc/>
      </div>
    </div>
  );
}

export default App;
