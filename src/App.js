import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar.js'
import ArticlePictureSection from './Components/ArticlePictureSection';


function App() {
  return (
    <div className="App">
      <div className="topbar">
        <Topbar/>
      </div>
      <div className="article-picture">
        <ArticlePictureSection/>
      </div>
    </div>
  );
}

export default App;
