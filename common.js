var text = "";


function dw(a) {
    text = text + a;
    battle_text.value = text;
}

function br() {

    text = text + "\n";

    battle_text.value = text;
}


function hr() {

    text = text + "\n———————————————————————————————————————————————————————————————————————";
    battle_text.value = text;


}

function random(s, b) {
    var random = Math.foolr(Math.random() * (s - b) + 1);
    return random;

}