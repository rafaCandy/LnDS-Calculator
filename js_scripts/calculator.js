// 公式笔记
// 末夜套 =  攻击/2.29 + 1.73 * 防御
// 永恒套 =  攻击/3.12 + 1.27 * 防御
// 神殿套 =  攻击 +  生命/11

function calculate_team1() {
    var operation1 = document.getElementById('operation1').value;

    num1_id = 'num1'
    num2_id = 'num2'
    result_id = 'result1'
    info_id = 'info1'

    if (operation1 === '末夜套') {
        末夜套(num1_id, num2_id, result_id, info_id);
    } else if (operation1 === '永恒套') {
        永恒套(num1_id, num2_id, result_id, info_id);
    } else if (operation1 === '神殿套') {
        神殿套(num1_id, num2_id, result_id, info_id);
    } else if (operation1 === '深海套') {
        深海套(num1_id, num2_id, result_id, info_id);
    }
}

function calculate_team2() {
    var operation2 = document.getElementById('operation2').value;

    num3_id = 'num3'
    num4_id = 'num4'
    result_id = 'result2'
    info_id = 'info2'

    if (operation2 === '末夜套') {
        末夜套(num3_id, num4_id, result_id, info_id);
    } else if (operation2 === '永恒套') {
        永恒套(num3_id, num4_id, result_id, info_id);
    } else if (operation2 === '神殿套') {
        神殿套(num3_id, num4_id, result_id, info_id);
    } else if (operation2 === '深海套') {
        深海套(num3_id, num4_id, result_id, info_id);
    }
}

function calculate_team3() {
    var operation3 = document.getElementById('operation3').value;

    num5_id = 'num5'
    num6_id = 'num6'
    result_id = 'result3'
    info_id = 'info3'

    if (operation3 === '末夜套') {
        末夜套(num5_id, num6_id, result_id, info_id);
    } else if (operation3 === '永恒套') {
        永恒套(num5_id, num6_id, result_id, info_id);
    } else if (operation3 === '神殿套') {
        神殿套(num5_id, num6_id, result_id, info_id);
    } else if (operation3 === '深海套') {
        深海套(num5_id, num6_id, result_id, info_id);
    }

}



function 末夜套(num1_id, num2_id, result_id, info_id) {
    

    攻击 = document.getElementById(num1_id).value;
    防御 = document.getElementById(num2_id).value;
    total_damange = document.getElementById(result_id).value;


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
        total_damange = parseFloat(攻击)/2.29 + parseFloat(防御)*1.73;
        total_damange = Math.round(total_damange);
        document.getElementById(result_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
    }

    // Update the 技能伤害 string with calculated values
    var rank = [0, 1, 2, 3];
    var rank_addon = [1.08, 1, 1, 1.08];
    var all_attack_info = "";

    for (var i = 0; i < level.length; i++) {
        // 数据参考：游戏里的数据
        攻击 = 攻击*rank_addon[i];
        var 普攻 = 55+ 0.29*攻击 + 1.17*防御
        + 50 + 0.26*攻击 + 1.05*防御
        + 66 + 0.35*攻击 + 1.4*防御
        + 72 + 0.38*攻击 + 1.52*防御
        + 77 + 0.41*攻击 + 1.63*防御;

        var 普攻重击= 150 + 攻击 * 0.8 +  防御 * 3.17;
        var 主动技伤害 = 405 + 攻击 * 2.15 +  防御 * 8.52;
        var 共鸣技伤害 = 631+ 攻击 * 3.36 +  防御 * 13.33
        + 686 + 攻击 * 3.66 +  防御 * 14.5;
        var 誓约技伤害 = 1440 + 攻击 * 7.8 +  防御 * 30.6;
        var 协助技伤害 = 0;

        all_attack_info += rank[i] + "阶:\n"
                        + "普攻：（五段总计） " + 普攻 + "\n"
                        + "普攻重击： " + 普攻重击 + "\n"
                        + "主动技伤害 " + 主动技伤害 + "\n"
                        + "共鸣技伤害： " + 共鸣技伤害 + "\n"
                        + "誓约技伤害： " + 誓约技伤害 + "\n"
                        + "协助技伤害 " + "（无数据）" + "\n"
                        + "================\n";
    }

    document.getElementById(info_id).innerText = all_attack_info;
}

function 永恒套(num1_id, num2_id, result_id, info_id) {
    

    攻击 = document.getElementById(num1_id).value;
    防御 = document.getElementById(num2_id).value;
    total_damange = document.getElementById(result_id).value;

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
        total_damange = parseFloat(攻击)/3.12 + parseFloat(防御)*1.27;
        total_damange = Math.round(total_damange);
        document.getElementById(result_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
    }

    // Update the all_attack_info string with calculated values
    var rank = [0, 1, 2, 3];
    var rank_addon = [1.08, 1, 1, 1.08];
    var all_attack_info = "";

    for (var i = 0; i < rank.length; i++) {
        // 数据参考：小红书@Midnight，小红书@恋与深空Evol攻略组
        攻击 = 攻击*rank_addon[i];
        var 普攻 = 188 + 攻击 * 1.54 +  防御 * 6.09; 
        var 普攻重击= 167 + 攻击 * 0.89 +  防御 * 6.09;
        var 强化重击 = 192 + 攻击 * 1.02 +  防御 * 4.06;
        var 共鸣技伤害 = 790 + 攻击 * 4.21 +  防御 * 16.7;
        var 誓约技伤害 = 1440 + 攻击 * 7.8 +  防御 * 30.6;
        var 协助技伤害 = 防御 * 2.4;
        var 主动技伤害 = 0;
        var 圣迹 = 52 + 攻击 * 0.28 +  防御 * 1.11;
        

        all_attack_info += rank[i] + "阶:\n"
                        + "普攻（四段总计）： " + Math.round(普攻) + "\n"
                        + "普攻重击： " + Math.round(普攻重击) + "\n"
                        + "强化重击： " + Math.round(强化重击) + "\n"
                        + "主动技伤害 " + 主动技伤害 + "\n"
                        + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                        + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                        + "协助技伤害 " + Math.round(协助技伤害) + "\n"
                        + "圣迹（一格能量）" + Math.round(圣迹) + "\n";
        if (rank[i] === 1) {
            all_attack_info += "咒文状态协助技伤害： " + 协助技伤害*1.12 + "\n";
        }
        all_attack_info += "================\n";
    }

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}

function 神殿套(num1_id, num2_id, result_id, info_id) {
    
    攻击 = document.getElementById(num1_id).value;
    生命 = document.getElementById(num2_id).value;
    total_damange = document.getElementById(result_id).value;

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
        total_damange = parseFloat(攻击) + parseFloat(生命)/11;
        total_damange = Math.round(total_damange);
        document.getElementById(result_id).value = total_damange;
    } else {
        alert("输入其中两个数值，计算第三个.");
    }


    // Update the all_attack_info string with calculated values
    var rank = [0, 1, 2, 3];
    var rank_addon = [1.08, 1, 1, 1.08];
    var all_attack_info = "";

    for (var i = 0; i < rank.length; i++) {
        // 数据参考：小红书@小红薯5D1FE509
        攻击 = 攻击*rank_addon[i];
        var 普攻 = 398 + 攻击 * 2.11 +  生命 * 0.19; 
        var 普攻重击= 182 + 攻击 * 0.97 +  生命 * 0.09;
        var 共鸣技伤害 = 995 + 攻击 * 5.31 +  生命 * 0.478;
        var 誓约技伤害 = 1440 + 攻击 * 7.8 +  生命 * 0.694;
        var 主动技伤害 = 73 + 攻击 * 0.39 +  生命 * 0.035;
        var 协助技伤害 = 0;

        all_attack_info += rank[i] + "阶:\n"
                        + "普攻（四段总计）： " + Math.round(普攻) + "\n"
                        + "普攻重击： " + Math.round(普攻重击) + "\n"
                        + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                        + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                        + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                        + "协助技伤害 " + "（无数据）" + "\n"
                        + "================\n";
    }

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}


function 深海套(num1_id, num2_id, result_id, info_id) {
    
    攻击 = document.getElementById(num1_id).value;
    // Clear num2 values
    document.getElementById(num2_id).value = 0;
    document.getElementById(result_id).value = 攻击;

    // Update the all_attack_info string with calculated values
    var rank = [0, 1, 2, 3];
    var rank_addon = [1.08, 1, 1, 1.08];
    var all_attack_info = "";

    for (var i = 0; i < rank.length; i++) {
        // 数据参考：游戏里的数据
        攻击 = 攻击*rank_addon[i];
        var 普攻 = 53 + 攻击 * 0.71
        + 48 + 攻击 * 0.64
        + 64 + 攻击 * 0.85
        + 69 + 攻击 * 0.92
        + 74 + 攻击 * 0.99;

        var 普攻重击 = 144 + 攻击 * 1.92;
        var 主动技伤害 = 309 + 攻击 * 4.12;
        var 共鸣技伤害 = 785 + 攻击 * 10.47;
        var 誓约技伤害 = 1440 + 攻击 * 19.2;
        var 协助技伤害 = 306 + 攻击 * 4.08;
        

        all_attack_info += rank[i] + "阶:\n"
                        + "普攻（五段总计）： " + Math.round(普攻) + "\n"
                        + "普攻重击： " + Math.round(普攻重击) + "\n"
                        + "共鸣技伤害： " + Math.round(共鸣技伤害) + "\n"
                        + "誓约技伤害： " + Math.round(誓约技伤害) + "\n"
                        + "主动技伤害 " + Math.round(主动技伤害) + "\n"
                        + "协助技伤害 " + Math.round(协助技伤害) + "\n"
                        + "================\n";
    }

    // Update the display-window with the calculated values
    console.log("all_attack_info: ", all_attack_info, "\n")
    document.getElementById(info_id).innerText = all_attack_info;
}