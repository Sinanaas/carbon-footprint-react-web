  import './App.css';
  import Topbar from './Components/Topbar.js'
  import ArticlePictureSection from './Components/ArticlePictureSection';
  import { useState } from 'react';
  import Footer from './Components/Footer';
  import Rank from './Components/Rank';
  import Map from './Components/Map';
  import Calculator from './Components/Calculator';

  function App() {

    return (
      <div className="App">
        <header>
          <Topbar />
        </header>
        <div className="article-picture">
          <ArticlePictureSection />
        </div>
        <div className="calc">
          <Calculator />
        </div>
        <div className='container-fluid row'>
          <div className="map col-4 pt-3">
            <Rank />
          </div>
          <div className='rank col-8 pt-5'>
            <Map />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  export default App;
