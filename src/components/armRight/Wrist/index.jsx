import { useContext, useState, useEffect } from "react";
import { ContextAPI } from "../../../api/ContextAPI";
import styles from "../styles.module.scss";

export function WristRight(){
    const [stateWrist, setStateWrist] = useState();
    const listStatesWrist = ["","Rotação para -90°","Rotação para -45°","Em Repouso","Rotação para 45°","Rotação para 90°","Rotação para 135°","Rotação para 180°"]
    const {stateUp, stateDown} = useContext(ContextAPI);

    useEffect(() => {
        fetch('https://localhost:44398/StateRightArmsWrist', {
            method: 'GET',
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then(data => {
            setStateWrist(data.stateRightWrist)
        });
    },[]);

    return(
        <div className={styles.containerInputs}>
            <h4 className={styles.DisplayTextFix}>PULSO:</h4>
            <h4 className={styles.DisplayText}>{listStatesWrist[stateWrist]}</h4>
            <button onClick={() => stateUp(stateWrist,setStateWrist,"stateRightWrist","https://localhost:44398/StateRightArmsWrist")}>⇑</button>
            <button onClick={() => stateDown(stateWrist,setStateWrist,"stateRightWrist","https://localhost:44398/StateRightArmsWrist")}>⇓</button>
        </div>
    );
}