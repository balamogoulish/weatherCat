function CheckLogin(){
    var valid=true; //임시 value

    var idValue = $('#inputId').val();
    var pwValue = $('#inputPw').val();

    //idValue, pwValue를 서버에 찔러주고, 로그인 성공 여부와 토큰을 받아옴

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
    //토큰을 삭제함

    alert('로그아웃 되었습니다!')
    window.location.href='index.html';
}

function CheckSignUp(){
    var id = $('#newId').val();
    var pw = $('#newPw').val();
    var pwRe = $('#checkPw').val();
    var name = $('#newName').val();
    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


    if(name.length<2 || name.length>10 || id.length<2 || id.length>10 || !reg.test(pw) || pw!==pwRe){
        if(name.length<2 || name.length>10)
            $('#nameWarning').css('visibility', 'visible');
        else
            $('#nameWarning').css('visibility', 'hidden');
        if(id.length<2 || id.length>10)
            $('#idWarning').css('visibility', 'visible');
        else
            $('#idWarning').css('visibility', 'hidden');
        if (!reg.test(pw))
            $('#pwWarning').css('visibility', 'visible');
        else
            $('#pwWarning').css('visibility', 'hidden');
        if(pw!==pwRe)
            $('#pwReWarning').css('visibility', 'visible');
        else
            $('#pwReWarning').css('visibility', 'hidden');
    } else{ //회원가입 유효성 통과 시
        CheckSignUpToServer(name, id, pw);
    }
}

function CheckSignUpToServer(name, id, pw){
    var valid =0;
    //id, pw, pwRe, name을 서버에 보내고 회원가입 유효성 리턴값을 받음
    //0: 회원가입 성공
    //1: 아이디 중복
    //2: 비밀번호 중복

    console.log('to server\nid: '+id+'\npw: '+pw+'\nname: '+name);
    switch(valid){
        case 0:
            alert('회원가입에 성공했습니다!');
            window.location.href='index.html';
            break;
        case 1:
            alert('중복된 아이디입니다.');
            break;
        case 2:
            alert('중복된 비밀번호입니다.');
            break;
    }
}