import React from 'react';
import "./Footer.css"

function Footer(props) {
    let calcTotal = () => {
        let total = 0;
        props.data.forEach(element => {
            if(element.checkedValue)
            total = total + element.balance;
        });
        return total;
    }

    let calculateTotalRowCount = () => {
        return props.data.length;
    }

    let calculateCheckedRowCount = () => {
        let total = 0;
        props.data.forEach(element => {
            if(element.checkedValue)
            total = ++total;
        });
        return total;
    }

    return (
        <div>
            <div className={"totalBalanceDiv"}>
                <span className={"totalBalanceTitle"}>Total</span>  
                <span className={"totalBalanceNumber"}>${props.data!==null?calcTotal():0}</span>
            </div>
            <span className={"totalRowCount"}>Total Row Count: {props.data!==null?calculateTotalRowCount():0}</span> 
            <span className={"checkedRowCount"}>Check Row Count: {props.data!==null?calculateCheckedRowCount():0} </span>
                           
        </div>
    )
}
export default Footer;