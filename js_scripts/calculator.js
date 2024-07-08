// 公式笔记: 小红书@恋与深空Evol攻略组
// 末夜套 =  attack/2.29 + 1.73 * defense
// 永恒套 =  attack/3.12 + 1.27 * defense
// 神殿套 =  attack +  life/11

function number_to_format_string(number) {
    // // Conver number to string with comma separated thousands
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Round and convert number to string with comma separated thousands
    return Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function 猎人重剑(attack){
    var 普攻base = (112 + 1.5 * attack
    + 112 + 1.5 * attack
    + 124 + 1.65 * attack
    + 135 + 1.8 * attack)/4; // averaged over four attacks
    var 普攻重击base = 337 + 4.49 * attack;
    var 主动技伤害base = 410 + 5.47 * attack;

    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 猎人单手剑(attack){
    var 普攻base = 60 + attack * 0.8
    + 60 + attack * 0.8;
    + 72 + attack * 0.96;
    96 + attack * 1.29;
    var 普攻重击base = 118 + attack * 1.57; // 十层猎意 250+attack*3.33
    var 主动技伤害base = 341 + attack * 4.55;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 猎人法杖(attack){
    var 普攻base = 72 + attack * 0.96
    + 79 + attack * 1.06
    + 85 + attack * 1.15
    + 94 + attack * 1.25;
    var 普攻重击base = 122 + attack * 1.62;
    var 主动技伤害base = 6 + attack * 0.08;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 猎人手枪(attack){
    var 普攻base = 44 + attack * 0.59
    + 40 + attack * 0.53
    + 53 + attack * 0.71
    + 57 + attack * 0.77
    + 62 + attack * 0.82;
    var 普攻重击base = 120 + attack * 1.6;
    var 主动技伤害base = 160 + attack * 2.13;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 唤海映潮(attack){
    var 普攻base = 398 + attack * 2.11;
    var 普攻重击base = 182 + attack * 0.97;
    var 主动技伤害base = 73 + attack * 0.39;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 神灵雨(attack){
    var 普攻base = 75 + attack * 1
    + 75 + attack * 1.0
    + 90 + attack * 1.21
    + 121 + attack * 1.61;
    var 普攻重击base = 141 + attack * 1.88;
    var 主动技伤害base = 404 + attack * 5.39;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 溯光之刃(attack){
    var 普攻base = 60 + attack * 0.8
    + 60 + attack * 0.8;
    + 72 + attack * 0.96;
    96 + attack * 1.29;
    var 普攻重击base = 118 + attack * 1.57; // 十层猎意 250+attack*3.33
    var 主动技伤害base = 341 + attack * 4.55;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 永恒圣音(attack){
    var 普攻base = 188 + attack * 1.54;
    var 普攻重击base = 167 + attack * 0.89;
    var 主动技伤害base = 52 + attack * 0.28;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 潜影破沙(attack){
    var 普攻base = 53 + attack * 0.71
    + 48 + attack * 0.64
    + 64 + attack * 0.85
    + 69 + attack * 0.92
    + 74 + attack * 0.99;
    var 普攻重击base = 144 + attack * 1.92;
    var 主动技伤害base = 309 + attack * 4.12;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 逐月者(attack){
    var 普攻base = 55+ 0.29*attack
    + 50 + 0.26*attack
    + 66 + 0.35*attack
    + 72 + 0.38*attack
    + 77 + 0.41*attack;
    var 普攻重击base = 150 + 0.8*attack;
    var 主动技伤害base = 405 + 2.15*attack;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

// Create a mapping object
const weaponFunctions = {
    "猎人重剑": 猎人重剑,
    "猎人单手剑": 猎人单手剑,
    "猎人法杖": 猎人法杖,
    "猎人手枪": 猎人手枪,
    "唤海映潮": 唤海映潮,
    "神灵雨": 神灵雨,
    "溯光之刃": 溯光之刃,
    "永恒圣音": 永恒圣音,
    "潜影破沙": 潜影破沙,
    "逐月者": 逐月者
};

const partnerFunctions = {
    "末夜套": 末夜套,
    "永恒套": 永恒套,
    "神殿套": 神殿套,
    "深海套": 深海套,
    "逐光套": 逐光套,
    "拥雪套": 拥雪套
};


function 末夜套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {

    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var defense = container.querySelector('#def_life_stat' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;

    // console.log("attack: ", attack, "defense: ", defense, "weapon: ", weapon, "weakness: ", weakness, "criticalRate: ", criticalRate, "criticalDamage: ", criticalDamage, "total_damange: ", total_damange, "match_count: ", match_count, "contest_multiplier: ", contest_multiplier);
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    total_damange = total_damange/damage_multiplier;

    if (!attack && defense && total_damange) {
        // Calculate attack
        attack = (parseFloat(total_damange) - parseFloat(defense)*1.73)*2.29;
        attack = Math.round(attack);
        container.querySelector('#attack' + team_id).value = attack;
    } else if (attack && !defense && total_damange) {
        // Calculate defense
        defense = (parseFloat(total_damange) - parseFloat(attack)/2.29)/1.73;
        defense = Math.round(defense);
        container.querySelector('#def_life_stat' + team_id).value = defense;
    } else if (attack && defense ) {
        // Calculate total_damange
        total_damange = (parseFloat(attack)/2.29 + parseFloat(defense)*1.73)*damage_multiplier;
        total_damange = Math.round(total_damange);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
        return;
    }

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：游戏里的数据
    if (weapon === "专武"){
        weapon = "逐月者"
    }
    if (weapon in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[weapon](attack);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + weapon);
    }

    var 普攻 = (普攻base 
        + 1.17*defense 
        + 1.05*defense 
        + 1.4*defense 
        + 1.52*defense 
        + 1.63*defense)*damage_multiplier;
    var 普攻重击= (普攻重击base +  defense * 3.17)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base +  defense * 8.52)*damage_multiplier;
    var 共鸣技伤害 = (631+ attack * 3.36 +  defense * 13.33
    + 686 + attack * 3.66 +  defense * 14.5)*damage_multiplier;
    var 誓约技伤害 = (1440 + attack * 7.8 +  defense * 30.6)*damage_multiplier;
    var 协助技伤害 = 0;
    
    // Calculate critical expected damange, both criticalRate and criticalDamage are in percentage
    普攻_crit_exp = 普攻 + (parseFloat(criticalRate)/100) * (普攻 * parseFloat(criticalDamage)/100);
    普攻重击_crit_exp = 普攻重击 + (parseFloat(criticalRate)/100) * (普攻重击 * parseFloat(criticalDamage)/100);
    主动技伤害_crit_exp = 主动技伤害 + (parseFloat(criticalRate)/100) * (主动技伤害 * parseFloat(criticalDamage)/100);
    共鸣技伤害_crit_exp = 共鸣技伤害 + (parseFloat(criticalRate)/100) * (共鸣技伤害 * parseFloat(criticalDamage)/100);
    誓约技伤害_crit_exp = 誓约技伤害 + (parseFloat(criticalRate)/100) * (誓约技伤害 * parseFloat(criticalDamage)/100);
    // 协助技伤害_crit_exp = 协助技伤害 + (parseFloat(criticalRate)/100) * (协助技伤害 * parseFloat(criticalDamage)/100);

    // Calculate weakness expected damange
    普攻_weak_exp = 普攻 * (1 + parseFloat(weakness)/100);
    普攻重击_weak_exp = 普攻重击 * (1 + parseFloat(weakness)/100);
    // 主动技伤害_weak_exp = 主动技伤害 * (1 + parseFloat(weakness)/100); // 主动技伤害不受虚弱影响
    共鸣技伤害_weak_exp = 共鸣技伤害 * (1 + parseFloat(weakness)/100);
    誓约技伤害_weak_exp = 誓约技伤害 * (1 + parseFloat(weakness)/100);
    // 协助技伤害_weak_exp = 协助技伤害 * (1 + parseFloat(weakness)/100);

    普攻_str = "普攻： " + number_to_format_string(普攻) 
        + " (暴击期待值: " + number_to_format_string(普攻_crit_exp) 
        + ", 虚伤值: " + number_to_format_string(普攻_weak_exp) + ")" + "\n";
    普攻重击_str = "普攻重击： " + number_to_format_string(普攻重击)
        + " (暴击期待值: " + number_to_format_string(普攻重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(普攻重击_weak_exp) + ")" + "\n";
    主动技伤害_str = "主动技伤害： " + number_to_format_string(主动技伤害)
        + " (暴击期待值: " + number_to_format_string(主动技伤害_crit_exp) + ")" + "\n";
    共鸣技伤害_str = "共鸣技伤害： " + number_to_format_string(共鸣技伤害)
        + " (暴击期待值: " + number_to_format_string(共鸣技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(共鸣技伤害_weak_exp) + ")" + "\n";
    誓约技伤害_str = "誓约技伤害： " + number_to_format_string(誓约技伤害)
        + " (暴击期待值: " + number_to_format_string(誓约技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(誓约技伤害_weak_exp) + ")" + "\n";
    协助技伤害_str = "协助技伤害： " + "（对不起不会算）" + "\n";

    all_attack_info = rank + "阶:\n"
                    + 普攻_str + 普攻重击_str + 主动技伤害_str
                    + 共鸣技伤害_str + 誓约技伤害_str + 协助技伤害_str;
    
    console.log("all_attack_info: ", all_attack_info, "\n")
    // Replate NaN with 0
    all_attack_info = all_attack_info.replace(/NaN/g, 0);
    container.querySelector('#info' + team_id).innerText = all_attack_info;
}

function 永恒套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {

    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var defense = container.querySelector('#def_life_stat' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;

    // weapon = document.getElementById(weapon_id).value;
    // attack = document.getElementById(num1_id).value;
    // defense = document.getElementById(num2_id).value;
    // total_damange = document.getElementById(result_id).value;
    // match_count = document.getElementById(match_id).value;
    // contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    total_damange = total_damange/damage_multiplier;

    if (!attack && defense && total_damange) {
        // Calculate attack
        attack = (parseFloat(total_damange) - parseFloat(defense)*1.27)*3.12;
        attack = Math.round(attack);
        container.querySelector('#attack' + team_id).value = attack;
    } else if (attack && !defense && total_damange) {
        // Calculate defense
        defense = (parseFloat(total_damange) - parseFloat(attack)/3.12)/1.27;
        defense = Math.round(defense);
        container.querySelector('#def_life_stat' + team_id).value = defense;
    } else if (attack && defense) {
        // Calculate total_damange
        total_damange = (parseFloat(attack)/3.12 + parseFloat(defense)*1.27)*damage_multiplier;
        total_damange = Math.round(total_damange);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
        return;
    }

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：游戏里的数据
    if (weapon === "专武"){
        weapon = "永恒圣音"
    }
    if (weapon in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[weapon](attack);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + weapon);
    }

    var 普攻 = (普攻base +  defense * 6.09)*damage_multiplier;
    var 普攻重击= (普攻重击base +  defense * 6.09)*damage_multiplier;
    var 强化重击 = (主动技伤害base +  defense * 4.06)*damage_multiplier;
    var 主动技伤害 = (52 + attack * 0.28 +  defense * 1.11)*damage_multiplier;
    var 共鸣技伤害 = (790 + attack * 4.21 +  defense * 16.7)*damage_multiplier;
    var 誓约技伤害 = (1440 + attack * 7.8 +  defense * 30.6)*damage_multiplier;
    var 协助技伤害 = (defense * 2.4)*damage_multiplier;

    // Calculate critical expected damange, both criticalRate and criticalDamage are in percentage
    普攻_crit_exp = 普攻 + (parseFloat(criticalRate)/100) * (普攻 * parseFloat(criticalDamage)/100);
    普攻重击_crit_exp = 普攻重击 + (parseFloat(criticalRate)/100) * (普攻重击 * parseFloat(criticalDamage)/100);
    强化重击_crit_exp = 强化重击 + (parseFloat(criticalRate)/100) * (强化重击 * parseFloat(criticalDamage)/100);
    主动技伤害_crit_exp = 主动技伤害 + (parseFloat(criticalRate)/100) * (主动技伤害 * parseFloat(criticalDamage)/100);
    共鸣技伤害_crit_exp = 共鸣技伤害 + (parseFloat(criticalRate)/100) * (共鸣技伤害 * parseFloat(criticalDamage)/100);
    誓约技伤害_crit_exp = 誓约技伤害 + (parseFloat(criticalRate)/100) * (誓约技伤害 * parseFloat(criticalDamage)/100);
    协助技伤害_crit_exp = 协助技伤害 + (parseFloat(criticalRate)/100) * (协助技伤害 * parseFloat(criticalDamage)/100);

    // Calculate weakness expected damange
    普攻_weak_exp = 普攻 * (1 + parseFloat(weakness)/100);
    普攻重击_weak_exp = 普攻重击 * (1 + parseFloat(weakness)/100);
    强化重击_weak_exp = 强化重击 * (1 + parseFloat(weakness)/100);
    // 主动技伤害_weak_exp = 主动技伤害 * (1 + parseFloat(weakness)/100); // 主动技伤害不受虚弱影响
    共鸣技伤害_weak_exp = 共鸣技伤害 * (1 + parseFloat(weakness)/100);
    誓约技伤害_weak_exp = 誓约技伤害 * (1 + parseFloat(weakness)/100);
    协助技伤害_weak_exp = 协助技伤害 * (1 + parseFloat(weakness)/100);

    普攻_str = "普攻： " + number_to_format_string(普攻) 
    + " (暴击期待值: " + number_to_format_string(普攻_crit_exp) 
    + ", 虚伤值: " + number_to_format_string(普攻_weak_exp) + ")" + "\n";
    普攻重击_str = "普攻重击： " + number_to_format_string(普攻重击)
        + " (暴击期待值: " + number_to_format_string(普攻重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(普攻重击_weak_exp) + ")" + "\n";
    强化重击_str = "强化重击： " + number_to_format_string(强化重击)
        + " (暴击期待值: " + number_to_format_string(强化重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(强化重击_weak_exp) + ")" + "\n";
    主动技伤害_str = "主动技伤害： " + number_to_format_string(主动技伤害)
        + " (暴击期待值: " + number_to_format_string(主动技伤害_crit_exp) + ")" + "\n";
    共鸣技伤害_str = "共鸣技伤害： " + number_to_format_string(共鸣技伤害)
        + " (暴击期待值: " + number_to_format_string(共鸣技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(共鸣技伤害_weak_exp) + ")" + "\n";
    誓约技伤害_str = "誓约技伤害： " + number_to_format_string(誓约技伤害)
        + " (暴击期待值: " + number_to_format_string(誓约技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(誓约技伤害_weak_exp) + ")" + "\n";
    协助技伤害_str = "协助技伤害： " + number_to_format_string(协助技伤害)
        + " (暴击期待值: " + number_to_format_string(协助技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(协助技伤害_weak_exp) + ")" + "\n";

    all_attack_info = rank + "阶:\n"
                    + 普攻_str + 普攻重击_str + 强化重击_str + 主动技伤害_str
                    + 共鸣技伤害_str + 誓约技伤害_str + 协助技伤害_str;

    if (rank === 1) {
        all_attack_info += "咒文状态协助技伤害： " + 协助技伤害*1.12 + "\n";
    }

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    all_attack_info = all_attack_info.replace(/NaN/g, 0);
    container.querySelector('#info' + team_id).innerText = all_attack_info;
}

function 神殿套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {

    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var life = container.querySelector('#def_life_stat' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    total_damange = total_damange/damage_multiplier;

    if (!attack && life && total_damange) {
        // Calculate attack
        attack = parseFloat(total_damange) - parseFloat(life)/11;
        attack = Math.round(attack);
        container.querySelector('#attack' + team_id).value = attack;
    } else if (attack && !life && total_damange) {
        // Calculate life
        life = (parseFloat(total_damange) - parseFloat(attack))*11;
        life = Math.round(life);
        container.querySelector('#def_life_stat' + team_id).value = life;
    } else if (attack && life ) {
        // Calculate total_damange
        total_damange = (parseFloat(attack) + parseFloat(life)/11) * damage_multiplier;
        total_damange = Math.round(total_damange);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
        return;
    }

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：小红书@小红薯5D1FE509
    if (weapon === "专武"){
        weapon = "唤海映潮"
    }
    if (weapon in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[weapon](attack);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + weapon);
    }

    var 普攻 = (普攻base +  life * 0.19)*damage_multiplier; // （四段总计）
    var 普攻重击= (普攻重击base * 0.97 +  life * 0.09)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base * 0.39 +  life * 0.035)*damage_multiplier;
    var 共鸣技伤害 = (995 + attack * 5.31 +  life * 0.478)*damage_multiplier;
    var 誓约技伤害 = (1440 + attack * 7.8 +  life * 0.694)*damage_multiplier;
    var 协助技伤害 = (47 + attack * 0.25 +  life * 0.022)*damage_multiplier;

    // Calculate critical expected damange, both criticalRate and criticalDamage are in percentage
    普攻_crit_exp = 普攻 + (parseFloat(criticalRate)/100) * (普攻 * parseFloat(criticalDamage)/100);
    普攻重击_crit_exp = 普攻重击 + (parseFloat(criticalRate)/100) * (普攻重击 * parseFloat(criticalDamage)/100);
    主动技伤害_crit_exp = 主动技伤害 + (parseFloat(criticalRate)/100) * (主动技伤害 * parseFloat(criticalDamage)/100);
    共鸣技伤害_crit_exp = 共鸣技伤害 + (parseFloat(criticalRate)/100) * (共鸣技伤害 * parseFloat(criticalDamage)/100);
    誓约技伤害_crit_exp = 誓约技伤害 + (parseFloat(criticalRate)/100) * (誓约技伤害 * parseFloat(criticalDamage)/100);
    协助技伤害_crit_exp = 协助技伤害 + (parseFloat(criticalRate)/100) * (协助技伤害 * parseFloat(criticalDamage)/100);

    // Calculate weakness expected damange
    普攻_weak_exp = 普攻 * (1 + parseFloat(weakness)/100);
    普攻重击_weak_exp = 普攻重击 * (1 + parseFloat(weakness)/100);
    // 主动技伤害_weak_exp = 主动技伤害 * (1 + parseFloat(weakness)/100); // 主动技伤害不受虚弱影响
    共鸣技伤害_weak_exp = 共鸣技伤害 * (1 + parseFloat(weakness)/100);
    誓约技伤害_weak_exp = 誓约技伤害 * (1 + parseFloat(weakness)/100);
    协助技伤害_weak_exp = 协助技伤害 * (1 + parseFloat(weakness)/100);

    普攻_str = "普攻： " + number_to_format_string(普攻) 
    + " (暴击期待值: " + number_to_format_string(普攻_crit_exp) 
    + ", 虚伤值: " + number_to_format_string(普攻_weak_exp) + ")" + "\n";
    普攻重击_str = "普攻重击： " + number_to_format_string(普攻重击)
        + " (暴击期待值: " + number_to_format_string(普攻重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(普攻重击_weak_exp) + ")" + "\n";
    主动技伤害_str = "主动技伤害： " + number_to_format_string(主动技伤害)
        + " (暴击期待值: " + number_to_format_string(主动技伤害_crit_exp) + ")" + "\n";
    共鸣技伤害_str = "共鸣技伤害： " + number_to_format_string(共鸣技伤害)
        + " (暴击期待值: " + number_to_format_string(共鸣技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(共鸣技伤害_weak_exp) + ")" + "\n";
    誓约技伤害_str = "誓约技伤害： " + number_to_format_string(誓约技伤害)
        + " (暴击期待值: " + number_to_format_string(誓约技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(誓约技伤害_weak_exp) + ")" + "\n";
    协助技伤害_str = "协助技伤害 (一级)： " + number_to_format_string(协助技伤害)
        + " (暴击期待值: " + number_to_format_string(协助技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(协助技伤害_weak_exp) + ")" + "\n";
    
    all_attack_info = rank + "阶:\n"
            + 普攻_str + 普攻重击_str + 主动技伤害_str
            + 共鸣技伤害_str + 誓约技伤害_str + 协助技伤害_str;

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    all_attack_info = all_attack_info.replace(/NaN/g, 0);
    container.querySelector('#info' + team_id).innerText = all_attack_info;
}


function 深海套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {

    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    // Clear def_life_stat values
    container.querySelector('#def_life_stat' + team_id).value = 0;

    // Check if the user has entered a value for attack or total_damange
    if (!attack && !total_damange) {
        alert("请输入攻击值或总伤害值.");
        return
    }
    if (!attack) {
        // Calculate attack
        attack = parseFloat(total_damange);
        container.querySelector('#attack' + team_id).value = Math.round(attack/damage_multiplier);
    } else if (!total_damange) {
        // Calculate total_damange
        total_damange = Math.round(attack*damage_multiplier);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    } else if (attack && total_damange) {
        // Calculate total_damange
        total_damange = Math.round(attack*damage_multiplier);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    }

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    } 
    // 数据参考：游戏里的数据
    if (weapon === "专武"){
        weapon = "潜影破沙"
    }
    if (weapon in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[weapon](attack);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + weapon);
    }

    var 普攻 = (普攻base)*damage_multiplier;

    var 普攻重击 = (普攻重击base)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base)*damage_multiplier;
    var 共鸣技伤害 = (785 + attack * 10.47)*damage_multiplier;
    var 誓约技伤害 = (1440 + attack * 19.2)*damage_multiplier;
    var 协助技伤害 = (306 + attack * 4.08)*damage_multiplier;

    // Calculate critical expected damange, both criticalRate and criticalDamage are in percentage
    普攻_crit_exp = 普攻 + (parseFloat(criticalRate)/100) * (普攻 * parseFloat(criticalDamage)/100);
    普攻重击_crit_exp = 普攻重击 + (parseFloat(criticalRate)/100) * (普攻重击 * parseFloat(criticalDamage)/100);
    主动技伤害_crit_exp = 主动技伤害 + (parseFloat(criticalRate)/100) * (主动技伤害 * parseFloat(criticalDamage)/100);
    共鸣技伤害_crit_exp = 共鸣技伤害 + (parseFloat(criticalRate)/100) * (共鸣技伤害 * parseFloat(criticalDamage)/100);
    誓约技伤害_crit_exp = 誓约技伤害 + (parseFloat(criticalRate)/100) * (誓约技伤害 * parseFloat(criticalDamage)/100);
    协助技伤害_crit_exp = 协助技伤害 + (parseFloat(criticalRate)/100) * (协助技伤害 * parseFloat(criticalDamage)/100);

    // Calculate weakness expected damange
    普攻_weak_exp = 普攻 * (1 + parseFloat(weakness)/100);
    普攻重击_weak_exp = 普攻重击 * (1 + parseFloat(weakness)/100);
    // 主动技伤害_weak_exp = 主动技伤害 * (1 + parseFloat(weakness)/100); // 主动技伤害不受虚弱影响
    共鸣技伤害_weak_exp = 共鸣技伤害 * (1 + parseFloat(weakness)/100);
    誓约技伤害_weak_exp = 誓约技伤害 * (1 + parseFloat(weakness)/100);
    协助技伤害_weak_exp = 协助技伤害 * (1 + parseFloat(weakness)/100);

    普攻_str = "普攻： " + number_to_format_string(普攻) 
    + " (暴击期待值: " + number_to_format_string(普攻_crit_exp) 
    + ", 虚伤值: " + number_to_format_string(普攻_weak_exp) + ")" + "\n";
    普攻重击_str = "普攻重击： " + number_to_format_string(普攻重击)
        + " (暴击期待值: " + number_to_format_string(普攻重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(普攻重击_weak_exp) + ")" + "\n";
    主动技伤害_str = "主动技伤害： " + number_to_format_string(主动技伤害)
        + " (暴击期待值: " + number_to_format_string(主动技伤害_crit_exp) + ")" + "\n";
    共鸣技伤害_str = "共鸣技伤害： " + number_to_format_string(共鸣技伤害)
        + " (暴击期待值: " + number_to_format_string(共鸣技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(共鸣技伤害_weak_exp) + ")" + "\n";
    誓约技伤害_str = "誓约技伤害： " + number_to_format_string(誓约技伤害)
        + " (暴击期待值: " + number_to_format_string(誓约技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(誓约技伤害_weak_exp) + ")" + "\n";
    协助技伤害_str = "协助技伤害： " + number_to_format_string(协助技伤害)
        + " (暴击期待值: " + number_to_format_string(协助技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(协助技伤害_weak_exp) + ")" + "\n";

    all_attack_info = rank + "阶:\n"
                    + 普攻_str + 普攻重击_str + 主动技伤害_str
                    + 共鸣技伤害_str + 誓约技伤害_str + 协助技伤害_str;

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    all_attack_info = all_attack_info.replace(/NaN/g, 0);
    container.querySelector('#info' + team_id).innerText = all_attack_info;
}

function 逐光套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    // Clear def_life_stat values
    container.querySelector('#def_life_stat' + team_id).value = 0;

    // Check if the user has entered a value for attack or total_damange
    if (!attack && !total_damange) {
        alert("请输入攻击值或总伤害值.");
        return
    }
    if (!attack) {
        // Calculate attack
        attack = parseFloat(total_damange);
        container.querySelector('#attack' + team_id).value = Math.round(attack/damage_multiplier);
    } else if (!total_damange) {
        // Calculate total_damange
        total_damange = Math.round(attack*damage_multiplier);
        container.querySelector('#converted_damage' + team_id).value = total_damange
    } else if (attack && total_damange) {
        // Calculate total_damange
        total_damange = Math.round(attack*damage_multiplier);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    }

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    } 
    // 数据参考：游戏里的数据
    if (weapon === "专武"){
        weapon = "溯光之刃"
    }
    if (weapon in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[weapon](attack);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + weapon);
    }

    var 普攻 = (普攻base)*damage_multiplier;

    var 普攻重击 = (普攻重击base)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base)*damage_multiplier;
    var 共鸣技伤害 = (641 + attack * 8.54)*damage_multiplier;
    var 誓约技伤害 = (1440 + attack * 19.2)*damage_multiplier;
    var 协助技伤害 = (300 + attack * 4.0)*damage_multiplier; // 347 + attack * 4.62

    // Calculate critical expected damange, both criticalRate and criticalDamage are in percentage
    普攻_crit_exp = 普攻 + (parseFloat(criticalRate)/100) * (普攻 * parseFloat(criticalDamage)/100);
    普攻重击_crit_exp = 普攻重击 + (parseFloat(criticalRate)/100) * (普攻重击 * parseFloat(criticalDamage)/100);
    主动技伤害_crit_exp = 主动技伤害 + (parseFloat(criticalRate)/100) * (主动技伤害 * parseFloat(criticalDamage)/100);
    共鸣技伤害_crit_exp = 共鸣技伤害 + (parseFloat(criticalRate)/100) * (共鸣技伤害 * parseFloat(criticalDamage)/100);
    誓约技伤害_crit_exp = 誓约技伤害 + (parseFloat(criticalRate)/100) * (誓约技伤害 * parseFloat(criticalDamage)/100);
    协助技伤害_crit_exp = 协助技伤害 + (parseFloat(criticalRate)/100) * (协助技伤害 * parseFloat(criticalDamage)/100);

    // Calculate weakness expected damange
    普攻_weak_exp = 普攻 * (1 + parseFloat(weakness)/100);
    普攻重击_weak_exp = 普攻重击 * (1 + parseFloat(weakness)/100);
    // 主动技伤害_weak_exp = 主动技伤害 * (1 + parseFloat(weakness)/100); // 主动技伤害不受虚弱影响
    共鸣技伤害_weak_exp = 共鸣技伤害 * (1 + parseFloat(weakness)/100);
    誓约技伤害_weak_exp = 誓约技伤害 * (1 + parseFloat(weakness)/100);
    协助技伤害_weak_exp = 协助技伤害 * (1 + parseFloat(weakness)/100);

    普攻_str = "普攻： " + number_to_format_string(普攻) 
    + " (暴击期待值: " + number_to_format_string(普攻_crit_exp) 
    + ", 虚伤值: " + number_to_format_string(普攻_weak_exp) + ")" + "\n";
    普攻重击_str = "普攻重击： " + number_to_format_string(普攻重击)
        + " (暴击期待值: " + number_to_format_string(普攻重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(普攻重击_weak_exp) + ")" + "\n";
    主动技伤害_str = "主动技伤害： " + number_to_format_string(主动技伤害)
        + " (暴击期待值: " + number_to_format_string(主动技伤害_crit_exp) + ")" + "\n";
    共鸣技伤害_str = "共鸣技伤害： " + number_to_format_string(共鸣技伤害)
        + " (暴击期待值: " + number_to_format_string(共鸣技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(共鸣技伤害_weak_exp) + ")" + "\n";
    誓约技伤害_str = "誓约技伤害： " + number_to_format_string(誓约技伤害)
        + " (暴击期待值: " + number_to_format_string(誓约技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(誓约技伤害_weak_exp) + ")" + "\n";
    协助技伤害_str = "协助技伤害： " + number_to_format_string(协助技伤害)
        + " (暴击期待值: " + number_to_format_string(协助技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(协助技伤害_weak_exp) + ")" + "\n";

    all_attack_info = rank + "阶:\n"
                    + 普攻_str + 普攻重击_str + 主动技伤害_str
                    + 共鸣技伤害_str + 誓约技伤害_str + 协助技伤害_str;

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    all_attack_info = all_attack_info.replace(/NaN/g, 0);
    container.querySelector('#info' + team_id).innerText = all_attack_info;
}

function 拥雪套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    // Clear def_life_stat values
    container.querySelector('#def_life_stat' + team_id).value = 0;

    // Check if the user has entered a value for attack or total_damange
    if (!attack && !total_damange) {
        alert("请输入攻击值或总伤害值.");
        return
    }
    if (!attack) {
        // Calculate attack
        attack = parseFloat(total_damange);
        container.querySelector('#attack' + team_id).value = Math.round(attack/damage_multiplier);
    } else if (!total_damange) {
        // Calculate total_damange
        total_damange = Math.round(attack*damage_multiplier);
        container.querySelector('#converted_damage' + team_id).value = total_damange
    } else if (attack && total_damange) {
        // Calculate total_damange
        total_damange = Math.round(attack*damage_multiplier);
        container.querySelector('#converted_damage' + team_id).value = total_damange;
    }

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    } 
    // 数据参考：游戏里的数据
    if (weapon === "专武"){
        weapon = "神灵雨"
    }
    if (weapon in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[weapon](attack);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + weapon);
    }

    var 普攻 = (普攻base)*damage_multiplier;
    var 普攻重击 = (普攻重击base)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base)*damage_multiplier;
    var 共鸣技伤害 = (632 + attack * 8.42)*damage_multiplier;
    var 誓约技伤害 = (1440 + attack * 19.2)*damage_multiplier;
    var 协助技伤害 = (260 + attack * 3.48)*damage_multiplier; // 370 + attack * 4.92

    // Calculate critical expected damange, both criticalRate and criticalDamage are in percentage
    普攻_crit_exp = 普攻 + (parseFloat(criticalRate)/100) * (普攻 * parseFloat(criticalDamage)/100);
    普攻重击_crit_exp = 普攻重击 + (parseFloat(criticalRate)/100) * (普攻重击 * parseFloat(criticalDamage)/100);
    主动技伤害_crit_exp = 主动技伤害 + (parseFloat(criticalRate)/100) * (主动技伤害 * parseFloat(criticalDamage)/100);
    共鸣技伤害_crit_exp = 共鸣技伤害 + (parseFloat(criticalRate)/100) * (共鸣技伤害 * parseFloat(criticalDamage)/100);
    誓约技伤害_crit_exp = 誓约技伤害 + (parseFloat(criticalRate)/100) * (誓约技伤害 * parseFloat(criticalDamage)/100);
    协助技伤害_crit_exp = 协助技伤害 + (parseFloat(criticalRate)/100) * (协助技伤害 * parseFloat(criticalDamage)/100);

    // Calculate weakness expected damange
    普攻_weak_exp = 普攻 * (1 + parseFloat(weakness)/100);
    普攻重击_weak_exp = 普攻重击 * (1 + parseFloat(weakness)/100);
    // 主动技伤害_weak_exp = 主动技伤害 * (1 + parseFloat(weakness)/100); // 主动技伤害不受虚弱影响
    共鸣技伤害_weak_exp = 共鸣技伤害 * (1 + parseFloat(weakness)/100);
    誓约技伤害_weak_exp = 誓约技伤害 * (1 + parseFloat(weakness)/100);
    协助技伤害_weak_exp = 协助技伤害 * (1 + parseFloat(weakness)/100);




    普攻_str = "普攻： " + number_to_format_string(普攻) 
    + " (暴击期待值: " + number_to_format_string(普攻_crit_exp) 
    + ", 虚伤值: " + number_to_format_string(普攻_weak_exp) + ")" + "\n";
    普攻重击_str = "普攻重击： " + number_to_format_string(普攻重击)
        + " (暴击期待值: " + number_to_format_string(普攻重击_crit_exp)
        + ", 虚伤值: " + number_to_format_string(普攻重击_weak_exp) + ")" + "\n";
    主动技伤害_str = "主动技伤害： " + number_to_format_string(主动技伤害)
        + " (暴击期待值: " + number_to_format_string(主动技伤害_crit_exp) + ")" + "\n";
    共鸣技伤害_str = "共鸣技伤害： " + number_to_format_string(共鸣技伤害)
        + " (暴击期待值: " + number_to_format_string(共鸣技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(共鸣技伤害_weak_exp) + ")" + "\n";
    誓约技伤害_str = "誓约技伤害： " + number_to_format_string(誓约技伤害)
        + " (暴击期待值: " + number_to_format_string(誓约技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(誓约技伤害_weak_exp) + ")" + "\n";
    协助技伤害_str = "协助技伤害： " + number_to_format_string(协助技伤害)
        + " (暴击期待值: " + number_to_format_string(协助技伤害_crit_exp)
        + ", 虚伤值: " + number_to_format_string(协助技伤害_weak_exp) + ")" + "\n";

    all_attack_info = rank + "阶:\n"
                    + 普攻_str + 普攻重击_str + 主动技伤害_str
                    + 共鸣技伤害_str + 誓约技伤害_str + 协助技伤害_str;

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    all_attack_info = all_attack_info.replace(/NaN/g, 0);
    container.querySelector('#info' + team_id).innerText = all_attack_info;
}


function 四星卡套(team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    // TODO: Add the calculation for the four-star card set

    var container = document.querySelector('.team.team' + team_id);
    var attack = container.querySelector('#attack' + team_id).value;
    var def_life_stat = container.querySelector('#def_life_stat' + team_id).value;
    var weapon = container.querySelector('#weapon' + team_id).value;
    var weakness = container.querySelector('#weakness' + team_id).value;
    var criticalRate = container.querySelector('#critical_rate' + team_id).value;
    var criticalDamage = container.querySelector('#critical_damage' + team_id).value;
    var total_damange = container.querySelector('#converted_damage' + team_id).value;
    var match_count = container.querySelector('#match' + team_id).value;
    var contest_multiplier = container.querySelector('#contest_multiplier' + team_id).value;
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;

    // Check if the user has entered a value for attack
    if (!attack) {
        alert("请输入攻击值.");
        return
    }
    match_count = document.getElementById(match_id).value;
    contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    // Clear num2 values
    document.getElementById(num2_id).value = 0;
    document.getElementById(result_id).value = attack*damage_multiplier;

    // Update the all_attack_info string with calculated values
    var rank = container.querySelector('#rank' + team_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];


    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：游戏里的数据
    var 普攻 = (0)*damage_multiplier;
    var 普攻重击 = (0)*damage_multiplier;
    var 主动技伤害 = (0)*damage_multiplier;
    var 共鸣技伤害 = (0)*damage_multiplier;
    var 誓约技伤害 = (0)*damage_multiplier;
    var 协助技伤害 = (0)*damage_multiplier;

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + number_to_format_string(普攻) + "\n" // （五段总计）
                    + "普攻重击： " + number_to_format_string(普攻重击) + "\n"
                    + "共鸣技伤害： " + number_to_format_string(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + number_to_format_string(誓约技伤害) + "\n"
                    + "主动技伤害： " + number_to_format_string(主动技伤害) + "\n"
                    + "协助技伤害： " + number_to_format_string(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    container.querySelector('#info' + team_id).innerText = all_attack_info;

}

function calculate_team(team_id) {
    var container = document.querySelector('.team.team' + team_id);
    var partner = container.querySelector('.partner').value;
    var num1_id = 'num1';
    var num2_id = 'num2';
    var result_id = 'result';
    var rank_id = 'rank';
    var match_id = 'match';
    var contest_multiplier_id = 'contest_multiplier';
    var weapon_id = 'weapon';
    var info_id = 'info';

    if (partner in partnerFunctions) {
        partnerFunctions[partner](team_id, num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
        console.log(`partner: ${partner}`);
    } else {
        alert("套装数据未知：" + partner);
    }
}

function calculate_team1() {
    calculate_team('1');
}

function calculate_team2() {
    // console.log(partner);
    calculate_team('2');
}

function calculate_team3() {
    // console.log(partner);
    calculate_team('3');
}

function clear_team1() {
    var container = document.querySelector('.team.team1');
    container.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    // Save partner value    
    // container.querySelector('.partner').value = '';
    container.querySelector('.rank').value = '0';
    container.querySelector('#converted_damage1').value = '';
}

function clear_team2() {
    var container = document.querySelector('.team.team2');
    container.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    // Save partner value    
    // container.querySelector('.partner').value = '';
    container.querySelector('.rank').value = '0';
    container.querySelector('#converted_damage2').value = '';
}

function clear_team3() {
    var container = document.querySelector('.team.team3');
    container.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    // Save partner value    
    // container.querySelector('.partner').value = '';
    container.querySelector('.rank').value = '0';
    container.querySelector('#converted_damage3').value = '';
}