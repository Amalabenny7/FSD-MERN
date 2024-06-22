import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Listmap from './components/Listmap';
import Api from './components/Api';
import Sampleuse from './components/Sampleuse';
import Getcard from './components/Getcard';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/'element={<Registration/>}/>
    <Route path='/sin'element={<Signup/>}/>
    <Route path='/b'element={<StateBasics/>}/>
    <Route path='/c'element={<Counter/>}/>
    <Route path='/l'element={<Listmap/>}/>
    <Route path='/a'element={<Api/>}/>
    <Route path='/s'element={<Sampleuse/>}/>
    <Route path='/g'element={<Getcard/>}/>
    </Routes>
    </div>
  );
}


export default App;
