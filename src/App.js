import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Body from './Components/Body';
import Signup from './Components/Signup';
import Forgetpwd from './Components/Forgetpwd';
import Notfound from './Components/Notfound';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Body />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/password-reset' element={<Forgetpwd />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
