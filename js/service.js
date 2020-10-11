'use strict'

var KEY_PLAYERS = 'players';
var gPlayers = [];

function createPlayer(name, num) {
    var player = {
        name: name,
        num: num
    }
    gPlayers.push(player);
    saveToStorage(KEY_PLAYERS, gPlayers);
}

function renderPlayers() {
    $('#li-0').text(gPlayers[0].num + ' ' + '|' + ' ' + gPlayers[0].name);
    $('#li-1').text(gPlayers[1].num + ' ' + '|' + ' ' + gPlayers[1].name);
    $('#li-2').text(gPlayers[2].num + ' ' + '|' + ' ' + gPlayers[2].name);
    $('#li-3').text(gPlayers[3].num + ' ' + '|' + ' ' + gPlayers[3].name);
    $('#li-4').text(gPlayers[4].num + ' ' + '|' + ' ' + gPlayers[4].name);
    $('#li-5').text(gPlayers[5].num + ' ' + '|' + ' ' + gPlayers[5].name);
    $('#li-6').text(gPlayers[6].num + ' ' + '|' + ' ' + gPlayers[6].name);
    $('#li-7').text(gPlayers[7].num + ' ' + '|' + ' ' + gPlayers[7].name);
    $('#li-8').text(gPlayers[8].num + ' ' + '|' + ' ' + gPlayers[8].name);
    $('#li-9').text(gPlayers[9].num + ' ' + '|' + ' ' + gPlayers[9].name);
    $('#li-10').text(gPlayers[10].num + ' ' + '|' + ' ' + gPlayers[10].name);
    $('#li-11').text(gPlayers[11].num + ' ' + '|' + ' ' + gPlayers[11].name);
    $('#li-12').text(gPlayers[12].num + ' ' + '|' + ' ' + gPlayers[12].name);
    $('#li-13').text(gPlayers[13].num + ' ' + '|' + ' ' + gPlayers[13].name);
    $('#li-14').text(gPlayers[14].num + ' ' + '|' + ' ' + gPlayers[14].name);
    $('#li-15').text(gPlayers[15].num + ' ' + '|' + ' ' + gPlayers[15].name);
    $('#li-16').text(gPlayers[16].num + ' ' + '|' + ' ' + gPlayers[16].name);
    $('#li-17').text(gPlayers[17].num + ' ' + '|' + ' ' + gPlayers[17].name);
}

function renderPlayerCards() {
    $('#name0').text(gPlayers[0].name);
    $('#num0').text(gPlayers[0].num);
    $('#name1').text(gPlayers[1].name);
    $('#num1').text(gPlayers[1].num);
    $('#name2').text(gPlayers[2].name);
    $('#num2').text(gPlayers[2].num);
    $('#name3').text(gPlayers[3].name);
    $('#num3').text(gPlayers[3].num);
    $('#name4').text(gPlayers[4].name);
    $('#num4').text(gPlayers[4].num);
    $('#name5').text(gPlayers[5].name);
    $('#num5').text(gPlayers[5].num);
    $('#name6').text(gPlayers[6].name);
    $('#num6').text(gPlayers[6].num);
    $('#name7').text(gPlayers[7].name);
    $('#num7').text(gPlayers[7].num);
    $('#name8').text(gPlayers[8].name);
    $('#num8').text(gPlayers[8].num);
    $('#name9').text(gPlayers[9].name);
    $('#num9').text(gPlayers[9].num);
    $('#name10').text(gPlayers[10].name);
    $('#num10').text(gPlayers[10].num);
    $('#name11').text(gPlayers[11].name);
    $('#num11').text(gPlayers[11].num);
    $('#name12').text(gPlayers[12].name);
    $('#num12').text(gPlayers[12].num);
    $('#name13').text(gPlayers[13].name);
    $('#num13').text(gPlayers[13].num);
    $('#name14').text(gPlayers[14].name);
    $('#num14').text(gPlayers[14].num);
    $('#name15').text(gPlayers[15].name);
    $('#num15').text(gPlayers[15].num);
    $('#name16').text(gPlayers[16].name);
    $('#num16').text(gPlayers[16].num);
    $('#name17').text(gPlayers[17].name);
    $('#num17').text(gPlayers[17].num);
}

function displayFormation(formation) {
    $(".ball").css('opacity', '0');
    if (formation.value === "5-2-3") {
        $("#16.ball").css('opacity', '1');
        $("#17.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#19.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#10.ball").css('opacity', '1');
        $("#12.ball").css('opacity', '1');
        $("#4.ball").css('opacity', '1');
        $("#2.ball").css('opacity', '1');
        $("#6.ball").css('opacity', '1');
        $("#21.ball").css('opacity', '1');
        $('#16').html(gPlayers[0].num);
        $('#17').html(gPlayers[1].num);
        $('#18').html(gPlayers[2].num);
        $('#19').html(gPlayers[3].num);
        $('#20').html(gPlayers[4].num);
        $('#10').html(gPlayers[5].num);
        $('#12').html(gPlayers[6].num);
        $('#4').html(gPlayers[7].num);
        $('#2').html(gPlayers[8].num);
        $('#6').html(gPlayers[9].num);
        $('#21').html(gPlayers[10].num);
    } else if (formation.value === "4-5-1") {
        $("#16.ball").css('opacity', '1');
        $("#17.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#13.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#15.ball").css('opacity', '1');
        $("#11.ball").css('opacity', '1');
        $("#7.ball").css('opacity', '1');
        $("#9.ball").css('opacity', '1');
        $("#5.ball").css('opacity', '1');
        $("#21.ball").css('opacity', '1');
        $('#17').html(gPlayers[1].num);
        $('#16').html(gPlayers[2].num);
        $('#18').html(gPlayers[3].num);
        $('#13').html(gPlayers[4].num);
        $('#20').html(gPlayers[5].num);
        $('#15').html(gPlayers[6].num);
        $('#11').html(gPlayers[7].num);
        $('#7').html(gPlayers[8].num);
        $('#9').html(gPlayers[9].num);
        $('#5').html(gPlayers[10].num);
        $('#21').html(gPlayers[0].num);
    } else if (formation.value === "3-4-3") {
        $("#21.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#19.ball").css('opacity', '1');
        $("#99.ball").css('opacity', '1');
        $("#98.ball").css('opacity', '1');
        $("#11.ball").css('opacity', '1');
        $("#8.ball").css('opacity', '1');
        $("#4.ball").css('opacity', '1');
        $("#6.ball").css('opacity', '1');
        $("#2.ball").css('opacity', '1');
        $('#21').html(gPlayers[1].num);
        $('#20').html(gPlayers[2].num);
        $('#18').html(gPlayers[3].num);
        $('#19').html(gPlayers[4].num);
        $('#99').html(gPlayers[5].num);
        $('#98').html(gPlayers[6].num);
        $('#11').html(gPlayers[7].num);
        $('#8').html(gPlayers[8].num);
        $('#4').html(gPlayers[9].num);
        $('#6').html(gPlayers[10].num);
        $('#2').html(gPlayers[0].num);
    } else if (formation.value === "4-3-3") {
        $("#16.ball").css('opacity', '1');
        $("#17.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#13.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#15.ball").css('opacity', '1');
        $("#8.ball").css('opacity', '1');
        $("#4.ball").css('opacity', '1');
        $("#6.ball").css('opacity', '1');
        $("#2.ball").css('opacity', '1');
        $("#21.ball").css('opacity', '1');
        $('#16').html(gPlayers[1].num);
        $('#17').html(gPlayers[2].num);
        $('#18').html(gPlayers[3].num);
        $('#13').html(gPlayers[4].num);
        $('#20').html(gPlayers[5].num);
        $('#15').html(gPlayers[6].num);
        $('#2').html(gPlayers[7].num);
        $('#8').html(gPlayers[8].num);
        $('#4').html(gPlayers[9].num);
        $('#6').html(gPlayers[10].num);
        $('#21').html(gPlayers[0].num);
    } else if (formation.value === "4-4-1-1") {
        $("#21.ball").css('opacity', '1');
        $("#16.ball").css('opacity', '1');
        $("#17.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#13.ball").css('opacity', '1');
        $("#15.ball").css('opacity', '1');
        $("#7.ball").css('opacity', '1');
        $("#9.ball").css('opacity', '1');
        $("#5.ball").css('opacity', '1');
        $("#2.ball").css('opacity', '1');
        $('#21').html(gPlayers[1].num);
        $('#16').html(gPlayers[2].num);
        $('#17').html(gPlayers[3].num);
        $('#20').html(gPlayers[4].num);
        $('#18').html(gPlayers[5].num);
        $('#13').html(gPlayers[6].num);
        $('#15').html(gPlayers[7].num);
        $('#7').html(gPlayers[8].num);
        $('#9').html(gPlayers[9].num);
        $('#5').html(gPlayers[10].num);
        $('#2').html(gPlayers[0].num);
    } else if (formation.value === "4-4-2-w") {
        $("#21.ball").css('opacity', '1');
        $("#16.ball").css('opacity', '1');
        $("#17.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#1.ball").css('opacity', '1');
        $("#3.ball").css('opacity', '1');
        $("#10.ball").css('opacity', '1');
        $("#12.ball").css('opacity', '1');
        $("#4.ball").css('opacity', '1');
        $("#6.ball").css('opacity', '1');
        $('#21').html(gPlayers[1].num);
        $('#16').html(gPlayers[2].num);
        $('#17').html(gPlayers[3].num);
        $('#18').html(gPlayers[4].num);
        $('#20').html(gPlayers[5].num);
        $('#1').html(gPlayers[6].num);
        $('#3').html(gPlayers[7].num);
        $('#10').html(gPlayers[8].num);
        $('#12').html(gPlayers[9].num);
        $('#6').html(gPlayers[10].num);
        $('#4').html(gPlayers[0].num);
    } else if (formation.value === "4-4-2-d") {
        $("#21.ball").css('opacity', '1');
        $("#16.ball").css('opacity', '1');
        $("#17.ball").css('opacity', '1');
        $("#18.ball").css('opacity', '1');
        $("#20.ball").css('opacity', '1');
        $("#10.ball").css('opacity', '1');
        $("#14.ball").css('opacity', '1');
        $("#12.ball").css('opacity', '1');
        $("#8.ball").css('opacity', '1');
        $("#1.ball").css('opacity', '1');
        $("#3.ball").css('opacity', '1');
        $('#21').html(gPlayers[1].num);
        $('#20').html(gPlayers[2].num);
        $('#16').html(gPlayers[3].num);
        $('#17').html(gPlayers[4].num);
        $('#18').html(gPlayers[5].num);
        $('#10').html(gPlayers[6].num);
        $('#14').html(gPlayers[7].num);
        $('#12').html(gPlayers[8].num);
        $('#8').html(gPlayers[9].num);
        $('#1').html(gPlayers[10].num);
        $('#3').html(gPlayers[0].num);
    } else {
        return;
    }
}

// save to local storage
function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}

// load from local storage
function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
}

