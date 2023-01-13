import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import SigIn from './components/login/sigIn';
import Home from './components/characters/home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path='/sigin' element={ <SigIn /> } />
        <Route path='/characters' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;