let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy,imgsh;
const gridLength=100;
var mbreak=false;
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
}

$(function(){
    //  0 -> 可走 , 1-> 障礙 , 2->終點 , 3->敵人
    mapArray = [
        [100,100,100,100,7,0,20,100],
        [20,20,20,20,20,0,20,100],
        [90,0,0,0,0,0,8,9],
        [71,72,0,31,32,0,10,11],
        [73,74,0,33,34,0,20,20],
        [2,0,0,0,0,0,0,61],
        [20,21,22,0,3,5,0,62],
        [20,23,24,20,6,4,20,20],
    ];


    // getContext 為原生語法 而前面屬於 jquery 所以要用[0]
    ctx = $("#myCanvas")[0].getContext("2d")

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain={
        x:500,
        y:0
    };
    imgMain.onload= function(){
        // (哪以張圖 , 開始的位置x,y(左上角) , 要裁寬度和高度 , 貼上的位置x,y(左上角)  , 貼上圖的寬和高)
        ctx.drawImage(imgMain,0,0,90,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    };
    //use function to load images
    let sources = { 
        Mountain:"images/tree.png",
        GN:"images/grasses68.gif",
        Grass:"images/grasses68-001-1.png",
        Enemy:"images/building 5.jpg",
        b1:"images/building 1.jpg",
        b2:"images/building 2.jpg",
        b3:"images/building 3.jpg",
        b6:"images/building 6.jpg",
        b7:"images/building 7.jpg",
        sh:"images/door.png",
        qu:"images/qure.png"
        
    };

    loadImages(sources,function(images){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==2){
                    ctx.drawImage(images.Mountain,224,31,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==20){
                    ctx.drawImage(images.Grass,0,0,750,600,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==100){
                    ctx.drawImage(images.GN,0,0,750,600,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==3){
                    ctx.drawImage(images.Enemy,10,0,100,80,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==5){
                    ctx.drawImage(images.Enemy,110,0,100,80,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==6){
                    ctx.drawImage(images.Enemy,10,80,100,80,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==4){
                    ctx.drawImage(images.Enemy,110,80,100,80,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==7){
                      ctx.drawImage(images.sh,30,0,500,400,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==8){
                    ctx.drawImage(images.b1,300,150,300,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==9){
                    ctx.drawImage(images.b1,600,150,300,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==10){
                    ctx.drawImage(images.b1,300,450,300,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==11){
                    ctx.drawImage(images.b1,600,450,300,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==21){
                    ctx.drawImage(images.b2,0,0,300,150,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==22){
                    ctx.drawImage(images.b2,300,0,300,150,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==23){
                    ctx.drawImage(images.b2,0,150,300,150,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==24){
                    ctx.drawImage(images.b2,300,150,300,150,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==61){
                    ctx.drawImage(images.b6,0,0,400,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==62){
                    ctx.drawImage(images.b6,0,300,400,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==31){
                    ctx.drawImage(images.b3,0,40,300,200,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==32){
                    ctx.drawImage(images.b3,300,40,300,200,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==33){
                    ctx.drawImage(images.b3,0,240,300,200,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==34){
                    ctx.drawImage(images.b3,300,240,300,200,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==71){
                    ctx.drawImage(images.b7,0,40,400,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==72){
                    ctx.drawImage(images.b7,400,40,400,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==73){
                    ctx.drawImage(images.b7,0,340,400,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==74){
                    ctx.drawImage(images.b7,400,340,400,300,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==90){
                    ctx.drawImage(images.qu,30,30,400,400,y*gridLength,x*gridLength,gridLength,gridLength);
                }

            }
        }
    });

});  




$(document).on("keydown",function(event){
    console.log(event.code);
    
    let targetImg,targetBlock,cutImagePositionX; 
    targetImg={
        x:-1,
        y:-1
    };
    targetBlock={
        //主角的目標(對應2維陣列)
        x:-1,
        y:-1
    }
    event.preventDefault();//上下左右不影響畫面
    switch(event.code){
        case "ArrowLeft":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=175;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutImagePositionX=355;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=540;//臉朝右
            break;
        case "ArrowDown":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            cutImagePositionX=0;//臉朝下
            break;
        default://其他按鍵不處理
            return;
    }

    if(targetImg.x <= 700 && targetImg.x >= 0 && targetImg.y <= 700 && targetImg.y >= 0){
        targetBlock.x=targetImg.y / gridLength;
        targetBlock.y=targetImg.x / gridLength;
    }
    else{
        targetBlock.x=-1;
        targetBlock.y=-1;
    }

    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    
    
    if(targetBlock.x!=-1&&targetBlock.y!=-1){    
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0://一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;   
            case 7://一般道路(可移動)
                $("#talkBox").text("大門口");
                break;            
            case 20://有障礙物(不可移動)
                $("#talkBox").text("有樹");
                //console.log(mbreak);
                if(mbreak==true){
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    mbreak=false;
                }
                break;
            case 2://終點(可移動)
                $("#talkBox").text("宿舍區");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                nextLevel(); // 進入下一關的函式
                break;
            case 3:
                $("#talkBox").text("五館!");
                break;
            case 4:
                $("#talkBox").text("五館!");
                break;
            case 5:
                $("#talkBox").text("五館!");
                break;
            case 6:
                $("#talkBox").text("五館!");
                break;
            case 8:
                $("#talkBox").text("一館!");
                break;
            case 10://寶箱(可移動)
                $("#talkBox").text("一館!");
                break;
            case 21://寶箱(可移動)
                $("#talkBox").text("二館!");
                break;
            case 22://寶箱(可移動)
                $("#talkBox").text("二館!");
                break;
            case 23://寶箱(可移動)
                $("#talkBox").text("二館!");
                break;            
            case 24://寶箱(可移動)
                $("#talkBox").text("二館!");
                break;
            case 31://寶箱(可移動)
                $("#talkBox").text("三館!");
                break;
            case 32://寶箱(可移動)
                $("#talkBox").text("三館!");
                break;
            case 33://寶箱(可移動)
                $("#talkBox").text("三館!");
                break;
            case 34://寶箱(可移動)
                $("#talkBox").text("三館!");
                break;
            case 61:
                $("#talkBox").text("六館!");
                break;
            case 62:
                $("#talkBox").text("六館!");
                break;
            case 71:
                $("#talkBox").text("七館!");
                break;
            case 72:
                $("#talkBox").text("七館!");
                break;
            case 73:
                $("#talkBox").text("七館!");
                break;
            case 74:
                $("#talkBox").text("七館!");
                break;
            case 90:
                $("#talkBox").text("!!");
                var randnum = Math.floor(Math.random() * 4) + 1;
                randddd(randnum);
                break;
        }
    }
    else{
        $("#talkBox").text("邊界");
    }
    //重新繪製主角
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    //event.preventDefault();//上下左右不影響畫面
    function nextLevel() {
    // 在这里加入进入下一关的代码
    console.log("进入下一关");

    // 重定向到另一个网页
    window.location.href = "index2.html"; 
    }
    function randddd(randnum) {
        var r=randnum;
        if(r==1){
            window.alert("巧遇七館好運貓貓!!!");
            console.log(r);
        }
        else if(r==2){
            window.alert("無事發生");
            console.log(r);
        }
        else if(r==3){
            window.alert("跌入烏龜池");
            console.log(r);
        }
        else if(r==4){
            window.alert("外國友人:Hello! How are you!");
            console.log(r);
        }
    }

});


