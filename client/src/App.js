import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Landing from "./components/Landing_page/Landing";
import CreationForm from "./components/Creation_form/CreationForm";
import Detail  from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Landing/>}/> 
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/videogames' element={<CreationForm/>} />
      <Route exact path= '/videogame/:id' element={<Detail/>} />
      <Route path="*" element={<Landing/>} />
    </Routes>
  </div>
  );
}

export default App;
