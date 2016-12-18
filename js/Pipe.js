/**
 * Created by wencheng on 2016/11/25.
 */
(function (Fly) {
    var Pipe= function (options) {
        this.ctx=options.ctx;
        this.imgUp=options.imgUp;
        this.imgDown=options.imgDown;

        this.imgW=this.imgUp.width;
        this.imgH=this.imgUp.height;

        this.x=options.x;
        this.upY=0;
        this.downY=0;

        this.speed=2;
        this.pipeSpace=150;

        this._initPipeY();
    };
    Pipe.prototype={
        constructor:Pipe,
        draw: function(){
         this.x -= this.speed;
         if(this.x< -this.imgW){
             this.x+=this.imgW*3*6;
             this._initPipeY();
         }
          this.ctx.drawImage(this.imgUp,this.x,this.upY);
          this.ctx.drawImage(this.imgDown,this.x,this.downY);

          this._initPath();
        },

    _initPipeY:function(){
        var pipeTopHeight=Math.floor(Math.random()*200)+50;

        this.upY=pipeTopHeight-this.imgH;
        this.downY=pipeTopHeight+this.pipeSpace;
    },
    _initPath:function(){
        this.ctx.rect(this.x,this.upY,this.imgW,this.imgH);
        this.ctx.rect(this.x,this.downY,this.imgW,this.imgH);
    }
    };

    Fly.Pipe=Pipe;
})(Fly)