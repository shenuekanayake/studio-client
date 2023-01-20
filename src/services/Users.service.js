import axios from 'axios';
import {handleErrors} from './error_handling';

// import user from '../models/Patient';


const path = "http://localhost:5000/users";
var user_list = [];

class UserService {

    async getUsers(){
        user_list = [];
        await axios.get(path).then((response)=>{
            user_list = [];
            response.data.forEach(doc=>{
                user_list.push(doc);
            });
            // console.log(user_list);
            // return user_list;
        }).catch(handleErrors);
        return user_list;
    }

    async getUser(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            
            obj =  response.data;
            // response.data.forEach(doc=>{
            //     return doc;
            // });
        }).catch(handleErrors);
        return obj;
    }

    async getUserForLogin(user){
        var obj = null;
        await axios.post(`${path}/login`, user).then((response)=>{
            obj =  response.data;
            console.log(obj);
        }).catch(handleErrors);
        return obj;
    }

    async getUserByUsername(username){
        var obj = null;
        await axios.get(`${path}/byUsername/${username}`).then((response)=>{
            obj =  response.data;
            console.log(obj);
        }).catch(handleErrors);
        return obj;
    }

    async addUser(user){

        await axios.post(path, user).then((response)=>{

        }).catch(handleErrors);
        console.log("User Entered!");
        alert("Registration Completed and Your details will further observed by Admin.");
    }

    async updateUser(id, user){
        await axios.put(`${path}/${id}`, user).then((response)=>{

        }).catch(handleErrors);
        alert("Selected User Updated");
    }

    async deleteUser(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected User Removed");
    }

    
}

export default new UserService();