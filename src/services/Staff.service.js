import axios from 'axios';
import {handleErrors} from './error_handling';

// import user from '../models/Patient';


const path = "http://localhost:5000/staff";
var user_list = [];

class StaffService {

    async getStaffs(){
        user_list = [];
        await axios.get(path).then((response)=>{
            user_list = [];
            response.data.forEach(doc=>{
                user_list.push(doc);
            });
        }).catch(handleErrors);
        return user_list;
    }

    async getStaff(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            
            obj =  response.data;
        }).catch(handleErrors);
        return obj;
    }

    // async getStaffForLogin(user){
    //     var obj = null;
    //     await axios.post(`${path}/login`, user).then((response)=>{
    //         obj =  response.data;
    //         console.log(obj);
    //     }).catch(handleErrors);
    //     return obj;
    // }

    async getStaffByUsername(username){
        var obj = null;
        await axios.get(`${path}/byUsername/${username}`).then((response)=>{
            obj =  response.data;
            console.log(obj);
        }).catch(handleErrors);
        return obj;
    }

    async addStaff(user){

        await axios.post(path, user).then((response)=>{

        }).catch(handleErrors);
        console.log("Staff Entered!");
        alert("Registration Completed and Your details will further observed by Admin.");
    }

    async updateStaff(id, user){
        await axios.put(`${path}/${id}`, user).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Staff Updated");
    }

    async deleteStaff(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Staff Removed");
    }

    
}

export default new StaffService();