import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import CreationMonsterPage from './Pages/CreationMonsterPage/CreationMonsterPage';
import UserProfile from './Components/UserProfile/UserProfile';
import Footer from './Components/Footer/Footer';
import './App.scss';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

function App() {
  const [createdMonster, setCreatedMonster] = useState({
    monster_name: "",
    monster_type: "",
    monster_size: "",
    challenge_rating: "",
    proficiency: "",
    armour_class: "",
    hitpoints: "",
    skills: [],
    speed: [],
    senses: [],
    ability_scores: {str: "", dex: "", con: "", int: "", wis: "", cha: ""},
    damage_vul: [],
    damage_resist: [],
    damage_immune: [],
    condition_immune: [],
    special_abilities: "",
    actions: "",
    description: ""
  });
  const [user, setUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const theme = createTheme({
    palette: {
        info: {
            main: '#090B17',
        },
        text: {
            primary: '#f5f5f5',
            secondary: '#1c1c1c',
            disabled: '#7c7c7c',
        },
        primary: {
            light: '#AFA4EF',
            main: '#1C1C1C',
            dark: '#090B17',
        },
    },
});
  useEffect(() => {
    console.log(sessionStorage.getItem('token'))
    const loggedInUser = sessionStorage.getItem('token')
    if(loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      setIsLoggedIn(true);
    };
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} setLoginError={setLoginError}/>} />
          {/* <Route path='/create/item' element={<CreationItemPage />} /> */}
          <Route path='/create/monster' element={<CreationMonsterPage isLoggedIn={isLoggedIn} createdMonster={createdMonster} setCreatedMonster={setCreatedMonster}/>} />
          <Route path='/library' element={<UserProfile isLoggedIn={isLoggedIn}/>} />
          {/* <Route path='/library/:name' element={<UserItem />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
