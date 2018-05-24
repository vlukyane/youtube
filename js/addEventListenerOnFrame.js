export function addEventListenerOnFrame() {
    document.body.querySelector('.frame').addEventListener('touchstart', function (e) {
        var startX = null;
        var deltaX = null;
        startX = e.targetTouches[0].pageX;
        this.addEventListener('touchmove', function (e) {
            deltaX = e.targetTouches[0].pageX - startX;
            if (Math.abs(deltaX) >= 200) {
                document.body.removeChild(document.querySelector(".frame"));
                return;
            }
        })
    });
}
