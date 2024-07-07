import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css'

import './App.css';
import Login from './app/authentication/Login/Login';
import Registration from './app/authentication/Registration/Registration';
import Home from './app/Home/Home';
import Sidebar from './app/main/Sidebar/Sidebar';
import Footer from './app/main/Footer/Footer';


function App() {
  return (
      <Router>
          <Routes>
              <Route path='' element={<Main_Home/>} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/registration' element={<Registration/>}/>
          </Routes>
      </Router>
  );
}

function Main_Home(){
    return(
        <>
        <Sidebar/>
            <Routes>
                <Route path='' element={<Home/>}/>
            </Routes>
        <Footer/>
        </>
    )
}
export default App;
