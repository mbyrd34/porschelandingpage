function changeImageOnHover(isHovering) {
    var image = document.getElementById('interior1');
    if (isHovering) {
        image.src = 'interior2.png';
    } else {
        image.src = 'interior1.png';
    }
}