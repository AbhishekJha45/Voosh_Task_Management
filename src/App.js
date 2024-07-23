import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Task from './Components/Task/Task';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/login" element={<Signin />} />
            <Route path="/task" element={<Task/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
