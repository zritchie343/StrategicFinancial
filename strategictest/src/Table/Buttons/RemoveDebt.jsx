import React from 'react';
import "./Buttons.css"

function RemoveDebt(props) {
    return (
        <button 
            className={"RemoveDebt"}
            onClick={() => {
                let data = props.data;
                data.pop();
                props.removeData(data)
            }}>Remove Row</button>
    )
}

export default RemoveDebt;