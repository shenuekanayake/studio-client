import axios from 'axios';
import {handleErrors} from './error_handling';


const path = "http://localhost:5000/jobs";
var job_list = [];

class JobService {

    async getJobs(){
        job_list = [];
        await axios.get(path).then((response)=>{
            job_list = [];
            response.data.forEach(doc=>{
                job_list.push(doc);
            });
            // console.log(job_list);
            // return job_list;
        }).catch(handleErrors);
        return job_list;
    }

    async getJob(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            
            obj =  response.data;
            // response.data.forEach(doc=>{
            //     return doc;
            // });
        }).catch(handleErrors);
        return obj;
    }

    async addJob(job){

        await axios.post(path, job).then((response)=>{

        }).catch(handleErrors);
        console.log("User Entered!");
        alert("Your Job is submitted.");
    }

    async updateJob(id, job){
        await axios.put(`${path}/${id}`, job).then((response)=>{

        }).catch(handleErrors);
        alert("Selected job Updated");
    }

    async deleteJob(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Job Removed");
    }

    
}

export default new JobService();