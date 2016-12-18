/**
 * Created by wencheng on 2016/11/25.
 */
(function (Fly) {
    var Land= function (options) {
        this.ctx=options.ctx;
        this.img=options.img;
        this.imgW=this.img.width;
        this.imgH=this.img.height;
        this.x=options.x;
        this.y=options.y;
        this.speed=0.15;
    }
    Land.prototype={
        constructor:Land,
        draw: function (delta) {
            this.x=this.x-this.speed*delta;
            if(this.x<=-this.imgW){
                this.x+=this.imgW*4
            }
            this.ctx.drawImage(this.img,0,0,this.imgW,this.imgH,this.x,this.y,this.imgW,this.imgH);
        }
    }

    Fly.Land=Land;
})(Fly)