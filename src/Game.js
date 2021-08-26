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
            console.log(i,j)
            if(G.cells[i][j] !== null) {
                
                return INVALID_MOVE;
            }
            G.cells[i][j] = ctx.currentPlayer;
        }
    },

    

};