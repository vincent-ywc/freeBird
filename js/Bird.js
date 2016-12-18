/**
 * Created by wencheng on 2016/11/24.
 */
(function (Fly) {
    var Bird = function (options) {
        this.ctx = options.ctx;
        this.img = options.img;
        this.imgW = this.img.width / 3;
        this.imgH = this.img.height;
        this.frameIndex = 0;
        this.speed = 0;
        this.a = 0.0005;
        this.y = options.y || 100;
        this.x = options.x || 100;
        this.maxSpeed = 0.5; // 用来控制小鸟旋转角度的 速度最大值
        this.maxAngle = 45;	// 用来控制小鸟旋转的最大角度
        // 也就是说：当速度为 0.5 的时候，角度为：45度
        // 假设速度为：0.2，现在角度是多少： 0.2 / 0.5 * 45
    }
    Bird.prototype = {
        constructor: Bird,
        draw: function (delta) {
            var ctx=this.ctx;
            // 计算速度 ，经过时间delta后的 当前速度
            // Vt = V0 + at
            this.speed = this.speed + this.a * delta;
            // console.log(speed);
            // 计算经过时间 delta 之后的，走的路程
            // s = V0t + 1/2at^2
            this.y = this.y + this.speed * delta + 1 / 2 * this.a * delta * delta;
            // 根据速度来计算的角度
            var curAngle = 0;
            curAngle = this.speed / this.maxSpeed * this.maxAngle;
            if (curAngle >= this.maxAngle) {
                curAngle = this.maxAngle;
            }
            ctx.save();

            //把原点移到小鸟中心，以小鸟中心进行旋转
            ctx.translate(this.x, this.y);
            ctx.rotate(curAngle / 180 * Math.PI)
            ctx.drawImage(this.img,this.imgW * this.frameIndex, 0, this.imgW, this.imgH, -1 / 2 * this.imgW, -1 / 2 * this.imgH, this.imgW, this.imgH);
            ctx.restore();
            this.frameIndex++;
            this.frameIndex %= 3;
        }
    };
    Fly.Bird=Bird;
})(Fly)

