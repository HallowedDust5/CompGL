import { INVALID_MOVE } from "boardgame.io/core";
import { floor } from 'mathjs';

const GAMEBOARD_HEIGHT = 12;
const GAMEBOARD_WIDTH = 19;
const middlethree = [0,1,2].map((x)=>{
    return floor(GAMEBOARD_WIDTH/2)+x-1;
});





function GoL_Logic(board) {
    let board_copy = Array.from(board);

    for (let i = 1; i < board.length-1; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let surrounding_cells = [
                board_copy[i-1][j],//Top
                board_copy[i][j+1],//Right
                board_copy[i+1][j],//Bottom
                board_copy[i][j-1],//Left
            ];
            //If the cell has 4 surrounding it, it dies
            if(!surrounding_cells.every(Boolean)){board[i][j]=null;}
            
            
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
            console.log(currentCell);

            if(ctx.currentPlayer==0 && i===0){
                currentCell = currentCell? null: ctx.currentPlayer;
            } else if(ctx.currentPlayer==1 && i===GAMEBOARD_HEIGHT-1){
                currentCell = currentCell? null: ctx.currentPlayer;
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