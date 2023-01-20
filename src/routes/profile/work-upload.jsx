import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineUpload } from 'react-icons/ai'
import '../../components/contact/contact.css'
import WorksService from '../../services/Works.service';
import reactSessionApi from 'react-session-api';

function WorkUpload() {
    const [user, setUser] = useState(reactSessionApi.get('username'||null));
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('title', q1);
        formdata.append('date', q2);
        formdata.append('testImage', q3);
        formdata.append('type', q4);
        formdata.append('info', q5);
        formdata.append('user', user);

        await WorksService.addWork(formdata);

    }
  return (
    <section id='work'>
        <h5>Upload your Works Here</h5>
        <h2>My Works</h2>
        <div className='container contact__container'>
        <div className='cards'>
          <article className='card'>
            <AiOutlineUpload className='icon'/>
            <h4>Upload Image</h4>
            <h5>hackishmax321@gmail.com</h5>
            
          </article>
          
        </div>
        {/* <div className='form'> */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type={'text'} placeholder="Your Work Name" name='title' required onChange={(event) => setQ1(event.target.value)}/>
            <input type={'date'} placeholder="Add Date" name='date' required onChange={(event) => setQ2(event.target.value)}/>
            <input type={'file'} className='btn' name='upload' onChange={(event) => setQ3(event.target.files[0])}/>
            <div style={{display:'flex'}}>
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
                                        <input class="form-check-input" type="radio" name="inputRE" id="inputRE" value="Other" onChange={(event) => setQ4(event.target.value)}/>
                                        <label class="form-check-label ct-font-secondary-light" for="inlineRadio2">Other</label>
                                    </div>
            </div>
            <textarea name="info" placeholder='Type your Message' rows={10} onChange={(e) => setQ5(e.target.value)}></textarea>
            <button type='submit' className='btn btn-primary'>Add Work</button>
          </form>

        {/* </div> */}
      </div>
    </section>
  )
}

export default WorkUpload