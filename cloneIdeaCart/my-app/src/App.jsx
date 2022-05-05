import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Description } from './components/Description';
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/description' element={<Description/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
