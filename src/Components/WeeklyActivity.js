import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const WeeklyActivity = () => {
    const percentage = 66;
    return (
        <>

            <CircularProgressbar
                className="progressbar"
                value={6}
                text={`${6}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.35,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'


                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(255, 102, 31, ${percentage / 100})`,
                    textColor: 'white',
                    trailColor: 'gray',
                    background: {
                        fill: '#fff',
                    },


                })}
            />
            <CircularProgressbar
                className="progressbar"
                value={31}
                text={`${31}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(27, 200, 32, ${percentage / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#fff',
                })}
            />
            <CircularProgressbar
                className="progressbar"
                value={7}
                text={`${7}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(154, 154, 152, ${percentage / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
            <CircularProgressbar
                className="progressbar"
                value={80}
                text={`${80}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(253, 192, 62, ${100 / percentage})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    width: '25px',
                    height: '25px'
                })}
            />
            <div className="d-flex ml-2 mt-1">
                <div className="d-flex flex-column mr-5 text-center">
                    <span>Job seeker</span>
                    <span>visitors</span></div>
                <div className="d-flex flex-column mr-5 text-center">
                    <span>Employer</span>
                    <span>visitors</span></div>
                <div className="d-flex flex-column mr-5 text-center">
                    <span>Service Provier</span>
                    <span>visitors</span></div>
                <div className="d-flex flex-column mr-5 text-center">
                    <span>Fan</span>
                    <span>visitors</span></div>
            </div>

        </>
    )
}

export default WeeklyActivity
