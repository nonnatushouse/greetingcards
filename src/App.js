import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MSxmas2023 from './MSxmas2023';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="MSxmas2023" element={<MSxmas2023/>}/>

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
