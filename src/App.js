//import logo from './logo.svg';
import './App.css';
// 1. import
//import Header from './header';

import { Route, Routes } from 'react-router-dom';

import Home from './home/home';
import Post from './post/post';
import Header from './layout/header';

function App() {
  return (
    <div>
      <div>
        <Header/>
        <main ClassName='body'>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/blog' element = {<Post />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
