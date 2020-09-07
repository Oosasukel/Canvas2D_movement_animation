function Player(img) {
    this.mvRight = false;
    this.mvLeft = false;
    this.mvUp = false;
    this.mvDown = false;
    this.width = 16;
    this.heigth = 32;
    this.srcX = this.width;
    this.srcY = 0;
    this.posX = 64;
    this.posY = 64;
    this.img = img;
    this.speed = 1;
    this.timeFrameAnimation = 8;
    this.animationRight = false;

    this.timeFrameAnimation /= this.speed;
    this.animationCount = 0;

    this.draw = (ctx) => {
        ctx.drawImage(
            this.img,
            this.srcX,
            this.srcY,
            this.width,
            this.heigth,
            this.posX,
            this.posY,
            this.width,
            this.heigth
        );
    };

    this.move = () => {
        if (this.mvRight) {
            this.posX += this.speed;
            this.srcY = this.heigth * 3;
        } else if (this.mvLeft) {
            this.srcY = this.heigth * 2;
            this.posX -= this.speed;
        } else if (this.mvUp) {
            this.posY -= this.speed;
            this.srcY = this.heigth * 1;
        } else if (this.mvDown) {
            this.posY += this.speed;
            this.srcY = 0;
        }
        this.animation();
    };

    this.animation = () => {
        if (this.mvRight || this.mvLeft || this.mvUp || this.mvDown) {
            this.animationCount++;
            if (this.animationCount >= this.timeFrameAnimation) {
                this.animationCount = 0;

                if (this.srcX === this.width) {
                    if (this.animationRight) {
                        this.animationRight = false;
                        this.srcX = 2 * this.width;
                    } else {
                        this.animationRight = true;
                        this.srcX = 0;
                    }
                } else {
                    this.srcX = this.width;
                }
            }
        }
    };
}
