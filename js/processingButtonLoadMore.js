import {end, itemsLength, savedResponse, setEnd, setStart, start} from "./someVariables";
import {addElementsToGrid} from "./addElementsToGrid";

export function processingButtonLoadMore() {
    document.getElementById('buttonLoadMore').addEventListener('click', function (e) {

        e.preventDefault();

        if (start === itemsLength) {
            alert('Sorry, cannot load more videos :(');
            return;
        }
        setStart(end);
        setEnd(Math.min(end + 15, itemsLength));
        addElementsToGrid(savedResponse.getResponse());
    })
}
