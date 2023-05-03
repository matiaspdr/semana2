// Defino las variables globales, velocidad y limites los cuales son los mismos para todos

var Xmin = 50;
var Xmax = 1000;
var Ymin = 50;
var Ymax = 600;

// ahora creo las variables para la posición y cambio de sentido de velocidad de cada uno

var ball1 = document.getElementById("ball1");
var positionX1 = 100;
var positionY1 = 200;
var reverseX1 = true;
var reverseY1 = true;
var velocity1 = 50;

var ball2 = document.getElementById("ball2");
var positionX2 = 900;
var positionY2 = 450;
var reverseX2 = true;
var reverseY2 = true;
var velocity2 = 50;

var ball3 = document.getElementById("ball3");
var positionX3 = 50;
var positionY3 = 50;
var reverseX3 = true;
var reverseY3 = true;
var velocity3 = 50;

//aca va la función para mover las bolas

function moveBall1() {
  if(reverseX1){
    positionX1=positionX1+velocity1;
  }
  else{
    positionX1 = positionX1 - velocity1;}
  ball1.style.left = positionX1 +"px" ;
  if((positionX1 >= Xmax) || (positionX1 < Xmin)){reverseX1=!reverseX1};
  
  if (reverseY1){
    positionY1=positionY1+velocity1;}
  else{
    positionY1=positionY1-velocity1;}
  ball1.style.top = positionY1 + "px";
  if((positionY1 >= Ymax)||(positionY1<Ymin)){reverseY1=!reverseY1};
  }  

  function moveBall2() {
    if(reverseX2){
      positionX2=positionX2+velocity2;
    }
    else{
      positionX2 = positionX2 - velocity2;}
    ball2.style.left = positionX2 +"px" ;
    if((positionX2 >= Xmax) || (positionX2 < Xmin)){reverseX2=!reverseX2};
  
    if (reverseY2){
      positionY2=positionY2+velocity2;}
    else{
      positionY2=positionY2-velocity2;}
    ball2.style.top = positionY2 + "px";
    if((positionY2 >= Ymax)||(positionY2<Ymin)){reverseY2=!reverseY2};
    }  

    function moveBall3() {
        if(reverseX3){
          positionX3=positionX3+velocity3;
        }
        else{
          positionX3 = positionX3 - velocity3;}
        ball3.style.left = positionX3 +"px" ;
        if((positionX3 >= Xmax) || (positionX3 < Xmin)){reverseX3=!reverseX3};
      
        if (reverseY3){
          positionY3=positionY3+velocity3;}
        else{
          positionY3=positionY3-velocity3;}
        ball3.style.top = positionY3 + "px";
        if((positionY3 >= Ymax)||(positionY3<Ymin)){reverseY3=!reverseY3};

        }  

// llamo las funciones moveball al mismo tiempo
setInterval(moveBall1, 100);
setInterval(moveBall2,100);
setInterval(moveBall3,100);

