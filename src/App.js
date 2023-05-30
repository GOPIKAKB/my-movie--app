import logo from './logo.svg';
import './App.css';
import NavBar from './Movie/NavBar';
import ComedyMovie from './Movie/ComedyMovie';
import LatestMovie from './Movie/LatestMovie';
import PopularMovie from './Movie/PopularMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Home from './Movie/Home';
import DetailPage from './Movie/DetailPage';
import LatestDetailPage from './Movie/LatestDetailPage';
import { createContext, useState } from 'react';

export const myContext = createContext();
function App() {
  const [comedyData, setComedyData] = useState([])
  const [LatestData, setLatestData] = useState([])
  const [popularData, setpopularData] = useState([])
  return (
    <div>

      <Card />
      <myContext.Provider value={[comedyData, setComedyData, LatestData, setLatestData, popularData, setpopularData]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/comedy-movie' element={<ComedyMovie />}></Route>
            <Route path='/latest-movie' element={<LatestMovie />}></Route>
            <Route path='/popular-movie' element={<PopularMovie />}></Route>
            <Route path='/comedy/:parameter' element={<DetailPage />}></Route>
            <Route path='/latest/:parameter' element={<LatestDetailPage />}></Route>
            <Route path='/popuar/:parameter' element={<LatestDetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
