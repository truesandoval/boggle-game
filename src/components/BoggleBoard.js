import RandomGrid from './randomGrid';
import NestedGrid from './grid';

export default function BoggleBoard(){
    var randomGrid = RandomGrid();
    return NestedGrid(randomGrid);
}