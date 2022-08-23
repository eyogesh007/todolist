import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login.js'
import Signup from './signup.js'
import Todo from './todo.js'
import Pagenotfound from './Pagenotfound.js'
import react,{useState} from 'react'

function App() {
  const [token,setToken] = useState(null);
  return (
    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login t={[token,setToken]}/>} />
            <Route path="/todo" element={<Todo t={[token,setToken]}/>} />
            <Route path="/pagenotfound" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
