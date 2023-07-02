import React, { useState } from 'react'
import './circleArea.scss'
import img from "./Assets/images.png";

const CircleArea = () => {

    const [radius,setRadius] = useState("");
    const [data,setData]= useState("")
    const [area,setArea] =useState("")


    const handleChange=(e)=>{
       
          setRadius(e.target.value);
          if (isNaN(radius)) {
            setData("Plese enter valid radius*");
          } else {
            setData("")
          }
           if(e.target.value==""){
            setArea("");
           }         
    }
    const areaOfcircle=(radius)=>{
        const PI=3.14;
        const Area = PI*radius;
        const newArea= Area.toFixed(3)
      
        if(isNaN(Area)){
            setArea("Cann't find")
        }else{
              setArea(newArea);
        }

    }

    // const alretMsg=(radius)=>{
    //     if(isNaN(radius)){
    //          alert("enter valid radius");
    //       }
    //     alert('enter');

    // }


    
  return (
    <>
    
      <div className="wrapper">
        <div className="container">
          <div className="left-section">
            <h1 className="head">Circle</h1>

            <div className="inputContainer">
              <p className="radius"> radius {radius} </p>
              <input
                type="text"
                name=""
                id=""
                onChange={handleChange}
                placeholder="Enter radius"
              />
            </div>
            <button onClick={() => areaOfcircle(radius)}> Click</button>

            <p className="getInfo">A ≈ <span className='areaAns'>{area} </span>
            </p>
            <p className='alert'>{data}</p>
          </div>
          <p></p>

          <div className="imageContainer">
            <img src={img} alt="" height={200} />
          </div>
         
        </div>
        
      </div>
    </>
  );
}

export default CircleArea
