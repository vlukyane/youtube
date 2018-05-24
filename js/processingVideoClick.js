//creating frame with video frame, close button

import {processingButtonCloseVideo} from './processingButtonCloseVideo';
import {addingValuesIntoHTMLTemplate} from "./addingValuesIntoHTMLTemplate";
import {addEventListenerOnFrame} from "./addEventListenerOnFrame";

export function processingVideoClick() {

    var list = document.getElementsByClassName('videoNum');
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(e){

            if (document.querySelector(".frame")) { return; }
            var newNode = document.createElement('div');
            newNode.className = 'frame';
            var videoNode = document.createElement('div');
            videoNode.className = 'videoFrame';
            var closeButton = document.createElement('BUTTON');
            closeButton.className = 'closeButton';
            closeButton.setAttribute("id", "buttonCloseVideo");
            videoNode.innerHTML = addingValuesIntoHTMLTemplate('<iframe class="videoFromYoutube" src="//www.youtube.com/embed/{{videoid}}" frameborder="0" allowfullscreen></iframe>',
                [{ "videoid": this.id }]);
            videoNode.appendChild(closeButton);
            newNode.appendChild(videoNode);
            var button = document.querySelector('.row');
            button.parentNode.insertBefore(newNode, button.nextSibling);
            processingButtonCloseVideo();
            addEventListenerOnFrame();
        });
    }

}

