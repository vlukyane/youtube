// don`t forget about clear grid for new req
import {start, setStart, setEnd, itemsLength} from './someVariables';
export function clearDivsFromGrid() {
    console.log(start);
    setStart(0);
    setEnd(Math.min(15, itemsLength));
    var tree = document.getElementById("grid");
    while (tree.firstChild) {
        tree.removeChild(tree.firstChild);
    }
    var node = document.querySelector('.row');
    var buttonNode = document.getElementById('buttonLoadMore');
    if (buttonNode) { node.removeChild(buttonNode); }
}

