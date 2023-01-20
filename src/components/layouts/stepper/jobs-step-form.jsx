import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import reactSessionApi from 'react-session-api'
import StepNavigation from './step_navigation'
import './stepper.css'
import JobsService from '../../../services/Jobs.service';

function JobsStepForm() {
    const navigate = useNavigate();
    const label_array = [
        {title: "ENTER DETAILS", question: "This is the question?"}, 
        {title: "CONFIRMATION", question: "This is the question?"}
    ];
    const [user, setUser] = useState(null);
    const [current, setCurrent] = useState(0);
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    

    function updateStep(step) {
        setCurrent(step)
    }

    function submitJobInfo() {
        var instance = {
            title: `${user}'s ${q4} Photo Session.`,
            user: user,
            contact: '',
            info: q1,
            type: q4,
            date: q2,
            accepted: false
        };
        JobsService.addJob(instance).then(() => {
            navigate('/profile');
        })    
    }
    useEffect(() => {
        setUser(reactSessionApi.get("username"));
        return () => {
        }
    }, []);
  return (
    <Card>
                    <StepNavigation questions={label_array} currentStep={current} updateStep={updateStep}/>
                    <h4 className="ct-font-secondary-light">{label_array[current].title}</h4>
                    <div className='form-container'>
                        {label_array[current].title==="ENTER DETAILS"&&(<div>
                            <div className="text-center">
                                <h2 className='ct-font-secondary-light'>Continue for Forms</h2>
                                <p className='ct-font-secondary-light'>You need to provide requested information in order to complete your Job Request.</p>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label ct-font-secondary-light">Details</label>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="More information of your Job" onChange={(event) => setQ1(event.target.value)}/>
                                </div>
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label ct-font-secondary-light">Add Date / Time</label>
                                <div class="col-sm-4">
                                    <input type="date" class="form-control" id="inputAddress" placeholder="Event Time" onChange={(event) => setQ2(event.target.value)}/>
                                </div>
                                {/* <br></br>
                                <div class="col-sm-4">
                                    <input type="time" class="form-control" id="inputAddress" placeholder="Event Date" onChange={(event) => setQ3(event.target.value)}/>
                                </div> */}
                            </div>
                            <br></br>
                            <div class="form-group row">
                                <p class="col-sm-2 col-form-label ct-font-secondary-light">
                                    Select Your Plan
                                </p>
                                <div class="col-sm-5" style={{display: 'flex', justifyContent: 'center'}}>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Wedding" onChange={(event) => setQ4(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Wedding</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Pre Shoot" onChange={(event) => setQ4(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Pre Shoot</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Family" onChange={(event) => setQ4(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Family</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Child" onChange={(event) => setQ4(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Child</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Birthday" onChange={(event) => setQ4(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio1">Birthday</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Other" onChange={() => setQ4(0)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio2">Other</label>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary' onClick={() => updateStep(current<label_array.length-1?current+1:current)}>Next</button>
                            </div>
                        </div>)}
                        
                        {label_array[current].title==="CONFIRMATION"&&(<div>
                            <div className="text-center">
                                <h2 className='ct-font-secondary-light'>Confirm Following Results that you entered.</h2>
                                <p className='ct-font-secondary-light'>You need to provide requested information in order to complete your profile.</p>
                                <button className='btn' onClick={() => updateStep(current-1)}>Back</button>|
                                <button className='btn btn-primary' onClick={() => submitJobInfo()}>Confirm</button>
                            </div>
                            
                        </div>)}
                    </div>
    </Card>
  )
}

export default JobsStepForm