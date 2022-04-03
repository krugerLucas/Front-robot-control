import { useContext, useState, useEffect } from "react";
import { ContextAPI } from "../../../api/ContextAPI";
import styles from "../styles.module.scss";

export function ElbowRight(){
    const [stateElbow, setStateElbow] = useState();
    const listStateselbow = ["","Em Repouso","Levemente Contraído","Contraído", "Fortemente Contraído"];
    const {stateUp, stateDown} = useContext(ContextAPI);

    useEffect(() => {
        fetch('https://localhost:44398/StateRightArmsElbow', {
            method: 'GET',
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw response;
            })
        .then(data => {
            setStateElbow(data.stateRightelbow)
        });
    },[]);

    return(
        <div className={styles.containerInputs}> 
            <h4 className={styles.DisplayTextFix}>COTOVELO:</h4>
            <h4 className={styles.DisplayText}>{listStateselbow[stateElbow]}</h4>
            <button onClick={() => stateUp(stateElbow,setStateElbow,"stateRightelbow","https://localhost:44398/StateRightArmsElbow")}>⇑</button>
            <button onClick={() => stateDown(stateElbow,setStateElbow,"stateRightelbow","https://localhost:44398/StateRightArmsElbow")}>⇓</button>
        </div>
    );
}