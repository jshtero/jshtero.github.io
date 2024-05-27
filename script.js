document.addEventListener('mousemove', function(e){
    const circleCursor = document.getElementById('CircleCursor');
    circleCursor.style.left = e.pageX + 'px';
    circleCursor.style.top = e.pageY + 'px';
});