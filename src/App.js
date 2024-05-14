import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from '@mui/material';
import Menu from './components/Navbar';
import Home from './components/Home';
import ProfileGroup from './components/ProfileGroup';
import CreateGroup from './components/CreateGroup';
import Login from './components/Login';
import PersonalArea from './components/PersonalArea'
import Profile from './components/Profile';


function App() { 
  return (
    <BrowserRouter>
    <Menu/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profileG" element={<ProfileGroup />} />
          <Route path="/crateG" element={<CreateGroup />} />
          <Route path="/log in" element={<Login />} />
          <Route path="/personal area" element={<PersonalArea />} />
          <Route path="/profile" element={<Profile />} />
          {/**profile edit */}
        </Routes>
      </Container>
    </BrowserRouter >
  );
}

export default App;
