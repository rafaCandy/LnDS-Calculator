// function calculate() {
//     var operation = document.getElementById('operation').value;
//     if (operation === 'addition') {
//         calculateAddition();
//     } else if (operation === 'subtraction') {
//         calculateSubtraction();
//     }
// }

function calculate_team1() {
    var operation1 = document.getElementById('operation1').value;

    num1_id = 'num1'
    num2_id = 'num2'
    result_id = 'result1'

    if (operation1 === '末夜套') {
        末夜套(num1_id, num2_id, result_id);
    } else if (operation1 === '永恒套') {
        永恒套(num1_id, num2_id, result_id);
    } else if (operation1 === '神殿套') {
        神殿套(num1_id, num2_id, result_id);
    }
}

function calculate_team2() {
    var operation2 = document.getElementById('operation2').value;

    num3_id = 'num3'
    num4_id = 'num4'
    result_id = 'result2'

    if (operation2 === '末夜套') {
        末夜套(num3_id, num4_id, result_id);
    } else if (operation2 === '永恒套') {
        永恒套(num3_id, num4_id, result_id);
    } else if (operation2 === '神殿套') {
        神殿套(num3_id, num4_id, result_id);
    }
}

function calculate_team3() {
    var operation3 = document.getElementById('operation3').value;

    num5_id = 'num5'
    num6_id = 'num6'
    result_id = 'result3'

    if (operation3 === '末夜套') {
        末夜套(num5_id, num6_id, result_id);
    } else if (operation3 === '永恒套') {
        永恒套(num5_id, num6_id, result_id);
    } else if (operation3 === '神殿套') {
        神殿套(num5_id, num6_id, result_id);
    }

}



function 末夜套(num1_id, num2_id, result_id) {
    // 末夜套 =  攻击/2.29 + 1.73 * 防御

    攻击 = document.getElementById(num1_id).value;
    防御 = document.getElementById(num2_id).value;
    总伤害 = document.getElementById(result_id).value;

    if (!攻击 && 防御 && 总伤害) {
        // Calculate 攻击
        攻击 = (parseFloat(总伤害) - parseFloat(防御)*1.73)*2.29;
        攻击 = Math.round(攻击);
        document.getElementById(num1_id).value = 攻击;
    } else if (攻击 && !防御 && 总伤害) {
        // Calculate 防御
        防御 = (parseFloat(总伤害) - parseFloat(攻击)/2.29)/1.73;
        防御 = Math.round(防御);
        document.getElementById(num2_id).value = 防御;
    } else if (攻击 && 防御 && !总伤害) {
        // Calculate 总伤害
        总伤害 = parseFloat(攻击)/2.29 + parseFloat(防御)*1.73;
        总伤害 = Math.round(总伤害);
        document.getElementById(result_id).value = 总伤害;
    } else {
        alert("输入其中两个数值，计算第三个.");
    }
}

function 永恒套(num1_id, num2_id, result_id) {
    // 永恒套 =  攻击/3.12 + 1.27 * 防御

    攻击 = document.getElementById(num1_id).value;
    防御 = document.getElementById(num2_id).value;
    总伤害 = document.getElementById(result_id).value;

    if (!攻击 && 防御 && 总伤害) {
        // Calculate 攻击
        攻击 = (parseFloat(总伤害) - parseFloat(防御)*1.27)*3.12;
        攻击 = Math.round(攻击);
        document.getElementById(num1_id).value = 攻击;
    } else if (攻击 && !防御 && 总伤害) {
        // Calculate 防御
        防御 = (parseFloat(总伤害) - parseFloat(攻击)/3.12)/1.27;
        防御 = Math.round(防御);
        document.getElementById(num2_id).value = 防御;
    } else if (攻击 && 防御 && !总伤害) {
        // Calculate 总伤害
        总伤害 = parseFloat(攻击)/3.12 + parseFloat(防御)*1.27;
        总伤害 = Math.round(总伤害);
        document.getElementById(result_id).value = 总伤害;
    } else {
        alert("输入其中两个数值，计算第三个.");
    }
}

function 神殿套(num1_id, num2_id, result_id) {
    // 神殿套 =  攻击 +  生命/11

    攻击 = document.getElementById(num1_id).value;
    生命 = document.getElementById(num2_id).value;
    总伤害 = document.getElementById(result_id).value;

    if (!攻击 && 生命 && 总伤害) {
        // Calculate 攻击
        攻击 = parseFloat(总伤害) - parseFloat(生命)/11;
        攻击 = Math.round(攻击);
        document.getElementById(num1_id).value = 攻击;
    } else if (攻击 && !生命 && 总伤害) {
        // Calculate 生命
        生命 = (parseFloat(总伤害) - parseFloat(攻击))*11;
        生命 = Math.round(生命);
        document.getElementById(num2_id).value = 生命;
    } else if (攻击 && 生命 && !总伤害) {
        // Calculate 总伤害
        总伤害 = parseFloat(攻击) + parseFloat(生命)/11;
        总伤害 = Math.round(总伤害);
        document.getElementById(result_id).value = 总伤害;
    } else {
        alert("输入其中两个数值，计算第三个.");
    }
}