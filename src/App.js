import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { useUserContext } from './hooks/useUserContext';

function App() {
  const { user } = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={
            <>
              {user ? <Dashboard/> : <Navigate to="/login"/>}
            </>
          }/>
          <Route exact path='/login' element={
            <>
              {user ? <Navigate to="/"/> : <Login/>}
            </>
          }/>
          <Route exact path='/signup' element={
            <>
              {user ? <Navigate to="/"/> : <Signup/>}
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
