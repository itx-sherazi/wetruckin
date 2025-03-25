import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import FindLoad from './components/HeaderPage/Carriers/FindLoad';
import LoadMaps from './components/HeaderPage/Carriers/LoadMaps';
import PostTruck from './components/HeaderPage/Carriers/PostTruck';
import ViewTruck from './components/HeaderPage/Carriers/ViewTruck';
import FindTruck from './components/HeaderPage/Shippers/FindTruck';
import TruckMap from './components/HeaderPage/Shippers/TruckMap';
import { PostLeads } from './components/HeaderPage/Shippers/PostLeads';
import ViewLoad from './components/HeaderPage/Shippers/ViewLoad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/findload" element={<FindLoad/>} />
        <Route path="/loadmaps" element={<LoadMaps/>} />
        <Route path="/posttruck" element={<PostTruck/>} />
        <Route path="/viewtruck" element={<ViewTruck/>} />
        <Route path="/findtruck" element={<FindTruck/>} />
        <Route path="/truckmap" element={<TruckMap/>} />
        <Route path="/postlead" element={<PostLeads/>} />
        <Route path="/viewload" element={<ViewLoad/>} />
      </Routes>
    </Router>
  );
}

export default App;
