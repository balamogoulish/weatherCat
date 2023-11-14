var catImgValue;
var htemp;
var ltemp;
var nowtemp;
var weatherInfo;

GetWeatherAPI();

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

function WeatherState(p, s, rp){
    var howRainSnow;
    var howSky;
    switch(p){
        case 1: 
            howRainSnow="비";
            break;
        case 2: 
            howRainSnow="비/눈";
            break;
        case 3:
            howRainSnow="눈";
            break;
        case 4:
            howRainSnow="소나기";
            break;
        default:
            howRainSnow="";
    }
    switch(s){
        case 3:
            howSky="구름이 많을";
            break;
        case 4:
            howSky="흐릴";
            break;
        default:
            howSky="맑을";
    }
    if(howRainSnow==""){
        if(rp>=60){
            return "비 올 확률이 "+rp+"%이상이고 "+howSky+" 예정이에요.";
        } else{
            return "오늘은 "+howSky+" 예정이에요.";
        }
    } else if(p==3 || p==2){
        return "오늘은 "+howRainSnow+"이 내리고 "+howSky+" 예정이에요.";
    } else{
        return "오늘은 "+howRainSnow+"가 내리고 "+howSky+" 예정이에요.";
    }
}

//날씨에 대한 팁 혹은 덕담 제공 함수
function WeatherTip(){}

//API에서 가져오는 함수
function GetWeatherAPI(){    
    //API에서 값을 받아와 다음 변수에 넣어야 함
    var pop=60;
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
    weatherInfo = WeatherState(pty, sky, pop);
}