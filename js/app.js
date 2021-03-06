'use strict';
import {clearDivsFromGrid} from './clearDivsFromGrid';
import {processingVideoClick} from './processingVideoClick';
import {addElementsToGrid} from './addElementsToGrid';
import {createButtonLoadMore} from './createButtonLoadMore';
import {end, savedResponse, setStart, setEnd, itemsLength, setItemsLength} from './someVariables';

// creatin` main grid
gettinStarted();
function gettinStarted() {
    document.getElementById("formId").addEventListener("submit", function (e) {
        e.preventDefault();

        //making the req
        clearDivsFromGrid();
        var request = {
            mainText: 'https://www.googleapis.com/youtube/v3/search?key=',
            apiKey: "AIzaSyAezjPltv0vkq6xzFlxfu9zHrQc1h4OHQ0",
            part: "snippet",
            type: "video",
            maxResults: 50,
            q: document.getElementById('TextForSearch').value,
            order: "viewCount"
        };
        //exc my req and add elems to grid
        fetch(request.mainText +
            request.apiKey + '&' +
            'type=' + request.type + '&' +
            'part=' + request.part + '&' +
            'maxResults=' + request.maxResults.toString() + '&' +
            'q=' + request.q + '&' +
            'order=' + request.order).then((resp) => resp.json()).then(function (response) {
            savedResponse.setResponse(response);

            setItemsLength(response.items.length);
            setStart(end);
            setEnd(Math.min(end + 15, itemsLength));

            addElementsToGrid(savedResponse.getResponse());
            createButtonLoadMore();
            processingVideoClick();
        })
    });
}

