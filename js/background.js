class Background{
    constructor(ctx){
        this.ctx = ctx;
        this.backgroundFront = {
            img: new Image(),
            height: this.ctx.canvas.height,
            widht: 79,
            x: 0,
            y: ctx.canvas.height - 79,
            vx: -3,
            vy: 0
        };

        this.backgroundFront.img.src = "images/bg-front.png"

        this.backgroundFar = {
            img: new Image(),
            x: 0,
            y: -79,
            vx: -1,
            vy: 0
        }

        this.backgroundFar.img.src = "images/bg-far.png"

    }

    move(frameNumber){
        this.backgroundFront.x += this.backgroundFront.vx;
        this.backgroundFar.x += this.backgroundFar.vx;

        if (this.backgroundFront.x + this.backgroundFront.width <= 0)
        this.backgroundFront.x = 0;
        if (this.backgroundFar.x + this.backgroundFar.width <= 0)
        this.backgroundFar.x = 0;
    }

    draw(frameNumber){
        // Fat background first piece
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        )
        // Fat background second piece
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x + this.backgroundFar.width,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        )

        // Front background first piece
        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        )
     // Fat background second piece
        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x + this.backgroundFront.width,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        )

    }
}
