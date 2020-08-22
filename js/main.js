window.onload = () => {
    const LEFT = 65;
    const UP = 87;
    const RIGHT = 68;
    const DOWN = 83;

    const canvas = document.querySelector('canvas');
    canvas.width = 384;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');

    const backgroundImg = new Image();
    backgroundImg.src = 'images/background.png';
    const spriteSheet = new Image();
    spriteSheet.src = 'images/sprites.png';

    const player = new Player(spriteSheet);

    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);

    function keyupHandler(e) {
        switch (e.keyCode) {
            case RIGHT:
                player.mvRight = false;
                break;
            case LEFT:
                player.mvLeft = false;
                break;
            case UP:
                player.mvUp = false;
                break;
            case DOWN:
                player.mvDown = false;
                break;
        }
    }

    function keydownHandler(e) {
        switch (e.keyCode) {
            case RIGHT:
                player.mvRight = true;
                player.mvLeft = false;
                player.mvUp = false;
                player.mvDown = false;
                break;
            case LEFT:
                player.mvRight = false;
                player.mvLeft = true;
                player.mvUp = false;
                player.mvDown = false;
                break;
            case UP:
                player.mvRight = false;
                player.mvLeft = false;
                player.mvUp = true;
                player.mvDown = false;
                break;
            case DOWN:
                player.mvRight = false;
                player.mvLeft = false;
                player.mvUp = false;
                player.mvDown = true;
                break;
        }
    }

    spriteSheet.onload = () => {
        init();
    };

    const init = () => {
        loop();
    };

    const update = () => {
        player.move();
    };

    const draw = () => {
        ctx.drawImage(
            backgroundImg,
            0,
            0,
            backgroundImg.width,
            backgroundImg.height,
            0,
            0,
            backgroundImg.width,
            backgroundImg.height
        );
        player.draw(ctx);
    };

    const loop = () => {
        update();
        draw();
        window.requestAnimationFrame(loop, canvas);
    };
};
