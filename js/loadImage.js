/**
 * Created by wencheng on 2016/11/25.
 */
(function (Fly) {
    var imgLoad= function (imgsSrcArr,callback) {
        var count=0;
        var imgList={};
        imgsSrcArr.forEach(function (imgSrc) {
            var img=new Image();
            img.src="./imgs/"+imgSrc+".png";
            imgList[imgSrc]=img;
            img.onload= function () {
                count++;
                if(count>=imgsSrcArr.length){
                    callback(imgList);
                }
            }
        })
    };
 Fly.imgLoad=imgLoad;
})(Fly)