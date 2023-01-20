import React from 'react';

export default function Step(props){
    return (
        <>
            <div className={"step-block" + (props.selected?" selected":"")}>
                <div className={"circleWrapper"} onClick={()=>{props.updateStep(props.index)}}>
                    <div className='circle'>{props.index+1}</div>
                </div>
                <span className="ct-font-secondary-light">{props.label}</span>
            </div>
        </>
    )
}
