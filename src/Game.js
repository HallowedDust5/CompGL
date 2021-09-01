import { INVALID_MOVE } from "boardgame.io/core";



const GAMEBOARD_HEIGHT = 12;
const GAMEBOARD_WIDTH = 19;

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