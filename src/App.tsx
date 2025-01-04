import './App.css'
import { GlobalConfiguration } from './components/GlobalConfigration'
import { ThemeWrapper } from './components/ThemeWrapper'
import { Homepage } from './pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './pages/AddUser';
import Chats from './pages/Chats';
import EditUser from './pages/EditUser';
import Battery from './pages/Battery';
import Broadcast from './pages/Broadcast';
import BroadcastChat from './pages/BroadcastChat';
import BroadcastInfo from './pages/BroadcastInfo';
import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from 'react';

function App() {
  
  return (
<GlobalConfiguration>
<ThemeWrapper>
  <>
  <BrowserRouter>
{/* <TransitionGroup>
            <CSSTransition  timeout={2000} classNames="scroll"> */}
              <AnimatePresence mode="wait">

  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/adduser" element={<AddUser />} />
    <Route path="/edituser" element={<EditUser />} />
    <Route path="/chats" element={<Chats />} />
    <Route path="/broadcast" element={<Broadcast />} />
    <Route path="/battery" element={<Battery />} />
    <Route path="/broadcastchat" element={<BroadcastChat />} />
    <Route path="/broadcastinfo" element={<BroadcastInfo />} />
  </Routes>
              </AnimatePresence>
    {/* </CSSTransition>
          </TransitionGroup> */}
    </BrowserRouter>
    </>
</ThemeWrapper>
</GlobalConfiguration>
  )
}

export default App


