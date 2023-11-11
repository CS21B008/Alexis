import "../Styles/models.css"
import "../Styles/home.css"
import { Canvas } from "@react-three/fiber";
import { Brain } from "../models/Brain";
import { Lungs } from "../models/Lungs";
import { Heart } from "../models/Heart";
import { Stomach } from "../models/Stomach";
import { Intestines } from "../models/Intestines";
import { Kidneys } from "../models/Kidneys";

function Models(){ 
    
    return(
        <div className="models">
            <ul className="models-list" type="none">
                <li className="list-item">
                    <div className="model">
                        <Canvas >
                            <Brain />
                        </Canvas>
                    </div>
                    <div className="coloring">
                        <div className="color">
                            <button className="white"></button>
                        </div>
                        <div className="color">
                            <button className="grey"></button>
                        </div>
                        <div className="color">
                            <button className="red"></button>
                        </div>
                        <div className="color">
                            <button className="orange"></button>
                        </div>
                        <div className="color">
                            <button className="green"></button>
                        </div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="model">
                        <Canvas>
                            <Lungs />
                        </Canvas>
                    </div>
                    <div className="coloring">
                        <div className="color">
                            <button className="white"></button>
                        </div>
                        <div className="color">
                            <button className="grey"></button>
                        </div>
                        <div className="color">
                            <button className="red"></button>
                        </div>
                        <div className="color">
                            <button className="orange"></button>
                        </div>
                        <div className="color">
                            <button className="green"></button>
                        </div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="model">
                        <Canvas>
                            <Heart />
                        </Canvas>
                    </div>
                    <div className="coloring">
                        <div className="color">
                            <button className="white"></button>
                        </div>
                        <div className="color">
                            <button className="grey"></button>
                        </div>
                        <div className="color">
                            <button className="red"></button>
                        </div>
                        <div className="color">
                            <button className="orange"></button>
                        </div>
                        <div className="color">
                            <button className="green"></button>
                        </div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="model">
                        <Canvas>
                            <Stomach />
                        </Canvas>
                    </div>
                    <div className="coloring">
                        <div className="color">
                            <button className="white"></button>
                        </div>
                        <div className="color">
                            <button className="grey"></button>
                        </div>
                        <div className="color">
                            <button className="red"></button>
                        </div>
                        <div className="color">
                            <button className="orange"></button>
                        </div>
                        <div className="color">
                            <button className="green"></button>
                        </div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="model">
                        <Canvas>
                            <Intestines />
                        </Canvas>
                    </div>
                    <div className="coloring">
                        <div className="color">
                            <button className="white"></button>
                        </div>
                        <div className="color">
                            <button className="grey"></button>
                        </div>
                        <div className="color">
                            <button className="red"></button>
                        </div>
                        <div className="color">
                            <button className="orange"></button>
                        </div>
                        <div className="color">
                            <button className="green"></button>
                        </div>
                    </div>
                </li>
                <li className="list-item">
                    <div className="model">
                        <Canvas>
                            <Kidneys />
                        </Canvas>
                    </div>
                    <div className="coloring">
                        <div className="color">
                            <button className="white"></button>
                        </div>
                        <div className="color">
                            <button className="grey"></button>
                        </div>
                        <div className="color">
                            <button className="red"></button>
                        </div>
                        <div className="color">
                            <button className="orange"></button>
                        </div>
                        <div className="color">
                            <button className="green"></button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Models