import React from 'react';
import "./Buttons.css"

function AddDebt(props) {
    return (
        <button
            className={"AddDebt"}
            onClick={() => {
                let data = props.data.concat([{
                    "id": !props.data?props.data[props.data.length-1].id:"1",
                    "creditorName": "",
                    "firstName": "",
                    "lastName": "",
                    "minPaymentPercentage": "",
                    "balance": "",
                    "checkedValue": true,
                    }])
                props.addData(data)
            }}>Add Debt</button>
    )
}

export default AddDebt;