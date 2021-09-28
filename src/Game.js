import { INVALID_MOVE } from "boardgame.io/core";
import { randomInt } from "mathjs";

const GAMEBOARD_HEIGHT = 12;
const GAMEBOARD_WIDTH = 19;
const RED = 0;
const BLUE =1;






export const GameOfLife = {
    setup:()=>({
        cells:Array(GAMEBOARD_HEIGHT).fill(Array(GAMEBOARD_WIDTH).fill(null)),
        red_turn_button: false,
        blue_turn_button: false,

    }),

   //TODO
     //Make it so both players have to press the button to end the turn
    turn:{
        moveLimit:1,
        // onEnd:GameOfLifeLogic(G),
        onEnd: (G)=>GameOfLifeLogic(G),
        // endIf:
    },

    moves: {
        clickCell:{
            move:(G,ctx,id)=>{
                let [i,j] =id.split(',').map(x=>{return parseInt(x);});
                let currentCell=G.cells[i][j];


                if(parseInt(ctx.currentPlayer)===0 && i===0){
                    currentCell = currentCell===0? null: parseInt(ctx.currentPlayer);
                } else if(parseInt(ctx.currentPlayer)===1 && i===GAMEBOARD_HEIGHT-1){
                    currentCell = currentCell? null: parseInt(ctx.currentPlayer);
                } else{
                    return INVALID_MOVE;
                }
                G.cells[i][j]=currentCell;
                

            },
            redact:true,

        }
    },
     



};



function isAlive(x){
    return x===RED || x === BLUE;
};

//This functions implements the Game of Life logic so that after every turn the board updates
function GameOfLifeLogic(G) {
    let board = G.cells;
    let board_copy = JSON.parse(JSON.stringify(board));




    for (let i = 1; i < board.length-1; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let current_cell = board[i][j];
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
            let not_null_surrounding = surrounding_cells.filter(x=>{return x!==null && x!==undefined;});
            let are_majority_cells_red = surrounding_reds.length > surrounding_blues.length;
            let are_cells_equal = surrounding_reds.length ===surrounding_blues.length;

            //If the cell is alive
            if(isAlive(current_cell)){
                if(not_null_surrounding.length>=2&&not_null_surrounding.length<=3){
                    current_cell = are_majority_cells_red? 0: //If there are more red cells than blue, then it gets assigned 0
                    are_cells_equal? randomInt(0,2):1; //Are there an equal number of red and blue? Yes, it randomly assigns one
                }
                else{
                    current_cell = null;
                }
            }
            //If the cell is dead and there's 3 cells around it
            else if(not_null_surrounding.length ===3){
                current_cell = are_majority_cells_red? 0:1; //Are majority of the cells red? Yes gets 0. There's no equal check b/c 3 is odd

            }
            board[i][j] = current_cell;



            return G;
            
        }
        
    }

}