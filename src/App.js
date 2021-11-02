
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import { BrowserRouter } from "react-router-dom";
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
