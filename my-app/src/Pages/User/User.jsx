import { Route, Routes } from 'react-router-dom'
import Login from "./Login/Login"
import Register from "./Register/Register"

import './User.css'

function User() {
  return <>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </>;
}
export default User;
