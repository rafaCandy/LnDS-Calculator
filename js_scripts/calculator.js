// 公式笔记: 小红书@恋与深空Evol攻略组
// 末夜套 =  攻击/2.29 + 1.73 * 防御
// 永恒套 =  攻击/3.12 + 1.27 * 防御
// 神殿套 =  攻击 +  生命/11

function 猎人重剑(攻击){
    var 普攻base = (112 + 1.5 * 攻击
    + 112 + 1.5 * 攻击
    + 124 + 1.65 * 攻击
    + 135 + 1.8 * 攻击)/4; // averaged over four attacks
    var 普攻重击base = 337 + 4.49 * 攻击;
    var 主动技伤害base = 410 + 5.47 * 攻击;

    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 猎人单手剑(攻击){
    var 普攻base = 60 + 攻击 * 0.8
    + 60 + 攻击 * 0.8;
    + 72 + 攻击 * 0.96;
    96 + 攻击 * 1.29;
    var 普攻重击base = 118 + 攻击 * 1.57; // 十层猎意 250+攻击*3.33
    var 主动技伤害base = 341 + 攻击 * 4.55;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 猎人法杖(攻击){
    var 普攻base = 72 + 攻击 * 0.96
    + 79 + 攻击 * 1.06
    + 85 + 攻击 * 1.15
    + 94 + 攻击 * 1.25;
    var 普攻重击base = 122 + 攻击 * 1.62;
    var 主动技伤害base = 6 + 攻击 * 0.08;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 猎人手枪(攻击){
    var 普攻base = 44 + 攻击 * 0.59
    + 40 + 攻击 * 0.53
    + 53 + 攻击 * 0.71
    + 57 + 攻击 * 0.77
    + 62 + 攻击 * 0.82;
    var 普攻重击base = 120 + 攻击 * 1.6;
    var 主动技伤害base = 160 + 攻击 * 2.13;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 唤海映潮(攻击){
    var 普攻base = 398 + 攻击 * 2.11;
    var 普攻重击base = 182 + 攻击 * 0.97;
    var 主动技伤害base = 73 + 攻击 * 0.39;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 神灵雨(攻击){
    var 普攻base = 75 + 攻击 * 1
    + 75 + 攻击 * 1.0
    + 90 + 攻击 * 1.21
    + 121 + 攻击 * 1.61;
    var 普攻重击base = 141 + 攻击 * 1.88;
    var 主动技伤害base = 404 + 攻击 * 5.39;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 溯光之刃(攻击){
    var 普攻base = 60 + 攻击 * 0.8
    + 60 + 攻击 * 0.8;
    + 72 + 攻击 * 0.96;
    96 + 攻击 * 1.29;
    var 普攻重击base = 118 + 攻击 * 1.57; // 十层猎意 250+攻击*3.33
    var 主动技伤害base = 341 + 攻击 * 4.55;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 永恒圣音(攻击){
    var 普攻base = 188 + 攻击 * 1.54;
    var 普攻重击base = 167 + 攻击 * 0.89;
    var 主动技伤害base = 52 + 攻击 * 0.28;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 潜影破沙(攻击){
    var 普攻base = 53 + 攻击 * 0.71
    + 48 + 攻击 * 0.64
    + 64 + 攻击 * 0.85
    + 69 + 攻击 * 0.92
    + 74 + 攻击 * 0.99;
    var 普攻重击base = 144 + 攻击 * 1.92;
    var 主动技伤害base = 309 + 攻击 * 4.12;
    return [普攻base, 普攻重击base, 主动技伤害base];
}

function 逐月者(攻击){
    var 普攻base = 55+ 0.29*攻击
    + 50 + 0.26*攻击
    + 66 + 0.35*攻击
    + 72 + 0.38*攻击
    + 77 + 0.41*攻击;
    var 普攻重击base = 150 + 0.8*攻击;
    var 主动技伤害base = 405 + 2.15*攻击;
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


function 末夜套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    武器 = document.getElementById(weapon_id).value;
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
    if (武器 === "专武"){
        武器 = "逐月者"
    }
    if (武器 in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[武器](攻击);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + 武器);
    }

    var 普攻 = (普攻base + 1.17*防御 
    + 1.05*防御 + 1.4*防御 + 1.52*防御 + 1.63*防御)*damage_multiplier;
    var 普攻重击= (普攻重击base +  防御 * 3.17)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base +  防御 * 8.52)*damage_multiplier;
    var 共鸣技伤害 = (631+ 攻击 * 3.36 +  防御 * 13.33
    + 686 + 攻击 * 3.66 +  防御 * 14.5)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 7.8 +  防御 * 30.6)*damage_multiplier;
    var 协助技伤害 = 0;

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + Math.round(普攻) + "\n" // （五段总计）
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "协助技伤害 " + "（无数据）" + "\n";

    document.getElementById(info_id).innerText = all_attack_info;
}

function 永恒套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    武器 = document.getElementById(weapon_id).value;
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

    // 数据参考：游戏里的数据
    if (武器 === "专武"){
        武器 = "永恒圣音"
    }
    if (武器 in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[武器](攻击);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + 武器);
    }

    var 普攻 = (普攻base +  防御 * 6.09)*damage_multiplier;
    var 普攻重击= (普攻重击base +  防御 * 6.09)*damage_multiplier;
    var 强化重击 = (主动技伤害base +  防御 * 4.06)*damage_multiplier;
    var 主动技伤害 = (52 + 攻击 * 0.28 +  防御 * 1.11)*damage_multiplier;
    var 共鸣技伤害 = (790 + 攻击 * 4.21 +  防御 * 16.7)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 7.8 +  防御 * 30.6)*damage_multiplier;
    var 协助技伤害 = (防御 * 2.4)*damage_multiplier;

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "强化重击： " + Math.round(强化重击) + "\n"
                    + "主动技伤害 " + 主动技伤害 + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "协助技伤害 " + Math.round(协助技伤害) + "\n"
    if (rank === 1) {
        all_attack_info += "咒文状态协助技伤害： " + 协助技伤害*1.12 + "\n";
    }

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}

function 神殿套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    武器 = document.getElementById(weapon_id).value;
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
    if (武器 === "专武"){
        武器 = "唤海映潮"
    }
    if (武器 in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[武器](攻击);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + 武器);
    }

    var 普攻 = (普攻base +  生命 * 0.19)*damage_multiplier; // （四段总计）
    var 普攻重击= (普攻重击base * 0.97 +  生命 * 0.09)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base * 0.39 +  生命 * 0.035)*damage_multiplier;
    var 共鸣技伤害 = (995 + 攻击 * 5.31 +  生命 * 0.478)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 7.8 +  生命 * 0.694)*damage_multiplier;
    var 协助技伤害 = (47 + 攻击 * 0.25 +  生命 * 0.022)*damage_multiplier;

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + Math.round(普攻) + "\n"
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "协助技伤害 (一级)： " + 协助技伤害 + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}


function 深海套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    武器 = document.getElementById(weapon_id).value;
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
    if (武器 === "专武"){
        武器 = "潜影破沙"
    }
    if (武器 in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[武器](攻击);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + 武器);
    }

    var 普攻 = (普攻base)*damage_multiplier;

    var 普攻重击 = (普攻重击base)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base)*damage_multiplier;
    var 共鸣技伤害 = (785 + 攻击 * 10.47)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 19.2)*damage_multiplier;
    var 协助技伤害 = (306 + 攻击 * 4.08)*damage_multiplier;

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + Math.round(普攻) + "\n" //（五段总计）
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害 " + Math.round(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}

function 逐光套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    武器 = document.getElementById(weapon_id).value;
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
    if (武器 === "专武"){
        武器 = "溯光之刃"
    }
    if (武器 in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[武器](攻击);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + 武器);
    }

    var 普攻 = (普攻base)*damage_multiplier;

    var 普攻重击 = (普攻重击base)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base)*damage_multiplier;
    var 共鸣技伤害 = (641 + 攻击 * 8.54)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 19.2)*damage_multiplier;
    var 协助技伤害 = (300 + 攻击 * 4.0)*damage_multiplier; // 347 + 攻击 * 4.62

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + Math.round(普攻) + "\n" //（五段总计）
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害 " + Math.round(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}

function 拥雪套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    
    武器 = document.getElementById(weapon_id).value;
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
    if (武器 === "专武"){
        武器 = "神灵雨"
    }
    if (武器 in weaponFunctions) {
        var [普攻base, 普攻重击base, 主动技伤害base] = weaponFunctions[武器](攻击);
        console.log(`普攻base: ${普攻base}, 普攻重击base: ${普攻重击base}, 主动技伤害base: ${主动技伤害base}`);
    } else {
        alert("武器数据未知：" + 武器);
    }

    var 普攻 = (普攻base)*damage_multiplier;
    var 普攻重击 = (普攻重击base)*damage_multiplier;
    var 主动技伤害 = (主动技伤害base)*damage_multiplier;
    var 共鸣技伤害 = (632 + 攻击 * 8.42)*damage_multiplier;
    var 誓约技伤害 = (1440 + 攻击 * 19.2)*damage_multiplier;
    var 协助技伤害 = (260 + 攻击 * 3.48)*damage_multiplier; // 370 + 攻击 * 4.92

    all_attack_info = rank + "阶:\n"
                    + "普攻： " + Math.round(普攻) + "\n" // （五段总计）
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害 " + Math.round(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}


function 四星卡套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id) {
    // TODO: Add the calculation for the four-star card set

    武器 = document.getElementById(weapon_id).value;
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
                    + "普攻： " + Math.round(普攻) + "\n" // （五段总计）
                    + "普攻重击： " + Math.round(普攻重击) + "\n"
                    + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                    + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                    + "主动技伤害： " + Math.round(主动技伤害) + "\n"
                    + "协助技伤害： " + Math.round(协助技伤害) + "\n";

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}


function calculate_team1() {
    var partner = document.getElementById('partner1').value;

    num1_id = 'num1'
    num2_id = 'num2'
    result_id = 'result1'
    rank_id = 'rank1'
    match_id = 'match1'
    contest_multiplier_id = 'contest_multiplier1'
    weapon_id = 'weapon1'
    info_id = 'info1'

    if (partner in partnerFunctions) {
        partnerFunctions[partner](num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
        console.log(`partner: ${partner}`);
    } else {
        alert("套装数据未知：" + partner);
    }

    // if (partner1 === '末夜套') {
    //     末夜套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // } else if (partner1 === '永恒套') {
    //     永恒套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // } else if (partner1 === '神殿套') {
    //     神殿套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // } else if (partner1 === '深海套') {
    //     深海套(num1_id, num2_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // }
}

function calculate_team2() {
    var partner = document.getElementById('partner2').value;

    num3_id = 'num3'
    num4_id = 'num4'
    result_id = 'result2'
    rank_id = 'rank2'
    match_id = 'match2'
    contest_multiplier_id = 'contest_multiplier2'
    weapon_id = 'weapon2'
    info_id = 'info2'

    if (partner in partnerFunctions) {
        partnerFunctions[partner](num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
        console.log(`partner: ${partner}`);
    } else {
        alert("套装数据未知：" + partner);
    }

    // if (partner2 === '末夜套') {
    //     末夜套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // } else if (partner2 === '永恒套') {
    //     永恒套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // } else if (partner2 === '神殿套') {
    //     神殿套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // } else if (partner2 === '深海套') {
    //     深海套(num3_id, num4_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    // }
}

function calculate_team3() {
    var partner3 = document.getElementById('partner3').value;

    num5_id = 'num5'
    num6_id = 'num6'
    result_id = 'result3'
    rank_id = 'rank3'
    match_id = 'match3'
    contest_multiplier_id = 'contest_multiplier3'
    weapon_id = 'weapon3'
    info_id = 'info3'

    if (partner3 === '末夜套') {
        末夜套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    } else if (partner3 === '永恒套') {
        永恒套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    } else if (partner3 === '神殿套') {
        神殿套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    } else if (partner3 === '深海套') {
        深海套(num5_id, num6_id, result_id, rank_id, match_id, contest_multiplier_id, weapon_id, info_id);
    }

}