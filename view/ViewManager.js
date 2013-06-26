$(document).ready(function(){
    var panel = new Panel();

    var image = new Image();
    image.src = './resources/images/twitter.jpg'
    panel.appendImage(image)
    panel.positionCenter();
});
