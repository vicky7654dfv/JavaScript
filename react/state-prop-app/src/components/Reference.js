import React from "react";
function Reference(){
    let callInput = React.createRef();

    function handleClick(){
       console.log(callInput.current.focus());
    }
    return(
        <div>
            <h1>Reference Example</h1>
            <input type="text" ref={callInput} />
            <input type="button" value="focus" onClick={handleClick} />
        </div>
    )
}

export default Reference;