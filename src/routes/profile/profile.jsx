import React, { useEffect, useState } from 'react'
import { AiOutlineUser, AiOutlineUserSwitch, AiOutlineProject, AiOutlineMediumWorkmark } from 'react-icons/ai'
import reactSessionApi from 'react-session-api';
import StaffService from '../../services/Staff.service';
import UsersService from '../../services/Users.service';
import JobRequests from './job-requests';
import MyJobRequests from './my-job-requests';
import './profile.css'
import UserRequests from './user-requests';
import WorkUpload from './work-upload';

function Profile() {
    const [user, setUser] = useState(reactSessionApi.get('username')||null);
    const [role, setRole] = useState(reactSessionApi.get('role')||null);
    const [profile, setProfile] = useState(null);

    const loadResource = async (user) => {
        if(role==="User"){
            await UsersService.getUserByUsername(user).then((profile) => {
                setProfile(profile[0]);
            });
        } else if(role==="Staff"){
            console.log("Staff");
            await StaffService.getStaffByUsername(user).then((profile) => {
                setProfile(profile[0]);
            })
        }
        
    }

    useEffect(() => {
        loadResource(user);
        
        return () => {
        }
    }, []);
  return (
    <>
    <section id='init'>
        <h5>Your Personal Details</h5>
        <h2>Profile</h2>
        <div className='container profile__container'>
            <div className='header__socials'>
                <a title='Your Personal Details' href='#init' ><AiOutlineUser /></a>
                <a title='User Requests List' href='#user-requests' ><AiOutlineUserSwitch /></a>
                <a title='Jobs List' href='#work' ><AiOutlineMediumWorkmark /></a>
                <a title='My Works' href='#work' ><AiOutlineProject /></a>
            </div>
            <div className='header-image'>
                <div className='details__contatiner'>
                    <div className='profile-image'></div>
                    <div className='profile-details'>
                        {
                            profile&&(
                                <>
                                    <h1>{user}</h1>
                                    <p>Full Name: {profile.name}</p>
                                    <p>Role: {role}</p>
                                    <p>Email: {profile.email}</p>
                                    <p>Contact No.: {profile.contact}</p>
                                </>
                            )
                        }
                        
                    </div>
                </div>    
            </div>
            

        </div>
    </section>
    {
        role=="Staff"&&<UserRequests />
    }

    {
        role=="Staff"&&<JobRequests />
    }

    {
        role=="Staff"&&<WorkUpload />
    }

    {
        role=="User"&&<MyJobRequests />
    }

    

    </>
  )
}

export default Profile