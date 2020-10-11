'use strict'

$('.select-formation').on('change', function () {
    displayFormation(this);
});

$('#update0').on('click', function () {
    var name = $('#name0').val();
    var num = $('#num0').val();
    createPlayer(name, num);
})

function onFormationInit() {
    gPlayers = loadFromStorage('players');
    renderPlayers();
}

function onSquadLoad() {
    gPlayers = loadFromStorage('players');
    renderPlayerCards();
}