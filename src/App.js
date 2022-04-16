
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog'
import Login from './components/Login/Login';
import About from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element = {<Login></Login>}></Route>
      <Route path='/about' element = {<About></About>}></Route>
      </Routes>


    </div>
  );
}

export default App;
