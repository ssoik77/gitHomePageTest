function player(name, lv, hp, current_hp, pd, md, exp, current_exp, gold) {

    this.name = name;
    this.lv = lv;
    this.hp = hp;
    this.current_hp = current_hp;
    this.pd = pd;
    this.md = md;
    this.exp = exp;
    this.current_exp = current_exp;
    this.gold = gold;


    this.info = function () {
        dw("◤ Player‖ " + this.name);
        br();
        dw("LV :" + this.lv + " EXP (" + this.current_exp + "/" + this.exp + ")" + " 소지금 : " + this.gold + " G");
        br();
        dw("HP [" + this.current_hp + "/" + this.hp + "]" + "물리 공격력 : " + pd + " 마법공격력 : " + md+" ◢")
    }

}

function enemy(name, lv, hp, current_hp, pd, md, gold) {

    this.name = name;
    this.lv = lv;
    this.hp = hp;
    this.current_hp = current_hp;
    this.pd = pd;
    this.md = md;
    this.gold = gold;


    this.info = function () {
        dw("◤ Enemy‖ " + this.name)
        br();
        dw("LV :" + this.lv + " 소지금 : " + this.gold + " G");
        br();
        dw("HP [" + this.current_hp + "/" + this.hp + "]" + "물리 공격력 : " + pd + " 마법공격력 : " + md+" ◢");
    }

}