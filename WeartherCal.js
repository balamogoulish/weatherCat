var catImgValue;
var htemp;
var ltemp;
var nowtemp;
var weatherInfo;
var weatherTip;

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
function WeatherTip(tmn, tmx, pty, wsd, pop){
    if(tmx-tmn > 10) return "일교차가 크니 옷을 여러 개 입는 걸 추천한다냥!"
    else if(pty!=0 || pop>60) return "우산 챙기는 거 잊지 말라냥~"
    else if(tmx > 30) return "엣취! 에어컨 바람이 춥다냥.. 가디건도 챙겨가라냥.."
    else if(wsd > 10) return "바람이 강하다냥, 바람막이는 어떠냥?"
    else { //덕담 중 랜덤 선택
        var tip = [
            '멋쟁이가 될 준비됐냥?',
            '오늘도 멋진 하루 보내라냥!',
            '일찍 일어난 고양이가 졸린 법...',
            '더울 땐 시원하게, 추울 때 따뜻하게 입는 게 진정한 패션냥이지냥.',
            '오늘도 응원한다냥!',
            '내일부터 진짜 갓생살거다냥, 오늘은 좀 자고...'
        ];
        var random_index = Math.floor(Math.random()*tip.length);
        return tip[random_index];
    }
}

//API에서 가져오는 함수
function GetWeatherAPI(){    
    //API에서 값을 받아와 다음 변수에 넣어야 함
    var pop=60;
    var pty=0;
    var sky=1;
    var tmp=15;
    var tmn=25;
    var tmx=18;
    var wsd=5;

    htemp = tmx;
    ltemp = tmn;
    nowtemp = tmp;
    catImgValue = SelectImg((tmn+tmx)/2);
    weatherInfo = WeatherState(pty, sky, pop);
    weatherTip = WeatherTip(tmn, tmx, pty, wsd, pop);
}