import React from 'react'
import JobsStepForm from '../components/layouts/stepper/jobs-step-form'

function JobSection() {
  return (
    <section>
        <h5>Mention your Requirements</h5>
        <h2>Select Plan</h2>
        <div className='container jobs__container'>
          <JobsStepForm />
        </div>
    </section>
  )
}

export default JobSection