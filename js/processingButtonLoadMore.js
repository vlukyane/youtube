import {end, savedResponse, setEnd, setStart, start} from "./someVariables";
import {addElementsToGrid} from "./addElementsToGrid";

export function processingButtonLoadMore() {
    document.getElementById('buttonLoadMore').addEventListener('click', function (e) {

        e.preventDefault();

        if (start === 45) {
            alert('Sorry, cannot load more videos :(');
            return;
        }
        setStart(end);
        setEnd(end + 15);
        addElementsToGrid(savedResponse.getResponse());
    })
}
