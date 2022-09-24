var isGirl = [];
var isBoy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// var girlList=["김고라니", "박고라니", "정고라니", "백고라니", "흑고라니", "생고라니", "국산고라니", "왜래고라니"];
var boyList = ["김수인", "김언수", "김건우", "김명준", "김민찬", "김진유", "도현욱", "박규현", "박상현", "이유섭", "성의근", "안우진", "양원준", "이경민", "이찬혁", "조완규", "최현호", "하건록"];

//reset 버튼 클릭시 진짜냐고 붙고 확인시 리셋
$("#reset").click(function () {
    if (confirm("ㄹㅇ????????????")) {
        location.reload(true);
    }
});

//자리선정 버튼 클릭시 boyList에서 랜덤으로 뽑아서 td에 넣기
$("#goin").click(function () {
    if (confirm("헐 ㄹㅇ????????????")) {
        for (var i = 1; i <= 18; i++) {
            var random = Math.floor(Math.random() * boyList.length);
            $("#td" + i).text(boyList[random]);
            boyList.splice(random, 1);

        }
    }
    else {
        alert("휴");
    }
});

// ㅁㄴ어ㅜㄴㅁㄹ