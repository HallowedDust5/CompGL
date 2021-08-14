import {Client} from "boardgame.io/react";
import { GameOfLife } from "./Game";
import { GameOfLifeBoard } from "./Board";

const App = Client({
  game:GameOfLife,
  // debug:false
  board:GameOfLifeBoard
})

export default App;
