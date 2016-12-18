/**
 * Created by wencheng on 2016/11/25.
 */
(function (Fly) {
    this.Game= function (options) {
        this.ctx = options.ctx;
        this.imgsSrcArr=["birds","land","pipe1","pipe2","sky"];
        this.roles=[];
        this.lastFrameTime=new Date();
        this.curFrameTime= 0;
        this.delta= 0;
        this.isRuning=false;
        this.hero=null;
    }
    Game.prototype={
        custructor:Game,
        start: function () {
            var self=this;
            Fly.imgLoad(self.imgsSrcArr, function (imgList) {
                self.isRuning=true;
                self.initRoles(imgList);
                self.render(imgList);
                self.bindEvent();
            });
        },

        initRoles: function (imgList) {
            var skyImg=imgList["sky"];
            var pipeUp=imgList["pipe2"];
            var pipeDown=imgList["pipe1"];
            var landImg=imgList["land"];
            var birdImd=imgList["birds"];
            var self=this;
            for(var i=0;i<2;i++){
                var sky=new Fly.sky({
                    ctx:ctx,
                    img:skyImg,
                    x:i*skyImg.width
                });
                self.roles.push(sky);
            };


            for(var i=0;i<6;i++){
                var pipe=new Fly.Pipe({
                    ctx:ctx,
                    imgUp:pipeUp,
                    imgDown:pipeDown,
                    x:i*3*pipeUp.width+300
                });
                self.roles.push(pipe);
            }


            for(var i=0;i<4;i++){
                var land=new Fly.Land({
                    ctx:ctx,
                    img:landImg,
                    x:i*landImg.width,
                    y:cv.height-landImg.height
                });
                self.roles.push(land);
            };

            var bird=new Fly.Bird({
                "ctx":ctx,
                "img":birdImd
            });
            self.hero=bird
        },
        render: function (imgList) {
            var self=this;
            var landImg=imgList["land"];
            var cv=this.ctx.canvas;
            (function draw() {
                self.ctx.beginPath();
                self.ctx.clearRect(0,0,cv.width,cv.height);
                self.curFrameTime=new Date();
                self.delta=self.curFrameTime-self.lastFrameTime;
                self.lastFrameTime=self.curFrameTime;

                self.roles.forEach(function (role) {
                    role.draw(self.delta);
                })

                self.hero.draw(self.delta);

                if(self.hero.y<0 || self.hero.y>=cv.height-landImg.height-10 || ctx.isPointInPath(self.hero.x,self.hero.y)){
                    self.isRuning=false;
                }

                if(self.isRuning){
                    requestAnimationFrame(draw);
                }
            })()
        },
        bindEvent: function () {
            var self=this;
            self.ctx.canvas.addEventListener("click", function () {
                self.hero.speed=-.3;
            })
        },
    };

    Fly.Game=Game;
})(Fly)