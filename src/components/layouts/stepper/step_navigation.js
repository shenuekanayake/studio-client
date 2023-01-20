import React from 'react';
import Step from './step';
import './stepper.css';

export default function StepNavigation(props){
    return (
        <>
            <div className="step-container">
                {props.questions.map((item, index) =><Step key={index} index={index} label={item.title} selected={props.currentStep === index} updateStep={props.updateStep}/>)}
            </div>
        </>
    )
}
