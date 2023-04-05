const bodyEl = document.getElementsByTagName('body');

          
function changeBackgroundColor(event) {
    const backgroundColor = event?.target?.value;
    bodyEl[0].style.backgroundColor = backgroundColor;
}