import { graphql } from 'gatsby';
import React, {useState} from 'react'
import {section, cityContainer, cityElem, slider, sliderContainer, sun, moon, city1, city2, city3, city4, title} from '../../styles/home.module.css'
import Slider from '@mui/material/Slider';


const MINS = 1440; 
const SAMPLE_RANGE = 240;
//Gradient for Day/Night Cycle
var stops = [[0.00*MINS,'#0a0c10'],
            [0.17*MINS,'#1a222b'],  
            [0.21*MINS,'#8291b3'],
            [0.36*MINS,'#7cbbeb'],
            [0.60*MINS,'#7cbbeb'],
            [0.65*MINS,'#f8ce9c'],
            [0.74*MINS,'#f08784'],
            [0.78*MINS,'#8b666e'],
            [0.86*MINS,'#323039'],
            [1.00*MINS,'#0a0c10']];
console.log(stops);

function radians(degrees)
{
  return degrees * (Math.PI/180);
}

const Hero = ({
    initialTime,
    minTime,
    maxTime
}) => {
    const [curTime, setCurTime] = useState(initialTime);
    const handleChange = event => {
        setCurTime(event.target.value);
    };

    return (
        <div>
            <CityController time={curTime}/>
            <div className={sliderContainer}>
                <input
                type="range"
                className={slider}
                min={minTime}
                max={maxTime}
                value={curTime}
                onChange={handleChange}
                />
            </div>
        </div>
    )
}

const classNameGenerator = (...classes)=>{
    return classes.join(" ")
}

const CityController = ({ time }) => {
    // var dt = new Date();
    // var h = dt.getHours();
    // var m = dt.getMinutes();

    // time = h*60+m;

    var lb = parseInt(time);
    var rb = lb+SAMPLE_RANGE; 

    var grad = [];

    //Adds stops in between sample
    for (let i = 0; i < stops.length; i++){
        if (lb <= stops[i][0] && stops[i][0] <= rb){
            // console.log("added " + i);
            // console.log(lb + " " + rb + " " + stops[i][0]);
            var grad_per = ((stops[i][0]-lb)/SAMPLE_RANGE) * 100; //The location of the stop in rendered gradient
            grad.push([grad_per, stops[i][1]]);
        }
    }
    //Finds the first stop to the left of lb
    for (let i = stops.length-1; i >= 0; i--){ 
        if (lb > stops[i][0]){
            var grad_per = ((stops[i][0]-lb)/SAMPLE_RANGE) * 100;
            grad.unshift([grad_per, stops[i][1]]);
            break;
        }
    }
    //Finds the first stop to the right of rb
    for (let i = 0; i < stops.length; i++){ 
        if ((rb) < stops[i][0]){
            var grad_per = ((stops[i][0]-lb)/SAMPLE_RANGE) * 100;
            grad.push([grad_per, stops[i][1]]);
            break;
        }
        if ((rb%MINS) < stops[i][0]){
            var grad_per = ((1440+stops[i][0]-lb)/SAMPLE_RANGE) * 100;
            grad.push([grad_per, stops[i][1]]);
            break;
        }
    }
    console.log(grad);

    var gradPos = String((lb+SAMPLE_RANGE/2)/1440*180-90)

    //Construct gradient to render
    var bg = `-webkit-linear-gradient(${gradPos}deg`;
    for (let i = 0; i < grad.length; i++){
        bg += `, ${grad[i][1]} ${grad[i][0]}%`;
    }
    bg += ')'

    var sunPos = (lb+SAMPLE_RANGE/2)/1440*360-90;
    var moonPos = (lb+SAMPLE_RANGE/2)/1440*360+90;

    return (
        <>
            <div className={cityContainer} style={{"background":bg}}>
                <div className={title}>
                    <img src="/title.svg" alt="Title"/>
                </div>
                <img className={city4} src="/city-4.svg" alt="City Component 4"/>
                <img className={city3} src="/city-3.svg" alt="City Component 3"/>
                <img className={city2} src="/city-2.svg" alt="City Component 2"/>
                <img className={city1} src="/city-1.svg" alt="City Component 1"/>
                <img className={moon} src="/moon.svg" alt="Moon"
                style={{
                    top: `${100+100*Math.sin(radians(-moonPos))}%`,
                    left: `${50+50*Math.cos(radians(-moonPos))}%`,
                    transform: "translate(-50%, -50%)"
                }}/>
                <img className={sun} src="/sun.svg" alt="Sun"
                    style={{
                        top: `${100+100*Math.sin(radians(-sunPos))}%`,
                        left: `${50+50*Math.cos(radians(-sunPos))}%`,
                        transform: "translate(-50%, -50%)"
                }}/>
            </div>
            
        </>
    );
};

export default Hero;