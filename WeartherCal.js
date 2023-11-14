//평균 기온을 계산해 parameter를 제공하는 함수
function CalculateTemp(h, l){
    var htemp=h;
    var ltemp=l;
    var avgtemp = (htemp+ltemp)/2;
    if(avgtemp >= 28) return 28;
    else if(avgtemp<28 && avgtemp>=23) return 23;
    else if(avgtemp<23 && avgtemp>=20) return 20;
    else if(avgtemp<20 && avgtemp>=17) return 17;
    else if(avgtemp<17 && avgtemp>=12) return 12; 
    else if(avgtemp<12 && avgtemp>=9) return 9;
    else if(avgtemp<9 && avgtemp>=5) return 5;
    else if(avgtemp<5) return 5;
    else console.log('error: CalculateTemp에서 조건에 부합하지 않음');
}

//파라미터에 따라 기온별 이미지를 선택해 리턴하는 함수
function SelectImg(t){
    var selectedImg;
    switch(t){
        case 28: 
            selectedImg = "resource/28.jpg"; 
            break;
        case 23: 
            selectedImg = "resource/23.jpg"; 
            break;
        case 20: 
            selectedImg = "resource/20.jpg"; 
            break;
        case 17: 
            selectedImg = "resource/17.jpg"; 
            break;
        case 12: 
            selectedImg = "resource/12.jpg"; 
            break;
        case 9: 
            selectedImg = "resource/9.jpg"; 
            break;
        case 5: 
            selectedImg = "resource/5.jpg"; 
            break;
        default:   
            selectedImg = "resource/20.jpg"; 
    }
    return selectedImg;
}


catImgValue=SelectImg(CalculateTemp(30, 9));