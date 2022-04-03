import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../../../api/ContextAPI";
import styles from "../styles.module.scss";

export function ElbowLeft(){
    const [stateElbow, setStateElbow] = useState();
    const listStateselbow = ["","Em Repouso","Levemente Contraído","Contraído", "Fortemente Contraído"];
    const {stateUp, stateDown} = useContext(ContextAPI);

    useEffect(() => {
        fetch('https://localhost:44398/StateLeftArmsElbow', {
            method: 'GET',
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw response;
            })
        .then(data => {
            setStateElbow(data.stateLeftelbow)
        });
    },[]);
    
    return(
        <div className={styles.containerInputs}> 
            <h4 className={styles.DisplayTextFix}>COTOVELO:</h4>
            <h4 className={styles.DisplayText}>{listStateselbow[stateElbow]}</h4>
            <button onClick={() => stateUp(stateElbow,setStateElbow,"stateLeftelbow","https://localhost:44398/StateLeftArmsElbow")}>⇑</button>
            <button onClick={() => stateDown(stateElbow,setStateElbow,"stateLeftelbow","https://localhost:44398/StateLeftArmsElbow")}>⇓</button>
        </div>
    );
}