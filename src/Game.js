import { INVALID_MOVE } from "boardgame.io/core";
// import { floor } from 'mathjs';

const GAMEBOARD_HEIGHT = 12;
const GAMEBOARD_WIDTH = 19;
// const middlethree = [0,1,2].map((x)=>{
//     return floor(GAMEBOARD_WIDTH/2)+x-1;
// });


// TODO
// Finish GoL logic
// Figure out best way to do logic without nested if statements

//This functions implements the Game of Life logic so that after every turn
function GoL_Logic(board) {
    let board_copy = new Array.from(board);

    for (let i = 1; i < board.length-1; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let currentCell = board[i][j];
            let surrounding_cells = [
                board_copy[i-1][j],//T
                board_copy[i-1][j+1],//TR
                board_copy[i-1][j-1],//TL
                board_copy[i][j+1],//R
                board_copy[i][j-1],//L
                board_copy[i+1][j],//B
                board_copy[i+1][j+1],//BR
                board_copy[i+1][j-1],//BL
            ];
            let surrounding_reds = surrounding_cells.filter((x)=>{return x===0;});
            let surrounding_blues = surrounding_cells.filter((x)=>{return x===1;});
            let not_null_surrounding = surrounding_cells.filter(x=>{return !Boolean(x);});
            let are_majority_cells_red = surrounding_reds.length > surrounding_blues.length;

            //If the cell is alive
            if(currentCell){
                if(currentCell.length>=2&&currentCell.length<=3){

                }
                else{
                    currentCell = null;
                }
            }
            //If the cell is dead
            else{
                if(){}
            }




            
            
        }
        
    }

}




export const GameOfLife = {
    setup:()=>({cells:Array(GAMEBOARD_HEIGHT).fill(Array(GAMEBOARD_WIDTH).fill(null))}),

    turn:{
        moveLimit:1
    },

    moves: {
        clickCell:(G,ctx,id)=>{
            let [i,j] =id.split(',').map(x=>{return parseInt(x);});
            let currentCell=G.cells[i][j];


            if(parseInt(ctx.currentPlayer)===0 && i===0){
                currentCell = currentCell===0? null: parseInt(ctx.currentPlayer);
            } else if(parseInt(ctx.currentPlayer)===1 && i===GAMEBOARD_HEIGHT-1){
                currentCell = currentCell? null: parseInt(ctx.currentPlayer);
            }
            else{
                return INVALID_MOVE;
            }
            G.cells[i][j]=currentCell;
            // G.cells[i][j] = currentCell==ctx.currentPlayer? null:
            // !currentCell?ctx.currentPlayer:;

        }
    },



};