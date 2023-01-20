import axios from 'axios';
import {handleErrors} from './error_handling';


const path = "http://localhost:5000/works";
var work_list = [];

class WorkService {

    async getWorks(){
        work_list = [];
        await axios.get(path).then((response)=>{
            work_list = [];
            response.data.forEach(doc=>{
                work_list.push(doc);
            });
            // console.log(work_list);
            // return work_list;
        }).catch(handleErrors);
        return work_list;
    }

    async getWork(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            
            obj =  response.data;
            // response.data.forEach(doc=>{
            //     return doc;
            // });
        }).catch(handleErrors);
        return obj;
    }

    async addWork(work){

        await axios.post(path, work).then((response)=>{

        }).catch(handleErrors);
        console.log("Works Entered!");
        alert("Your Work is submitted.");
    }

    async updateWork(id, work){
        await axios.put(`${path}/${id}`, work).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Work Updated");
    }

    async deleteWork(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Work Removed");
    }

    
}

export default new WorkService();