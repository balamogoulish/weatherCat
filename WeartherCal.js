var catImgValue;
var htemp;
var ltemp;
var nowtemp;

getWeatherAPI();

//파라미터에 따라 기온별 이미지를 선택해 리턴하는 함수
function SelectImg(avgtemp){
    if(avgtemp >= 28) return "resource/28.jpg"; 
    else if(avgtemp<28 && avgtemp>=23) return "resource/23.jpg"; 
    else if(avgtemp<23 && avgtemp>=20) return "resource/20.jpg"; 
    else if(avgtemp<20 && avgtemp>=17) return "resource/17.jpg"; 
    else if(avgtemp<17 && avgtemp>=12) return "resource/12.jpg"; 
    else if(avgtemp<12 && avgtemp>=9) return "resource/9.jpg"; 
    else if(avgtemp<9 && avgtemp>=5) return "resource/5.jpg"; 
    else if(avgtemp<5) return "resource/1.jpg"; 
    else console.log('error: CalculateTemp에서 조건에 부합하지 않음');
}

//API에서 가져오는 함수
function getWeatherAPI(){    
    var pop=50;
    var pty=0;
    var sky=1;
    var tmp=15;
    var tmn=0;
    var tmx=0;
    var wsd=5;

    htemp = tmx;
    ltemp = tmn;
    nowtemp = tmp;
    catImgValue = SelectImg((tmn+tmx)/2);
}