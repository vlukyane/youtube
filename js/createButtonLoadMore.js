import {processingButtonLoadMore} from "./processingButtonLoadMore";

export function createButtonLoadMore() {

    if (document.getElementById('buttonLoadMore')) { return; }
    var newButton = document.createElement("BUTTON");
    var newButtonText = document.createTextNode("Load more");
    newButton.appendChild(newButtonText);
    newButton.setAttribute('id', 'buttonLoadMore');
    document.getElementById('grid').parentNode.insertBefore(newButton, document.getElementById('grid').nextSibling)
    processingButtonLoadMore();
}

