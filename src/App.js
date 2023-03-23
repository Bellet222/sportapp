import './adaptive.css'
import './App.css';
import Block1 from './Components/Block1';
import Header from './Components/Header.jsx';
import Block2 from './Components/Block2'
import Block3 from './Components/Block3';
import {Training} from './Pages/Training';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Register from './Pages/Register';


function App() {
  return (
    <Routes>
      <Route path='/Training' element={<Training/>}/>
      <Route path='/' element={(
        <div className="App">
          <Header/>
          <Block1/>
          <Block2/>
          <Block3/>
        </div>
      )}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
  );
}

export default App;
