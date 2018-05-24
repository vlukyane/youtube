// adding elements to grid
import {start, end} from './someVariables';
import {addingValuesIntoHTMLTemplate} from "./addingValuesIntoHTMLTemplate";

export function addElementsToGrid(response){
    var videos = response;
    for (var i = start; i < end; i++){

        var someValueFromResponse = videos.items[i];
        var newNode = document.createElement('div');
        newNode.setAttribute("id", someValueFromResponse.id.videoId);
        var imgUrl = someValueFromResponse.snippet.thumbnails.default.url;
        var videoDescription = someValueFromResponse.snippet.description.substring(0, 70);
        var author = someValueFromResponse.snippet.channelTitle;
        var title = someValueFromResponse.snippet.title;
        var publicationDate = someValueFromResponse.snippet.publishedAt;
        newNode.className = 'videoNum';
        var someStringPreparationsForInnerHTML = '<div class = div-for-img-url><img src=' + imgUrl +' class = img-url />\
        <h4>{{title}}</h4>\
        <p>{{author}}</p>\
        <p>{{videoDescription}}</p>\
        <p>{{publicationDate}}</p></div>';

        someStringPreparationsForInnerHTML = addingValuesIntoHTMLTemplate(
            someStringPreparationsForInnerHTML,
            [{  "title": title,
                "author": author,
                "videoDescription": videoDescription,
                "publicationDate": publicationDate
            }]);
        newNode.innerHTML = someStringPreparationsForInnerHTML;
        document.getElementById('grid').appendChild(newNode);
    }
}
