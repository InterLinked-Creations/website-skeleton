window.mainFrame = {
    /**
     * @type {HTMLElement}
     * @description The main iframe element on the page.
     */
    html: document.getElementById('mainframe'),

    /**
     * @type {boolean}
     * @description Indicates whether the frame is currently active. Some Interlinked pages wait to start up till the overlay is no longer active.
     * @default false
     */
    overlayOn: false, 


    /**
     * @description Flashes the overlay screen to a new page.
     * @param {string} src The path to the new page.
     */
    flash: function(src = false) {
        if (src) {
            const flashElement = document.getElementById('screenOverlay');
            flashElement.classList.add('active', 'flash');
            this.overlayOn = true;
            setTimeout(() => {
                this.html.src = "app/"+src;
            }, 800);
        }
    }
}

document.getElementById('mainframe').src = "app/intro.html";

document.getElementById('mainframe').addEventListener('load', e => {
    mainFrame.html.style.display = 'block';
    document.getElementById('loadingText').style.display = 'none';
    const iframe = e.currentTarget;
    const flashElement = document.getElementById('screenOverlay');
    flashElement.classList.remove('active');
    setTimeout(() => {
        flashElement.classList.remove('flash');
        mainFrame.overlayOn = false;
    }, 500);
});