import React from "react";

function Hello({
    color = "black",
    name = "이거기초적인설정임",
    isSpecial
}){
    return(
        <div style={{color}}>
            { isSpecial && <b>*</b> }
            안냐세요 {name}
        </div>
    );
}


export default Hello;
