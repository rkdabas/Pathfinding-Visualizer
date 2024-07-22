import { MazeType, TileType, GridType, SpeedType } from "./types"
import binaryTree from "./utils/binaryTree.ts"

export const runMazeAlogrithm = async({
  maze,grid,startTile,endTile,speed,setIsDisabled,
}: {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  speed: SpeedType;
  setIsDisabled: (isDisabled: boolean) => void; 
  }) => {
  if (maze === 'BINARY_TREE') {
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed)
  }
}