import { useContext, useState, useEffect } from "react";
import { ContextAPI } from "../../../api/ContextAPI";
import styles from "../styles.module.scss";

export function InclinationHead(){
    const [stateInclination, setStateInclination] = useState();
    const listStatesInclination = ["","Para Cima","Em Repouso","Para Baixo"]
    const {stateUp, stateDown} = useContext(ContextAPI);

    useEffect(() => {
        fetch('https://localhost:44398/StateInclination', {
            method: 'GET',
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then(data => {
            setStateInclination(data.stateHeadInclination)
        });
    },[]);

    return(
        <div className={styles.containerInputs}>
            <h4 className={styles.DisplayTextFix}>INCLINAÇÃO:</h4>
            <h4 className={styles.DisplayText}>{listStatesInclination[stateInclination]}</h4>
            <button onClick={() => stateUp(stateInclination,setStateInclination,"stateHeadInclination","https://localhost:44398/StateInclination")}>⇑</button>
            <button onClick={() => stateDown(stateInclination,setStateInclination,"stateHeadInclination","https://localhost:44398/StateInclination")}>⇓</button>
        </div>
    );
}