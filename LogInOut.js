function checkLogin(){
    var valid=true; //임시 value

    var idValue = $('#inputId').val();
    var pwValue = $('#inputPw').val();

    if(valid){ //로그인 성공 시
        //토큰 발급, 쿠키에 저장 -> 로그인 유지
        console.log('id: '+idValue+'\npw: '+pwValue);
        alert('로그인에 성공했습니다!');
        $('#loginWarning').css('visibility', 'hidden');
        window.location.href='MainPage.html';
    } else{ //로그인 실패 시
        $('#loginWarning').css('visibility', 'visible');
    }
    
}

function Logout(){
    alert('로그아웃 되었습니다!')
    window.location.href='index.html';
}