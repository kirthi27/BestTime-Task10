import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Carousell from './components/Carousell';
import Home from './components/pages/home';
import Places from './components/pages/places';
import Bestplace from './components/pages/best_time';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App() {
  return (
  <Router>
      <Navbar />
      {/* <Carousell /> */}
      <Routes>
      <Route path='/Carousell' element={<Carousell />} /> 
        <Route path='/home' element={<Home />}/>
        <Route path='/places' element={<Places />}/>
        <Route path='/Bestplace' element={<Bestplace />}/>
        </Routes>
  </Router>
)
}
    

export default App;
