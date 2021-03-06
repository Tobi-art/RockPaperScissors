//始めてだけ、どこにクリックすればよいか、目印をつけています。
// Game over後戻った際は表示されません。
var hello = localStorage.getItem("janken");
if (hello != "ok") {
    localStorage.setItem("janken", "ok");
    $('#click_here').show().fadeOut(3000)
} else {};


// イベント外でも使えるように、変数を宣言します。
let kekka = '';
let pc = '';
let r;
let a = 0;
let b = 0;

// ハバー時ボタンを拡大します。
$('#guu').on('mouseover', function() {
    $('#guu').css('transform', 'scale3d(1.3, 1.3, 1.3)')
});
$('#guu').on('mouseout', function() {
    $('#guu').css('transform', 'scale3d(1.0, 1.0, 1.0)')
});
$('#choki').on('mouseover', function() {
    $('#choki').css('transform', 'scale3d(1.3, 1.3, 1.3)')
});
$('#choki').on('mouseout', function() {
    $('#choki').css('transform', 'scale3d(1.0, 1.0, 1.0)')
});
$('#paa').on('mouseover', function() {
    $('#paa').css('transform', 'scale3d(1.3, 1.3, 1.3)')
});
$('#paa').on('mouseout', function() {
    $('#paa').css('transform', 'scale3d(1.0, 1.0, 1.0)')
});

$('.start').on('mouseover', function() {
    $('.start').css('-webkit-animation-play-state', 'paused')
});
$('.start').on('mouseout', function() {
    $('.start').css('-webkit-animation-play-state', 'running')
});

// ここからいよいよジャンケンのゲームが始まります。
// ケース１；グー
$('#guu').on('click', function() {
    // 選ばなかった選択しをfadeOutします。
    $('#choki').fadeOut(100)
    setTimeout(() => {
        $('#choki').fadeIn(1000)
    }, 1000);
    $('#paa').fadeOut(100)
    setTimeout(() => {
        $('#paa').fadeIn(1000)
    }, 1000);
    // 勝負です
    r = Math.floor(Math.random() * 3);
    switch (r) {
        case 0:
            kekka = 'あいこ';
            break;
        case 1:
            kekka = '勝ち';
            break;
        case 2:
            kekka = '負け';
            break;
    }
    // 結果を関数の外に出します。
    return kekka;
});

// ケース２；チョキ
$('#choki').on('click', function() {
    // 選ばなかった選択しをfadeOutします。
    $('#guu').fadeOut(100)
    setTimeout(() => {
        $('#guu').fadeIn(1000)
    }, 1000);
    $('#paa').fadeOut(100)
    setTimeout(() => {
        $('#paa').fadeIn(1000)
    }, 1000);
    // 勝負です。
    r = Math.floor(Math.random() * 3);
    switch (r) {
        case 0:
            kekka = '負け';
            break;
        case 1:
            kekka = 'あいこ';
            break;
        case 2:
            kekka = '勝ち';
            break;
    }
    // 結果を関数の外に出します。
    return kekka;
});

// ケース３；パー
$('#paa').on('click', function() {
    // 選ばなかった選択しをfadeOutします。
    $('#choki').fadeOut(100)
    setTimeout(() => {
        $('#choki').fadeIn(1000)
    }, 1000);
    $('#guu').fadeOut(100)
    setTimeout(() => {
        $('#guu').fadeIn(1000)
    }, 1000);
    // ここから勝負です。
    r = Math.floor(Math.random() * 3);
    switch (r) {
        case 0:
            kekka = '勝ち';
            break;
        case 1:
            kekka = '負け';
            break;
        case 2:
            kekka = 'あいこ';
            break;
    }
    // 結果を関数の外に出します。
    return kekka;
});

//PCの選択を表示し、結果を発表します。
$('.start').on('click', function() {
    // PCが選ばなかった選択しを非表示にします。
    if (r === 0) {
        $('#pcChoki').fadeOut(100)
        setTimeout(() => {
            $('#pcChoki').fadeIn(1000)
        }, 1000);
        $('#pcPaa').fadeOut(100)
        setTimeout(() => {
            $('#pcPaa').fadeIn(1000)
        }, 1000);
    } else if (r === 1) {
        $('#pcGuu').fadeOut(100)
        setTimeout(() => {
            $('#pcGuu').fadeIn(1000)
        }, 1000);
        $('#pcPaa').fadeOut(100)
        setTimeout(() => {
            $('#pcPaa').fadeIn(1000)
        }, 1000);
    } else if (r === 2) {
        $('#pcChoki').fadeOut(100)
        setTimeout(() => {
            $('#pcChoki').fadeIn(1600)
        }, 1900);
        $('#pcGuu').fadeOut(100)
        setTimeout(() => {
            $('#pcGuu').fadeIn(1600)
        }, 1900);
    };
    // 結果表示＋合計スコアの計算です。
    $('.happyo').fadeIn(200)
    setTimeout(() => {
        $('.happyo').fadeOut(1300)
    }, 1000);
    if (kekka === '勝ち') {
        $('#happyo').attr("src", "img/youWin.jpg");
        a++;
    } else if (kekka === '負け') {
        $('#happyo').attr("src", "img/youLoose.jpg");
        b++;
    } else {
        $('#happyo').attr("src", "img/draw.jpg");
    };
    $('#myScore').text(a);
    $('#pcScore').text(b);

    //　自分のスコア、又はPCのスコアが３になったら、別のページに飛ばされます。
    setTimeout(() => {
        if (a === 3) {
            window.location.href = "win.html";
        } else if (b === 3) {
            window.location.href = "gameOver.html";
        }
    }, 1000);
});