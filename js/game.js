class Game{
    constructor(ctx, player, background, obstacles){
        this.ctx = ctx
        this.player = player
        this.background = background
        this.obstacles = obstacles
        this.frameNumber = null
    }

    start(){
       this.init()
       this.play()
    }

    init(){
        this.frameNumber = 0
        // this.sound.stop() etc..
        // background.init()
    }

    play(){
        this.frameNumber += 1;
        this.move();
        this.draw();
        this.checkCollision();
        this.ctx.clearRect(0,0,ctx.width, ctx.height);
        requestAnimationFrame( this.play.bind(this) )
    }

    move(){
        this.background.move(this.frameNumber)
        this.obstacles.move(this.frameNumber)
        this.player.move(this.frameNumber)
    }

    draw(){
        this.background.draw(this.frameNumber)
        this.obstacles.draw(this.frameNumber)
        this.player.draw(this.frameNumber)
    }

    checkCollision(){
        let collisions = false;

        if(this.obstacles.objects.some(obstacle => this.player.collideWith(obstacle))) collisions = true;

        if(this.player.exitsCanvas()) collisions = true

        return collisions
    }

}