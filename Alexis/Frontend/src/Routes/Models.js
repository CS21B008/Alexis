import "../Styles/models.css"
import "../Styles/home.css"
import { Canvas } from "@react-three/fiber";
import { Brain } from "../models/Brain";
import { Lungs } from "../models/Lungs";
import { Heart } from "../models/Heart";
import { Stomach } from "../models/Stomach";
import { Intestines } from "../models/Intestines";
import { Kidneys } from "../models/Kidneys";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function clickHandler(){
    const Hamburger = document.querySelector('.HamburgerM');
    const nav = document.querySelector('.nav-headerM');
    Hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  }

function Model( { modelName , color } ){  
    const modelselector = () => {
        if(modelName === "Brain"){
            return(<Brain />);
        }
        else if(modelName === "Lungs"){
            return(<Lungs />);
        }
        else if(modelName === "Heart"){
            return(<Heart />);
        }
        else if(modelName === "Stomach"){
            return(<Stomach />);
        }
        else if(modelName === "Intestines"){
            return(<Intestines />);
        }
        else if(modelName === "Kidneys"){
            return(<Kidneys />);
        }
    }
    return(
        <div className="modelContainer" style={ { backgroundImage: `url(/Images/${color}.jpg)` }}>
            <Canvas className="model">
                {modelselector()}
            </Canvas>
        </div>
    );
}

function Models(){
    const models = ["Brain" ,"Heart" , "Lungs" ,  "Intestines" , "Kidneys","Stomach" ];
    const [modelNo , setModelNo] = useState(0);
    let message = "";
    const location = useLocation();
    const receivedData = location.state?.data.indices;//["brain", "heart", "lungs","intestines","kidneys","stomach"];
    console.log(receivedData)
    // const receivedData=[1,0,2,3,3,2];
    const nextModelNo = () => {
        if(modelNo === models.length - 1){
            setModelNo(0);
        }
        else{
            setModelNo(modelNo + 1);
        }
    }

    const prevModelNo = () => {
        if(modelNo === 0){
            setModelNo(models.length - 1);
        }
        else{
            setModelNo(modelNo - 1);
        }
    }

    const getOutput = (modelNo) => {
        if(receivedData[modelNo]===0)
        
        {message = "This organ is improved";
        return 'green';
        }
        else if(receivedData[modelNo]===1)
        
        {message = "This medicine has a mild effect on this organ";
        return 'grey';
        }
        else if(receivedData[modelNo]===2)
        
        {message = "This medicine has a moderate effect on this organ";
        return "orange";
        }
        else if(receivedData[modelNo]===3)
        
        {message = "This medicine has a Severe effect on this organ";
        return "red";
        }

    }

    return(
        <>
        <header className="App-headerM">
        <div className='HamburgerM' onClick={() => {
          clickHandler();
        }}>
          <span className='barM'></span>
          <span className='barM'></span>
          <span className='barM'></span>
        </div>
        <div className='nav-headerM'>
          <div>
              <Link className="headerLinkM" to="/">HOME</Link>
          </div>
          <div>
              <Link className="headerLinkM" to="/about">ABOUT</Link>
          </div>
          <div>
              <Link className="headerLinkM" to="/contact">CONTACT</Link>
          </div>
          
          <div>
            <Link className="headerLinkM" to="/simulate">SIMULATE</Link>
          </div>
         
        </div>
      </header>
        <div>
            <Model modelName={models[modelNo]} color= {getOutput(modelNo)} />
        </div>
        <button className="Previous" onClick={prevModelNo}><p className="btn-text">&#8249;</p></button>
        <button className="Next" onClick={nextModelNo}><p className="btn-text">&#8250;</p></button>
        <p className="message">{message}</p>
        </>
    );
}

export default Models