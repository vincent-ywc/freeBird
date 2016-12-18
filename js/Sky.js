/**
 * Created by wencheng on 2016/11/24.
 */
(function (Fly) {
    var sky= function (options) {
        this.ctx=options.ctx;
        this.img=options.img;
        this.imgW=this.img.width;
        this.imgH=this.img.height;
        this.x=options.x;
        this.y=0;
        this.speed=0.15;
    }
    sky.prototype={
        constructor:sky,
        draw: function (delta) {
            this.x=this.x-this.speed*delta;
            if(this.x<=-this.imgW){
                this.x+=this.imgW*2
            }
            this.ctx.drawImage(this.img,0,0,this.imgW,this.imgH,this.x,this.y,this.imgW,this.imgH);
        }
    }
Fly.sky=sky;

})(Fly)