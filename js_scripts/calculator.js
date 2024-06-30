// 公式笔记
// 末夜套 =  攻击/2.29 + 1.73 * 防御
// 永恒套 =  攻击/3.12 + 1.27 * 防御
// 神殿套 =  攻击 +  生命/11

function calculate_team1() {
    var solarpair1 = document.getElementById('solarpair1').value;

    num1_id = 'num1'
    num2_id = 'num2'
    result_id = 'result1'
    rank_id = 'rank1'
    match_id = 'match1'
    contest_multiplier_id = 'contest_multiplier1'
    info_id = 'info1'

    if (solarpair1 === '末夜套') {
        末夜套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair1 === '永恒套') {
        永恒套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair1 === '神殿套') {
        神殿套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair1 === '深海套') {
        深海套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    }
}

function calculate_team2() {
    var solarpair2 = document.getElementById('solarpair2').value;

    num3_id = 'num3'
    num4_id = 'num4'
    result_id = 'result2'
    rank_id = 'rank2'
    match_id = 'match2'
    contest_multiplier_id = 'contest_multiplier2'
    info_id = 'info2'

    if (solarpair2 === '末夜套') {
        末夜套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair2 === '永恒套') {
        永恒套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair2 === '神殿套') {
        神殿套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair2 === '深海套') {
        深海套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    }
}

function calculate_team3() {
    var solarpair3 = document.getElementById('solarpair3').value;

    num5_id = 'num5'
    num6_id = 'num6'
    result_id = 'result3'
    rank_id = 'rank3'
    match_id = 'match3'
    contest_multiplier_id = 'contest_multiplier3'
    info_id = 'info3'

    if (solarpair3 === '末夜套') {
        末夜套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair3 === '永恒套') {
        永恒套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair3 === '神殿套') {
        神殿套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    } else if (solarpair3 === '深海套') {
        深海套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, info_id);
    }

}



function 末夜套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id) {
    

    攻击 = document.getElementById(num1_id).value;
    防御 = document.getElementById(num2_id).value;
    total_damange = document.getElementById(result_id).value;
    match_count = document.getElementById(match_id).value;
    contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    total_damange = total_damange/damage_multiplier;

    if (!攻击 && 防御 && total_damange) {
        // Calculate 攻击
        攻击 = (parseFloat(total_damange) - parseFloat(防御)*1.73)*2.29;
        攻击 = Math.round(攻击);
        document.getElementById(num1_id).value = 攻击;
    } else if (攻击 && !防御 && total_damange) {
        // Calculate 防御
        防御 = (parseFloat(total_damange) - parseFloat(攻击)/2.29)/1.73;
        防御 = Math.round(防御);
        document.getElementById(num2_id).value = 防御;
    } else if (攻击 && 防御 ) {
        // Calculate total_damange
        total_damange = (parseFloat(攻击)/2.29 + parseFloat(防御)*1.73)*damage_multiplier;
        total_damange = Math.round(total_damange);
        document.getElementById(result_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
        return;
    }

    // Update the all_attack_info string with calculated values
    var rank = document.getElementById(rank_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：游戏里的数据
    var 普攻 = 55+ 0.29*攻击 + 1.17*防御
    + 50 + 0.26*攻击 + 1.05*防御
    + 66 + 0.35*攻击 + 1.4*防御
    + 72 + 0.38*攻击 + 1.52*防御
    + 77 + 0.41*攻击 + 1.63*防御;

    var 普攻重击= (150 + 攻击 * 0.8 +  防御 * 3.17)*damage_multiplier;
    var 主动技伤害 = (405 + 攻击 * 2.15 +  防御 * 8.52)*damage_multiplier;
    var 共鸣技伤害 = (631+ 攻击 * 3.36 +  防御 * 13.33
    + 686 + 攻击 * 3.66 +  防御 * 14.5)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 7.8 +  防御 * 30.6)*damage_multiplier;
    var 协助技伤害 = 0;

    all_attack_info = rank + "阶:\n"
                    + "普攻：（五段总计） " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "协助技伤害 " + "（无数据）" + "\n";

    document.getElementById(info_id).innerText = all_attack_info;
}

function 永恒套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id) {
    

    攻击 = document.getElementById(num1_id).value;
    防御 = document.getElementById(num2_id).value;
    total_damange = document.getElementById(result_id).value;
    match_count = document.getElementById(match_id).value;
    contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    total_damange = total_damange/damage_multiplier;

    if (!攻击 && 防御 && total_damange) {
        // Calculate 攻击
        攻击 = (parseFloat(total_damange) - parseFloat(防御)*1.27)*3.12;
        攻击 = Math.round(攻击);
        document.getElementById(num1_id).value = 攻击;
    } else if (攻击 && !防御 && total_damange) {
        // Calculate 防御
        防御 = (parseFloat(total_damange) - parseFloat(攻击)/3.12)/1.27;
        防御 = Math.round(防御);
        document.getElementById(num2_id).value = 防御;
    } else if (攻击 && 防御) {
        // Calculate total_damange
        total_damange = (parseFloat(攻击)/3.12 + parseFloat(防御)*1.27)*damage_multiplier;
        total_damange = Math.round(total_damange);
        document.getElementById(result_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
        return;
    }

    // Update the all_attack_info string with calculated values
    var rank = document.getElementById(rank_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：小红书@Midnight，小红书@恋与深空Evol攻略组
    攻击 = 攻击*rank_addon[i];
    var 普攻 = (188 + 攻击 * 1.54 +  防御 * 6.09)*damage_multiplier; 
    var 普攻重击= (167 + 攻击 * 0.89 +  防御 * 6.09)*damage_multiplier;
    var 强化重击 = (192 + 攻击 * 1.02 +  防御 * 4.06)*damage_multiplier;
    var 共鸣技伤害 = (790 + 攻击 * 4.21 +  防御 * 16.7)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 7.8 +  防御 * 30.6)*damage_multiplier;
    var 协助技伤害 = (防御 * 2.4)*damage_multiplier;
    var 主动技伤害 = (0)*damage_multiplier;
    var 圣迹 = (52 + 攻击 * 0.28 +  防御 * 1.11)*damage_multiplier;
    

    all_attack_info = rank + "阶 ================\n"
                    + "普攻（四段总计）： " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "强化重击： " + Math.round(强化重击) + "\n"
                    + "主动技伤害 " + 主动技伤害 + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "协助技伤害 " + Math.round(协助技伤害) + "\n"
                    + "圣迹（一格能量）" + Math.round(圣迹) + "\n";
    if (rank === 1) {
        all_attack_info += "咒文状态协助技伤害： " + 协助技伤害*1.12 + "\n";
    }

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}

function 神殿套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id) {
    
    攻击 = document.getElementById(num1_id).value;
    生命 = document.getElementById(num2_id).value;
    total_damange = document.getElementById(result_id).value;
    match_count = document.getElementById(match_id).value;
    contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    total_damange = total_damange/damage_multiplier;

    if (!攻击 && 生命 && total_damange) {
        // Calculate 攻击
        攻击 = parseFloat(total_damange) - parseFloat(生命)/11;
        攻击 = Math.round(攻击);
        document.getElementById(num1_id).value = 攻击;
    } else if (攻击 && !生命 && total_damange) {
        // Calculate 生命
        生命 = (parseFloat(total_damange) - parseFloat(攻击))*11;
        生命 = Math.round(生命);
        document.getElementById(num2_id).value = 生命;
    } else if (攻击 && 生命 ) {
        // Calculate total_damange
        total_damange = (parseFloat(攻击) + parseFloat(生命)/11) * damage_multiplier;
        total_damange = Math.round(total_damange);
        document.getElementById(result_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
        return;
    }

    // Update the all_attack_info string with calculated values
    var rank = document.getElementById(rank_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    }

    // 数据参考：小红书@小红薯5D1FE509
    var 普攻 = (398 + 攻击 * 2.11 +  生命 * 0.19)*damage_multiplier; 
    var 普攻重击= (182 + 攻击 * 0.97 +  生命 * 0.09)*damage_multiplier;
    var 共鸣技伤害 = (995 + 攻击 * 5.31 +  生命 * 0.478)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 7.8 +  生命 * 0.694)*damage_multiplier;
    var 主动技伤害 = (73 + 攻击 * 0.39 +  生命 * 0.035)*damage_multiplier;
    var 协助技伤害 = (0)*damage_multiplier;

    all_attack_info = rank + "阶:\n"
                    + "普攻（四段总计）： " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害 " + "（无数据）" + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}


function 深海套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id) {
    
    攻击 = document.getElementById(num1_id).value;
    total_damange = document.getElementById(result_id).value;
    match_count = document.getElementById(match_id).value;
    contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    // Clear num2 values
    document.getElementById(num2_id).value = 0;

    // Check if the user has entered a value for 攻击 or total_damange
    if (!攻击 && !total_damange) {
        alert("请输入攻击值或总伤害值.");
        return
    }
    if (!攻击) {
        // Calculate 攻击
        攻击 = parseFloat(total_damange);
        document.getElementById(num1_id).value = Math.round(攻击/damage_multiplier);
    } else if (!total_damange) {
        // Calculate total_damange
        total_damange = Math.round(攻击*damage_multiplier);
        document.getElementById(result_id).value = total_damange;
    }

    // Update the all_attack_info string with calculated values
    var rank = document.getElementById(rank_id).value;
    var rank_addon = [1.08, 1, 1, 1.08];

    for (var i = 0; i < rank_addon.length; i++) {
        if (i > rank){break;}
        damage_multiplier *= rank_addon[i];
    } 
    // 数据参考：游戏里的数据
    var 普攻 = (53 + 攻击 * 0.71
    + 48 + 攻击 * 0.64
    + 64 + 攻击 * 0.85
    + 69 + 攻击 * 0.92
    + 74 + 攻击 * 0.99)*damage_multiplier;

    var 普攻重击 = (144 + 攻击 * 1.92)*damage_multiplier;
    var 主动技伤害 = (309 + 攻击 * 4.12)*damage_multiplier;
    var 共鸣技伤害 = (785 + 攻击 * 10.47)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 19.2)*damage_multiplier;
    var 协助技伤害 = (306 + 攻击 * 4.08)*damage_multiplier;

    all_attack_info = rank + "阶:\n"
                    + "普攻（五段总计）： " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害 " + Math.round(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}

function 四星卡套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, info_id) {
    // TODO: Add the calculation for the four-star card set

    攻击 = document.getElementById(num1_id).value;
    // Check if the user has entered a value for 攻击
    if (!攻击) {
        alert("请输入攻击值.");
        return
    }
    match_count = document.getElementById(match_id).value;
    contest_multiplier = document.getElementById(contest_multiplier_id).value;
    
    damage_multiplier = 1 + match_count*0.05 + parseFloat(contest_multiplier)/100;
    // Clear num2 values
    document.getElementById(num2_id).value = 0;
    document.getElementById(result_id).value = 攻击*damage_multiplier;

    // Update the all_attack_info string with calculated values
    var rank = document.getElementById(rank_id).value;
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
                    + "普攻（五段总计）： " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害： " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害： " + Math.round(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}