import Login from './components/login/login';
import SigIn from './components/login/sigIn';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path='/sigin' element={ <SigIn /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;