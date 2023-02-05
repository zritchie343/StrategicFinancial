import { Box } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import React from 'react';

function NewGrid(props) {

    const [turn, setTurn] = useState(0);

    const colorArray = ['red', 'yellow', 'blue', 'green', 'pink', 'cyan', 'orange', 'purple']

    let increaseTurn = () =>{
        if(turn+1<=12){
            setTurn(turn+1);
        }  
    }

    let decreaseTurn = () =>{
        if(turn-1!==-1){
            setTurn(turn-1);
        }        
    }

    let returnSpace = (color, horseNumber) => {
        let boxes = []
        let horse = props.listOfHorse[horseNumber]
        let total = 0;
        for(let i=0;i<=turn;++i){
            if(i!==0){
                total = total + horse[i]
            }            
        }
        for(let i=1;i<=total;++i){
            boxes.push(<Box key={i} sx={{ m:2, width:10, height:10, backgroundColor:color}}/>)
        }
        return boxes;
    };

    let rows = (num) => {
        let newRows = [];
        for(let i=0;i<=num-1;++i){
            newRows.push(<Box sx={{display:'flex'}}>
                <Box key={'top'} sx={{ m:2, width:10, height:10, backgroundColor:'black'}}/>
                {returnSpace(colorArray[i], i).map((e)=>{return e})}
            </Box>)
        }
        return newRows;
    }
    
    
    return (        
        <div className="grid">
            {rows(8).map((e)=>{return e})}
            <Box sx={{mt:5}}>
                <Button sx={{mr:5}} onClick={decreaseTurn}>Previous</Button> <Button sx={{mr:5}} onClick={increaseTurn}>Next</Button> {turn}
            </Box>
        </div>
    );
}

export default NewGrid;
