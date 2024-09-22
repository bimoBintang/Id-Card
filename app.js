const idCard = document.getElementById('idCard');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

idCard.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - idCard.offsetLeft;
    offsetY = e.clientY - idCard.offsetTop;
    idCard.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        idCard.style.left = `${e.clientX - offsetX}px`;
        idCard.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    idCard.style.cursor = 'grab';
});
