function updateScreenInfo() {
    document.getElementById('screenRes').textContent = 
        `${screen.width} × ${screen.height} pixels`;
    
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    document.getElementById('windowSize').textContent = 
        `${windowWidth} × ${windowHeight} pixels`;
    
    document.getElementById('availSpace').textContent = 
        `${screen.availWidth} × ${screen.availHeight} pixels`;

    var orientation = `landscape`;

    if (windowHeight == windowWidth) {
        orientation = "square";
    } else if (windowHeight > windowWidth) {
        orientation = "portrait";
    }
    
    document.getElementById('windowOrient').textContent = 
        `${orientation}`;

}

window.addEventListener('load', updateScreenInfo);
window.addEventListener('resize', updateScreenInfo);
