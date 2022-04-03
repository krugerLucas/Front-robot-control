import { createContext } from "react";

export const ContextAPI = createContext([]);

export default function StatesProvider({children}){

    function stateUp(state,setState, nameString, url){
        var data;
        if(nameString === "stateLeftelbow"){ data = { stateLeftelbow :(state + 1)};}
        if(nameString === "stateLeftWrist"){ data = { stateLeftWrist :(state + 1)};}
        if(nameString === "stateRightelbow"){ data = { stateRightelbow :(state + 1)};}
        if(nameString === "stateRightWrist"){ data = { stateRightWrist :(state + 1)};}
        if(nameString === "stateHeadInclination"){ data = { stateHeadInclination :(state + 1)};}
        if(nameString === "stateHeadRotation"){ data = { stateHeadRotation :(state + 1)};}
        fetch(url, {
            method: 'PUT',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>{
            if(response.ok){
                setState(state+1)
                return;
            }
            window.alert("status: " + response.status + " - Operação inválida");
            throw response;
            })
    }

    function stateDown(state,setState, nameString, url){
        var data;
        if(nameString === "stateLeftelbow"){ data = { stateLeftelbow :(state - 1)};}
        if(nameString === "stateLeftWrist"){ data = { stateLeftWrist :(state - 1)};}
        if(nameString === "stateRightelbow"){ data = { stateRightelbow :(state - 1)};}
        if(nameString === "stateRightWrist"){ data = { stateRightWrist :(state - 1)};}
        if(nameString === "stateHeadInclination"){ data = { stateHeadInclination :(state - 1)};}
        if(nameString === "stateHeadRotation"){ data = { stateHeadRotation :(state - 1)};}
        fetch(url, {
            method: 'PUT',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>{
            if(response.ok){
                setState(state-1)
                return;
            }
            window.alert("status: " + response.status + " - Operação inválida");
            throw response;
            })
    }

    return (
        <ContextAPI.Provider value={{stateUp, stateDown}}>
            {children}
        </ContextAPI.Provider>
    );
}