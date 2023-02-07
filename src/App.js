import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import './App.css';
import Login from './Login';
import Register from './Register';
import Table from './Table';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path={"/"} element={<Login/>}></Route>
    <Route path={"/Table"} element={<Table/>}></Route>
    <Route path={"/Register"} element={<Register/>}></Route>
    <Route path={"/"} element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
