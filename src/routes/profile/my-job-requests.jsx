import React, { useEffect, useState } from 'react'
import reactSessionApi from 'react-session-api';
import JobsService from '../../services/Jobs.service';

const success = {
    backgroundColor: 'green',
    color: 'white',

}

function MyJobRequests() {
    const [jobs, setJobs] = useState([]);
    const [username, setUsername] = useState(reactSessionApi.get('username')||null);
    const [approvedJobs, setApprovedJobs] = useState([]);
    const [notapprovedJobs, setNotApprovedJobs] = useState([]);
    const [mode, setMode] = useState("all");

    const loadJobs = async () => {
        await JobsService.getJobs().then((jobs) =>{
            setJobs([]);
            setApprovedJobs([]);
            setNotApprovedJobs([]);
            setJobs(jobs);
            jobs.forEach((job) => {
                
                if(job.accepted){
                    setApprovedJobs(ajob => [...ajob, job]);
                } else {
                    setNotApprovedJobs(njobs => [...njobs, job]);
                }
            })
        });
    }

    const updateJob = async (job, result) => {
        job.accepted = result;
        await JobsService.updateJob(job._id, job).then(() => {
            
        })
    }

    const deleteJob = async (job) => {
        await JobsService.deleteJob(job._id).then(() => {
            
        })
    }

    useEffect(() => {
        loadJobs();
        
        return () => {
        }
    }, []);

  return (
    <section id='job-requests'>
        <h5>Available Jobs Information</h5>
        <h2>Your Job Requeusts</h2>
        <center>
        <button className='btn' onClick={() => setMode('approved')}>Approved Jobs</button>|<button className='btn' onClick={() => setMode('not-approved')}>New Jobs</button>|<button className='btn' onClick={() => setMode('all')}>All Jobs</button>
        </center>
        <br></br>
        <div className='container job__container'>
            {
                mode=="all"?<>
                {
                    jobs&&jobs.length>0&&jobs.map((job, index) => {
                    if(!job.user||job.user&&job.user!==username) return;
                    return (<>
                        <span>{index+1}</span>
                        <span>{job.title}</span>
                        <span>{job.user}</span>
                        <span>{job.type}</span>
                        <span>{job.info}</span>
                        <span>{job.accepted?<span style={success}>Accepted</span>:<></>}</span>
                        <div>
                            <button className='btn btn-primary' onClick={() => {updateJob(job, true); setApprovedJobs(approvedJobs =>[...approvedJobs, job]); setNotApprovedJobs(notapprovedJobs.filter(item => item._id !== job._id));}}>Accept</button>
                            |<button className='btn' onClick={() => {deleteJob(job); setNotApprovedJobs(notapprovedJobs.filter(item => item._id !== job._id)); setApprovedJobs(approvedJobs.filter(item => item._id !== job._id)); setJobs(jobs.filter(item => item._id !== job._id));}}>Remove</button>
                        </div>
                    </>);})
                }
                </>:mode=="approved"?

                <>
                {
                    
                    approvedJobs&&approvedJobs.length>0&&approvedJobs.map((job, index) => {
                        if(!job.user||job.user&&job.user!==username) return;
                        return (<>
                        <span>{index+1}</span>
                        <span>{job.title}</span>
                        <span>{job.user}</span>
                        <span>{job.type}</span>
                        <span>{job.info}</span>
                        <span>{job.accepted?<span style={success}>Accepted</span>:<></>}</span>
                        <div>
                            
                            <button className='btn btn-primary' onClick={() => {updateJob(job, false); setApprovedJobs(approvedJobs.filter(item => item._id !== job._id)); setNotApprovedJobs(approvedJobs =>[...approvedJobs, job])}}>Block</button>
                            |<button className='btn' onClick={() => {deleteJob(job); setNotApprovedJobs(notapprovedJobs.filter(item => item._id !== job._id)); setApprovedJobs(approvedJobs.filter(item => item._id !== job._id)); setJobs(jobs.filter(item => item._id !== job._id));}}>Remove</button>
                        </div>
                    </>);})
                }
                </>
                :
                <>
                {
                    notapprovedJobs&&notapprovedJobs.length>0&&notapprovedJobs.map((job, index) => {
                        if(!job.user||job.user&&job.user!==username) return;
                        return (<>
                        <span>{index+1}</span>
                        <span>{job.title}</span>
                        <span>{job.user}</span>
                        <span>{job.type}</span>
                        <span>{job.info}</span>
                        <span>{job.accepted?<span style={success}>Accepted</span>:<></>}</span>
                        <div>
                            <button className='btn btn-primary' onClick={() => {updateJob(job, true); setNotApprovedJobs(notapprovedJobs.filter(item => item._id !== job._id)); setApprovedJobs(approvedJobs =>[...approvedJobs, job])}}>Accept</button>
                            |<button className='btn' onClick={() => {deleteJob(job); setNotApprovedJobs(notapprovedJobs.filter(item => item._id !== job._id)); setApprovedJobs(approvedJobs.filter(item => item._id !== job._id)); setJobs(jobs.filter(item => item._id !== job._id));}}>Remove</button>
                        </div>
                    </>)})
                }
                </>
            }

        </div>
    </section>
  )
}

export default MyJobRequests