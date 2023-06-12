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
        [20,21,31,32,1,4,0,2],
        [23,22,0,17,18,19,0,1],
        [8,80,0,0,0,0,0,1],
        [51,52,53,53,53,54,0,1],
        [50,62,63,63,64,65,0,1],
        [61,60,59,59,59,58,0,1],
        [40,41,42,7,70,1,9,1],
        [45,44,43,1,1,1,1,1],
    ];


    // getContext 為原生語法 而前面屬於 jquery 所以要用[0]
    ctx = $("#myCanvas")[0].getContext("2d")

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain={
        x:600,
        y:0
    };
    imgMain.onload= function(){
        // (哪以張圖 , 開始的位置x,y(左上角) , 要裁寬度和高度 , 貼上的位置x,y(左上角)  , 貼上圖的寬和高)
        ctx.drawImage(imgMain,0,0,90,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    };
    //use function to load images
    let sources = { 
        Mountain:"images/grasses68-001-1.png",
        Enemy:"images/4_1.jpg",
        b1:"images/shail.jpg",
        b2:"images/wa.png",
        b6:"images/QQ.png",
        b7:"images/building 7.jpg",
        ch:"images/ch (2).png",
        sh:"images/s.jpg",
        ba:"images/ball.jpeg",
        bs:"images/bs.jpg",
        l:"images/left.png",
        m:"images/midd.png",
        ri:"images/right.png"
    };

    loadImages(sources,function(images){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(images.Mountain,0,0,780,600,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==17){
                    ctx.drawImage(images.l,0,0,700,620,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==18){
                    ctx.drawImage(images.m,0,0,550,550,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==19){
                    ctx.drawImage(images.ri,0,0,800,550,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==20){
                    ctx.drawImage(images.bs,0,0,800,700,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==21){
                    ctx.drawImage(images.bs,800,0,800,700,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==22){
                    ctx.drawImage(images.bs,800,700,800,700,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==23){
                    ctx.drawImage(images.bs,0,700,800,700,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==31){
                    ctx.drawImage(images.Enemy,10,10,80,100,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==32){
                    ctx.drawImage(images.Enemy,90,10,80,100,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                // else if(mapArray[x][y]==50){
                //     ctx.drawImage(images.ch,30,180,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==51){
                //     ctx.drawImage(images.ch,30,100,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==52){
                //     ctx.drawImage(images.ch,110,100,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==53){
                //     ctx.drawImage(images.ch,150,100,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==54){
                //     ctx.drawImage(images.ch,320,100,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==55){
                //     ctx.drawImage(images.ch,400,100,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==56){
                //     ctx.drawImage(images.ch,400,180,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==57){
                //     ctx.drawImage(images.ch,400,260,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==58){
                //     ctx.drawImage(images.ch,320,260,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==59){
                //     ctx.drawImage(images.ch,150,260,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==60){
                //     ctx.drawImage(images.ch,110,260,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==61){
                //     ctx.drawImage(images.ch,30,260,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==62){
                //     ctx.drawImage(images.ch,110,180,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==63){
                //     ctx.drawImage(images.ch,150,180,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==64){
                //     ctx.drawImage(images.ch,150,180,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                // else if(mapArray[x][y]==65){
                //     ctx.drawImage(images.ch,320,180,80,80,y*gridLength,x*gridLength,gridLength,gridLength);
                // }
                else if(mapArray[x][y]==6){
                    ctx.drawImage(images.Enemy,10,80,100,80,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==4){
                    ctx.drawImage(images.b2,110,80,100,80,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==40){
                    ctx.drawImage(images.ba,0,0,1300,1500,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==41){
                    ctx.drawImage(images.ba,1300,0,1300,1500,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==42){
                    ctx.drawImage(images.ba,2600,0,1300,1500,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==45){
                    ctx.drawImage(images.ba,0,1500,1300,1500,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==44){
                    ctx.drawImage(images.ba,1300,1500,1300,1500,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==43){
                    ctx.drawImage(images.ba,2600,1500,1300,1500,y*gridLength,x*gridLength,gridLength,gridLength);
                }

                else if(mapArray[x][y]==7){
                      ctx.drawImage(images.sh,500,0,1500,2900,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==70){
                    ctx.drawImage(images.sh,2000,0,2000,2900,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==8){
                    ctx.drawImage(images.b1,0,0,200,250,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==80){
                    ctx.drawImage(images.b1,200,0,200,250,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==9){
                    ctx.drawImage(images.b6,30,70,700,450,y*gridLength,x*gridLength,gridLength,gridLength);
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
            case 1://有障礙物(不可移動)
                $("#talkBox").text("樹!");
                //console.log(mbreak);
                if(mbreak==true){
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    mbreak=false;
                }
                break;
            case 2://有障礙物(不可移動)
                $("#talkBox").text("教學區");
                //console.log(mbreak);
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    nextLevel();
                    break;
            case 22://終點(可移動)
                $("#talkBox").text("宿舍");
                break;
            case 4:
                $("#talkBox").text("網球場");
                break;
            case 80:
                $("#talkBox").text("水好冰");
                break;
            case 9:
                $("#talkBox").text("!!");
                var randnum = Math.floor(Math.random() * 4) + 1;
                randddd(randnum);
                break;
            case 31:
                $("#talkBox").text("體育館!");
                break;
            case 43:
                $("#talkBox").text("來打球嗎?");
                break;
            case 50:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 51:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 52:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 53:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 54:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 55:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 56:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 57:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 58:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 59:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 60:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 61:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 62:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 63:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 64:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 65:
                $("#talkBox").text("跑起來!");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 7:
                $("#talkBox").text("向國旗敬禮");
                break;
            case 70:
                $("#talkBox").text("向國旗敬禮");
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
        window.location.href = "index3.html"; 
        }
        function randddd(randnum) {
            var r=randnum;
            if(r==1){
                window.alert("有蛇出沒!!");
                console.log(r);
            }
            else if(r==2){
                window.alert("無事發生");
                console.log(r);
            }
            else if(r==3){
                window.alert("被情侶閃瞎");
                console.log(r);
            }
            else if(r==4){
                window.alert("沒水怎麼會有鯉魚王?(´･ω･`)");
                console.log(r);
            }
        }
});


