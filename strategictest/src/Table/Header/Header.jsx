import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        let data = this.props.data
        data.forEach(element=>{
            if(e.target.checked!==element.checkedValue){
                element.checkedValue = !element.checkedValue;
            }            
        });
        this.props.checkAll(data);
    }

    render(){
        return (
                <tr key={'head'}>
                    <th className={"headerCheckbox"}>
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            onChange={e => {this.handleChange(e)}}
                        />
                        </th>
                    {this.props?.heads?.map(element => {
                        return(
                            <th 
                                className={"headerLabel"}
                                key={element}
                            >
                            {element}
                            </th>
                        )
                    })}
                </tr>
                
        )
    }
    
}
export default Header;