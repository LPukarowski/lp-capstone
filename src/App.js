import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import CreationMonsterPage from './Pages/CreationMonsterPage/CreationMonsterPage';
import UserProfile from './Components/UserProfile/UserProfile';
import Footer from './Components/Footer/Footer';
import './App.scss';

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
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} setLoginError={setLoginError}/>} />
        {/* <Route path='/create/item' element={<CreationItemPage />} /> */}
        <Route path='/create/monster' element={<CreationMonsterPage isLoggedIn={isLoggedIn} createdMonster={createdMonster} setCreatedMonster={setCreatedMonster}/>} />
        <Route path='/library' element={<UserProfile isLoggedIn={isLoggedIn}/>} />
        {/* <Route path='/library' element={<UserItem />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
