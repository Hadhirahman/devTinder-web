
import { Route, Routes,BrowserRouter } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
function App() {

  return (
    <>
    <BrowserRouter basename="/">     
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<div>Dashboard Page</div>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="*" element={<div>404 Not Found</div>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
