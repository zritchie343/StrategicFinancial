import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Body.css';

class Body extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, element){
        element.checkedValue = e.target.checked;
        this.props.check(this.props.data);
    }

    render(){
        return (
            this.props.data!==null?this.props.data.map((element, index) => {
                return (
                    <tr key={uuidv4()}>
                        <th key={uuidv4()}>
                            <input 
                                type="checkbox"
                                defaultChecked={element.checkedValue}
                                onClick={e => {this.handleChange(e, element)}}
                            />
                        </th>
                        {Object.keys(element).map(key => {
                            if(!this.props.unUsedValues.includes(key)){
                                return (
                                    <th key={uuidv4()}>
                                        <input 
                                            className={element.checkedValue?"":"unchecked"} 
                                            type={"text"} 
                                            defaultValue={element[key]}/>
                                    </th>);
                            }
                            return null;
                        })}
                    </tr>
                )
            }):null
        )
    }
}
export default Body;