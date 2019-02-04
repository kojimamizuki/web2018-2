<script type="text/javascript"><!--
myImage = new Array(                      // 画像ファイル名の設定
 "kuji0.gif",
 "kuji1.gif",
 "kuji2.gif",
 "kuji3.gif"
);
myNowCnt = 0;                        // 現在表示している画像番号
function myChange(){                 // 定期的に画像を更新する関数
  if (myNowCnt == myImage.length-1){     // 最後の画像まで表示したのなら 
    myNowCnt=0;                     // 最初の画像に戻す
  }else{                             // 最後の画像まで表示していないのなら
    myNowCnt++;                     // 次の画像へ
  }
  document.sshow.src = myImage[myNowCnt];  // 次の画像を表示する
  setTimeout( "myChange()" , 1000 );           // 1秒周期に画像を更新する
}
// --></script>

<img src="kuji0.gif" width="50" height="100" name="sshow">
<script type="text/javascript"><!--
 myChange();  
// --></script>
