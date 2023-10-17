import { useState } from 'react';
import './App.css';
import BurgerMenu from './layout/BurgerMenu';
import Breadcrumbs from './layout/Breadcrumbs';
import Core from './pages/Core';
import HomePage from './pages/HomePage';
import Ore from './pages/Ore';
import { Route, Routes } from "react-router-dom"
import Admission from './pages/Admission';

function App() {

  const [open, setOpen] = useState(false)
  console.log("i'm un AppContaier. the state here is", open)

  const childWrapperFunction = (val)=> {
    setOpen(val)
  }

  return (
    <div className='App'>
      <Breadcrumbs />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage open={open} />} />
          <Route path="admission" element={<Admission open={open} />} />
          <Route path="ore" >
            <Route index element={<Ore open={open}/>} />
            <Route path="Breadcrumbs" element={<Core open={open}/>} />
          </Route>
        </Route>
      </Routes>
      <BurgerMenu setOpen={childWrapperFunction} />
    </div>

  );
}

export default App;
