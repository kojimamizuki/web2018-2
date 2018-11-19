function ChangeImageAndBack(){
  
  imgback();
  
  ThreeSecChange2(); 
  
}


function ThreeSecChange2(){
  setTimeout("imgchange2()",3000);
}
function imgchange2() {
  document.getElementById('img13').src = './image/josai.png';
}

//function ThreeSecBack() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
//  setInterval("imgback()",3000);
//}

function imgback() {
  document.getElementById('img13').src = './image/bulbon.gif';
}