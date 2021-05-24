import React from 'react';
import Headers from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import axios from 'axios';
import AddDebt from './Buttons/AddDebt';
import RemoveDebt from './Buttons/RemoveDebt';
import "./Table.css"

class Table extends React.Component{
    state = {
        data: null
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
        .then(response => {
            response.data.forEach(element =>{
                element['checkedValue'] = true;
            })
            this.setState({ data: response.data });
        })
    }

    render(){
        return(
            <div className={"AppTable"}>
                <table>
                    <tbody>
                        <Headers 
                            heads={['Creditor','First Name','Last Name','Min Pay%', 'Balance']} 
                            checkAll={obj=>{this.setState({data:obj})}}
                            data={this.state.data}
                        />
                        <Body
                            data={this.state.data} 
                            unUsedValues={["id", "checkedValue"]}
                            check={obj=>{this.setState({data:obj})}}
                        />
                    </tbody>
                </table>
                <RemoveDebt
                    removeData={obj=>{this.setState({data:obj})}}
                    data={this.state.data}
                />
                <br/>
                <AddDebt 
                    addData={(obj) =>{this.setState({data:obj})}}
                    data={this.state.data}
                />
                <Footer
                    data={this.state.data}
                />
            </div>
        );
    }
}
export default Table;