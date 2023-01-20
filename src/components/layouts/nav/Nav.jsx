import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineHome, AiOutlineContacts, AiOutlineFileImage, AiOutlineBook, AiOutlineLogin, AiOutlineUser, AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai'
import { Link, Navigate } from 'react-router-dom';
import Session from 'react-session-api';
import EventEmitter from '../../../utils/EventEmitter';
import './nav.css'

function Nav() {
  const [active, setActive] = useState("#home");
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);
  const [chat, setChat] = useState(false);

  const changeLog = () => {
    setLogged(!logged); 
    setUsername(Session.get("username")); 
    setRole(Session.get("role"));
  }

  const changeLogout = () => {
    console.log("Hii");
    setLogged(false); 
    Session.clear();
    setUsername(null);
    setRole(null);
    setLogged(false);
    EventEmitter.emit("UserLogout", {logged:false});
    window.location.href = "/";
    // return { component: () => <Navigate to="/" /> }
  }

  const spawnChat = () => {
    setChat(!chat);
    EventEmitter.emit("ShowChat", {show: chat});
  }

  useEffect(() => {
      
      const listner = EventEmitter.addListener("UserLogged", changeLog);
      
      return () => {
      }
  });
  return (
    <nav className='nav'>
      <Link to='/' className={active==="#home"?'active':''} onClick={() => setActive("#home")}><AiOutlineHome/></Link>
      <a href='#about' className={active==="#about"?'active':''} onClick={() => setActive("#about")}><AiOutlineBook/></a>
      <a href='#portfolio' className={active==="#portfolio"?'active':''} onClick={() => setActive("#portfolio")}><AiOutlineFileImage/></a>
      <a href='#contact' className={active==="#contact"?'active':''} onClick={() => setActive("#contact")}><AiOutlineContacts/></a>
      {
        !username?
        <>
          <Link to='/login' className={active==="#login"?'active':''} onClick={() => setActive("#login")}><AiOutlineLogin/></Link>
        </>
        :
        <>
          <Link to='/profile' className={active==="#user"?'active profile':'profile'} onClick={() => setActive("#user")}><AiOutlineUser/></Link>
          <a   className={active==="#chat"?'active':''} onClick={() => {setActive("#chat"); spawnChat();}}><AiOutlineMessage/></a>
          <a href='#' onClick={changeLogout}><AiOutlineLogout/></a>
        </>
      }
      
      
    </nav>
  )
}

export default Nav