import './App.css'
import { GlobalConfiguration } from './components/GlobalConfigration'
import { ThemeWrapper } from './components/ThemeWrapper'
import { Homepage } from './pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './pages/AddUser';
import Chats from './pages/Chats';
import EditUser from './pages/EditUser';

function App() {


  return (
<GlobalConfiguration>
<ThemeWrapper>

  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/adduser" element={<AddUser />} />
    <Route path="/edituser" element={<EditUser />} />
    <Route path="/chats" element={<Chats />} />
  </Routes>
    </BrowserRouter>
    </>
</ThemeWrapper>
</GlobalConfiguration>
  )
}

export default App


