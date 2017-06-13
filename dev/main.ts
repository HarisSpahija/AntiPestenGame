window.onload = () => {
    
    if (Collision.RectangleRectangle(player, collision)) {
        //trigger event
    }
    else {
        //don't trigger event
    }

    document.addEventListener('keydown', keyboardinput);

    ctx = canvas.getContext("2d");
    game();
}