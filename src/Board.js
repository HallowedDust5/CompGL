import { floor } from 'mathjs';
import React from 'react';



export class GameOfLifeBoard extends React.Component {
    onClick(id){
        this.props.moves.clickCell(id);
    }


    render() {
        let winner = '';
        if(this.props.ctx.gameover){
            winner = 
            this.props.ctx.gameover.winner !== undefined ? (<div id="winner">Winner:{this.props.ctx.gameover.winner}</div>) : (<div id="winner">Draw!</div>);
        }
        
        const GAMEBOARD_ARR_HEIGHT = this.props.G.cells.length;
        const GAMEBOARD_ARR_LENGTH = this.props.G.cells[0].length;
        const SQUARE_DIMENSION = 300/GAMEBOARD_ARR_HEIGHT;
        const cellStyle = {
            border: '1px solid #555',
            width: `${SQUARE_DIMENSION}px`,
            height: `${SQUARE_DIMENSION}px`,
            lineHeight: '50px',
            textAlign: 'center',
        };
        const blankCellStyle = Object.assign({},cellStyle,{border:'0px'});
        //Red cell styles
        const borderRedCellStyle = Object.assign({},cellStyle,{border:'1px solid red'});
        const filledRedCellStyle = Object.assign({},cellStyle,{background:'red'})

        //Blue cell styles
        const borderBlueCellStyle = Object.assign({},cellStyle,{border:'1px solid blue'});
        const filledBlueCellStyle = Object.assign({},cellStyle,{background:'blue'})


        //TODO:
        // Redo for loop to be more readable
        // Redo cell id system
        // Put in conditional coloring
        let tbody =[];
        
        for(let i = 0;i < GAMEBOARD_ARR_HEIGHT; i++){
            let cells =[];
            for (let j = 0; j < GAMEBOARD_ARR_LENGTH; j++) {
                //ID is where the tens digit 
                const id = `${i},${j}`;
                //Calculates the indices of the middle 3 elements
                const middlethree = [0,1,2].map((x)=>{
                    return floor(GAMEBOARD_ARR_LENGTH/2)+x-1;
                });
                //currentCell
                //Red is 0
                //Blue is 1
                let currentCell = parseInt(this.props.G.cells[i][j]);

                
                
                //First line JSX push
                if(i===0){
                    //Keeps the middle 3 visible
                    if(middlethree.includes(j)){
                        cells.push(
                            <td style={currentCell===0? filledRedCellStyle: borderRedCellStyle} key={id} onClick={() => this.onClick(id)}>
                                {this.props.G.cells[id]}
                            </td>
                            );
                    }
                    //Takes away onClick and lines around the boxes
                    else {
                        cells.push(
                            <td style={blankCellStyle} >
                                {this.props.G.cells[id]}
                            </td>
                            );
                    }
                }
                //Last line JSX push
                else if (i===GAMEBOARD_ARR_HEIGHT-1){
                    //Keeps the middle 3 visible
                    if(middlethree.includes(j)){
                        cells.push(
                            <td style={currentCell? filledBlueCellStyle:borderBlueCellStyle} key={id} onClick={() => this.onClick(id)}>
                                {this.props.G.cells[id]}
                            </td>
                            );
                    }
                    //Takes away onClick and lines around the boxes
                    else {
                        cells.push(
                            <td style={blankCellStyle} >
                                {this.props.G.cells[id]}
                            </td>
                            );
                    }
                }
                //Main body JSX push
                else {
                    cells.push(
                        <td style={currentCell===0? filledRedCellStyle:currentCell? filledBlueCellStyle:cellStyle} key={id} >
                            {this.props.G.cells[id]}
                        </td>
                    );
                }




            }
        tbody.push(<tr key={i}>{cells}</tr>);

        }

        return (
            <div>
                <table id="board" style={{borderCollapse: 'collapse',borderSpacing:'0px'}}>
                <tbody>{tbody}</tbody>
                </table>
                {winner}
            </div>
        ); 




    }
}