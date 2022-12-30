import './App.css';
import Home from './components/Home'
import Place from "./components/Place";
import Discover from './components/Discover'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Home/>
      <Place/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
