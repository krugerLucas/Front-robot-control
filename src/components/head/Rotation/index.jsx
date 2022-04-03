import { useContext, useState, useEffect } from "react";
import { ContextAPI } from "../../../api/ContextAPI";
import styles from "../styles.module.scss";

export function RotationHead(){
    const [stateRotation, setStateRotation] = useState();
    const listStateRotation = ["","Rotação -90°","Rotação -45°","Em Repouso", "Rotação 45°", "Rotação 90°"];
    const {stateUp, stateDown} = useContext(ContextAPI);

    useEffect(() => {
        fetch('https://localhost:44398/StateRotation', {
            method: 'GET',
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            }

            throw response;
            })
        .then(data => {
            setStateRotation(data.stateHeadRotation)
        });
    },[]);

    return(
        <div className={styles.containerInputs}> 
            <h4 className={styles.DisplayTextFix}>ROTAÇÃO:</h4>
            <h4 className={styles.DisplayText}>{listStateRotation[stateRotation]}</h4>
            <button onClick={() => stateUp(stateRotation,setStateRotation,"stateHeadRotation","https://localhost:44398/StateRotation")}>⇑</button>
            <button onClick={() => stateDown(stateRotation,setStateRotation,"stateHeadRotation","https://localhost:44398/StateRotation")}>⇓</button>
        </div>
    );
}