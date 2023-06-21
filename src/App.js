import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import CreationMonsterPage from './Pages/CreationMonsterPage/CreationMonsterPage';
import './App.css';

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
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/create/item' element={<CreationItemPage />} /> */}
        <Route path='/create/monster' element={<CreationMonsterPage createdMonster={createdMonster} setCreatedMonster={setCreatedMonster}/>} />
        {/* <Route path='/:user' element={<UserProfile />} /> */}
        {/* <Route path='/:user/library' element={<UserItem />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
