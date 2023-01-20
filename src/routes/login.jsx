import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLogin, AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Session from 'react-session-api';
import UsersService from '../services/Users.service';
import EventEmitter from '../utils/EventEmitter';

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const formAction = (event) => {
        const newData = {...data};
        newData[event.target.id] = event.target.value;
        setData(newData);
        console.log(data);
    }

    const submitAction = async (event) => {
        event.preventDefault();
        await UsersService.getUserForLogin(data).then((data) => {
            console.log(data);
            if(data.user.logged){
                Session.set("username", data.user.username);
                Session.set("role", data.user.role);

                EventEmitter.emit("UserLogged", {logged: true});
                navigate('/profile');
            } else {
                alert("Check Entered Credentials again!");
            }
        })
    }
  return (
    <section id='register'> 
        <h5>Sign in to your Account</h5>
        <h2>Login</h2>
        <div className='container form__container'>
            <div className='cards'>
                <article className='card'>
                    <AiOutlineHome className='icon'/>
                    <h4>Go Back</h4>
                    <Link to={'/home'}className='btn'>Send</Link>
                </article>
                <article className='card'>
                    <AiOutlineUserAdd className='icon'/>
                    <h4>Register Page</h4>
                    <Link to={'/register'}className='btn'>Send</Link>
                </article>
            </div>
            <form onSubmit={(e) => submitAction(e)}>
                <input type={'text'} onChange={(e) => formAction(e)} placeholder="Your Username" id='username' value={data.username} required />
                <input type={'password'} onChange={(e) => formAction(e)} placeholder="Enter your Password" id='password' value={data.password} required />
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
    </section>
  )
}

export default Login