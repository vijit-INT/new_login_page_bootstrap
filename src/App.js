import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Register />}/>
        <Route path='/userList' element={<UserList />}/>
        <Route path='/logout' element={<Logout />}/>
      </Routes>
    </div>
  );
}

export default App;
