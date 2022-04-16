import './app.scss';
import MainPage from './components/mainpage/mainPage'
import Groups from './components/victorigroup/victoriGroup'
import Vacancy from './components/vacancy/vacancy'
import Contacts from './components/contacts/contacts'

import Contact from './components/icons/phone.png'
import Group from './components/icons/group.png'
import Info from './components/icons/info.png'
import Job from './components/icons/new-job.png'


import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="column">
          <div className="menu">
              <Link to="/">
                  <img src={Info} alt=""/>
              </Link>
              <Link to="/group">
                  <img src={Group} alt=""/>
              </Link>
              <Link to="/vacancy">
                  <img src={Job} alt=""/>
              </Link>
              <Link to="/contacts">
                  <img src={Contact} alt=""/>
              </Link>
          </div>
        </div>
        <Routes>
          <Route path="/contacts" element={Contacts}></Route>
        </Routes>
        <Routes>
          <Route path="/vacancy" element={Vacancy}></Route>
        </Routes>
        <Routes>
          <Route path="/group" element={Groups}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={MainPage}></Route>
        </Routes>
    </Router>
  );
}

export default App;
