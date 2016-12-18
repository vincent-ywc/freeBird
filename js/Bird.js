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
        this.maxSpeed = 0.5; // ��������С����ת�Ƕȵ� �ٶ����ֵ
        this.maxAngle = 45;	// ��������С����ת�����Ƕ�
        // Ҳ����˵�����ٶ�Ϊ 0.5 ��ʱ�򣬽Ƕ�Ϊ��45��
        // �����ٶ�Ϊ��0.2�����ڽǶ��Ƕ��٣� 0.2 / 0.5 * 45
    }
    Bird.prototype = {
        constructor: Bird,
        draw: function (delta) {
            var ctx=this.ctx;
            // �����ٶ� ������ʱ��delta��� ��ǰ�ٶ�
            // Vt = V0 + at
            this.speed = this.speed + this.a * delta;
            // console.log(speed);
            // ���㾭��ʱ�� delta ֮��ģ��ߵ�·��
            // s = V0t + 1/2at^2
            this.y = this.y + this.speed * delta + 1 / 2 * this.a * delta * delta;
            // �����ٶ�������ĽǶ�
            var curAngle = 0;
            curAngle = this.speed / this.maxSpeed * this.maxAngle;
            if (curAngle >= this.maxAngle) {
                curAngle = this.maxAngle;
            }
            ctx.save();

            //��ԭ���Ƶ�С�����ģ���С�����Ľ�����ת
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

