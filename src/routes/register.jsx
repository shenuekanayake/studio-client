import React from 'react'
import { useState } from 'react'
import { AiOutlineMail, AiOutlineLogin, AiOutlineHome } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import StaffService from '../services/Staff.service';
import UsersService from '../services/Users.service';

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        contact: ''
    });
    const [role, setRole] = useState('User');
    const [confirmp, setConfirmP] = useState('');

    const formAction = (event) => {
        const newData = {...data};
        newData[event.target.id] = event.target.value;
        setData(newData);

    }

    const submitAction = (event) => {
        event.preventDefault();

        if(confirmp==data.password){
            if(role==="User"){
                UsersService.addUser(data).then(() => navigate('/'));
            } else if(role==="Staff"){
                StaffService.addStaff(data).then(() => navigate('/'));
            }
        } else {
            console.log(confirmp+"|||"+data.password);
            alert("Password and Confirm Password dosen't match!");
        }
    }

  return (
    <section id='register'> 
        <h5>Create your own Account</h5>
        <h2>Register</h2>
        <div className='container form__container'>
            <div className='cards'>
                <article className='card'>
                    <AiOutlineHome className='icon'/>
                    <h4>Go Back</h4>
                    <Link to={'/home'}className='btn'>Send</Link>
                </article>
                <article className='card'>
                    <AiOutlineLogin className='icon'/>
                    <h4>Login Page</h4>
                    <Link to={'/login'}className='btn'>Send</Link>
                </article>
            </div>
            <form onSubmit={(e) => submitAction(e)}>
                <input type={'text'} onChange={(e) => formAction(e)} placeholder="Your Full Name" value={data.name} id='name' required />
                <input type={'text'} onChange={(e) => formAction(e)} placeholder="Prefered Username" value={data.username} id='username' required />
                <input type={'email'} onChange={(e) => formAction(e)} placeholder="Your Email Address" value={data.email} id='email' required />
                <input type={'text'} onChange={(e) => formAction(e)} placeholder="Your Contact Number" value={data.contact} id='contact' />
                <input type={'password'} onChange={(e) => formAction(e)} placeholder="Enter a Password" value={data.password} id='password' required />
                <input type={'password'} onChange={(e) => setConfirmP(e.target.value)} placeholder="Confirm entered Password" id='cpassword' required />
                <div class="col-sm-5" style={{display: 'flex', justifyContent: 'center'}}>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="User" onChange={(event) => setRole(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Online User</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Staff" onChange={(event) => setRole(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Staff Member</label>
                                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
        </div>
    </section>
  )
}

export default Register