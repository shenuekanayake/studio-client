import React, { useEffect, useState } from 'react'
import UsersService from '../../services/Users.service';

function StaffRequests() {
    const [users, setUsers] = useState([]);
    const [approvedUsers, setApprovedUsers] = useState([]);
    const [notapprovedUsers, setNotApprovedUsers] = useState([]);
    const [blockedUsers, setBlockedUsers] = useState([]);
    const [mode, setMode] = useState("all");

    const loadUsers = async () => {
        await UsersService.getUsers().then((users) =>{
            console.log("load");
            setUsers([]);
            setApprovedUsers([]);
            setNotApprovedUsers([]);
            setUsers(users);
            users.forEach((user) => {
                if(user.accepted){
                    setApprovedUsers(auser => [...auser, user]);
                } else {
                    setNotApprovedUsers(nusers => [...nusers, user]);
                }
            })
        });
    }

    const updateUser = async (user, result) => {
        user.accepted = result;
        await UsersService.updateUser(user._id, user).then(() => {
            
        })
    }

    const deleteUser = async (user) => {
        await UsersService.deleteUser(user._id).then(() => {
            
        })
    }

    useEffect(() => {
        loadUsers();
        
        return () => {
        }
    }, []);

  return (
    <section id='user-requests'>
        <h5>Other users' Information</h5>
        <h2>User Requeusts</h2>
        <center>
        <button className='btn' onClick={() => setMode('approved')}>Approved Users</button>|<button className='btn' onClick={() => setMode('not-approved')}>New Users</button>|<button className='btn' onClick={() => setMode('all')}>All Users</button>
        </center>
        <br></br>
        <div className='container user__container'>
            {
                mode=="all"?<>
                {
                    users&&users.length>0&&users.map((user, index) => <>
                        <span>{index+1}</span>
                        <span>{user.username}</span>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <span>{user.email}</span>
                        <span>{user.contact}</span>
                        <div>
                            <button className='btn'>Visit</button>|
                            <button className='btn btn-primary' onClick={() => {updateUser(user, true); setUsers(users.filter(item => item.id !== user.id)); setApprovedUsers(approvedUsers =>[...approvedUsers, user])}}>Accept</button>
                        </div>
                    </>)
                }
                </>:mode=="approved"?

                <>
                {
                    approvedUsers&&approvedUsers.length>0&&approvedUsers.map((user, index) => <>
                        <span>{index+1}</span>
                        <span>{user.username}</span>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <span>{user.email}</span>
                        <span>{user.contact}</span>
                        <div>
                            
                            <button className='btn btn-primary' onClick={() => {updateUser(user, false); setApprovedUsers(users.filter(item => item.id !== user.id)); setApprovedUsers(approvedUsers =>[...approvedUsers, user])}}>Block</button>
                            |<button className='btn' onClick={() => {updateUser(user, false); setApprovedUsers(users.filter(item => item.id !== user.id)); setApprovedUsers(approvedUsers =>[...approvedUsers, user])}}>Remove</button>
                        </div>
                    </>)
                }
                </>
                :
                <>
                {
                    notapprovedUsers&&notapprovedUsers.length>0&&notapprovedUsers.map((user, index) => <>
                        <span>{index+1}</span>
                        <span>{user.username}</span>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                        <span>{user.email}</span>
                        <span>{user.contact}</span>
                        <div>
                            <button className='btn'>Visit</button>|
                            <button className='btn btn-primary' onClick={() => {updateUser(user, true); setNotApprovedUsers(users.filter(item => item.id !== user.id)); setApprovedUsers(approvedUsers =>[...approvedUsers, user])}}>Accept</button>
                        </div>
                    </>)
                }
                </>
            }

            

            

            {/* <span>2</span>
            <span>Some Thing</span>
            <span>Some Thing</span>
            <span>Some Thing</span>
            <span>Some Thing</span>
            <span>Some Thing</span>
            <div>
                <button className='btn'>Visit</button>|
                <button className='btn btn-primary'>Accept</button>
            </div> */}

        </div>
    </section>
  )
}

export default StaffRequests