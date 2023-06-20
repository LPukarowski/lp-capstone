import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:user' element={<UserProfile />} />
        <Route path='/:user/homebrew/:hbID' element={<UserItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
