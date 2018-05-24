// don`t forget about clear grid for new req
import {start, setStart, setEnd} from './someVariables';
export function clearDivsFromGrid() {
    console.log(start);
    setStart(0);
    setEnd(15);
    var tree = document.getElementById("grid");
    while (tree.firstChild) {
        tree.removeChild(tree.firstChild);
    }
    var node = document.querySelector('.row');
    var buttonNode = document.getElementById('buttonLoadMore');
    if (buttonNode) { node.removeChild(buttonNode); }
}

