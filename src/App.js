import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar.js'
import ArticlePictureSection from './Components/ArticlePictureSection';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Rank from './Components/Rank';
import Map from './Components/Map';


function App() {
  return (
    <>
      <div className="App">
        <header className="topbar">
          <Topbar />
        </header>

        <Container className="bg-white">
          <Map />
          {/* <main className="article-picture">
            <ArticlePictureSection />
          </main> */}
          <Rank />
        </Container>

        <Footer />
      </div>

    </>
  );
}

export default App;
