//create functionality to close button
export function processingButtonCloseVideo(){
    document.getElementById("buttonCloseVideo").addEventListener("click", function (e) {
        e.preventDefault();
        document.body.removeChild(document.querySelector(".frame"));
    })
}

