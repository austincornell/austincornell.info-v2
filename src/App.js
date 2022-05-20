import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import WorkHistory from './Pages/WorkHistory';
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function App() {
  //Tracking location for for animate presence
  const location = useLocation();
  return (
    <div className="App">
        <AnimatePresence>
          <Routes location={location} key="location.key">
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/education" exact element={<Education/>} />
            <Route path="/workHistory" exact element={<WorkHistory/>} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
