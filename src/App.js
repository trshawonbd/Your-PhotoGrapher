
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog'
import Login from './components/Login/Login';
import Register from './components/Register/Register'; 
import About from './components/AboutMe/AboutMe';
import NotFound from './components/Shared/NotFound/NotFound';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useEffect, useState } from 'react';
export const ServiceContext = createContext();

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
}
    , [])

    const value = [services, setServices] ;

  return (
    <div className="App">
      <ServiceContext.Provider value={value}>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element = {<Login></Login>}></Route>
      <Route path='/register' element = {<Register></Register>}></Route>
      <Route path='/about' element = {<About></About>}></Route>
      <Route path='/service/:id' element = {<CheckOut></CheckOut>}></Route>
      <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>

      </ServiceContext.Provider>
    </div>
  );
}

export default App;
