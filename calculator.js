let num = 0;

//functions
function add(input1, input2){
    return input1 + input2;
};

function subtract(input1, input2){
    return input1 - input2;
}

function multiply(input1, input2){
    return input1 * input2;
}

function divide(input1, input2){
    return Math.floor((input1/input2)*100)/100;
}

function changeNum(newNum){
    if(num === 0){
        num = newNum;
    } else{
        num = (num*10)+newNum;
    }
    update();
}

function update(){
    numField.textContent = num;
}

function reset(){
    num = 0
    inputs = [];
    operations = [];
    update()
}

function sign(){
    numField.textContent = `-${num}`;
    num = Math.sign(num);
}

function percent(){
    num = num/100;
    update()
}

function decimal(){
    
}

//Calculator DOM
const calculator = document.querySelector("#container");
const numField = document.createElement("div");
numField.textContent = num;
numField.classList.add("numField");
const btnGrid = document.createElement("div");
btnGrid.classList.add("btnGrid");
calculator.appendChild(numField);
calculator.appendChild(btnGrid);

const row0 = document.createElement("div");
row0.classList.add("row");
const btnAC = document.createElement("button");
const btnSign = document.createElement("button");
const btnPercent = document.createElement("button");
const btnDiv = document.createElement("button");
btnAC.textContent = "AC";
btnSign.textContent = "+/-";
btnPercent.textContent = "%";
btnDiv.textContent = "/";
row0.appendChild(btnAC);
row0.appendChild(btnSign);
row0.appendChild(btnPercent);
row0.appendChild(btnDiv);

const row1 = document.createElement("div");
row1.classList.add("row");
const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btnMult = document.createElement("button");
btn7.textContent = "7";
btn8.textContent = "8";
btn9.textContent = "9";
btnMult.textContent = "X";
row1.appendChild(btn7);
row1.appendChild(btn8);
row1.appendChild(btn9);
row1.appendChild(btnMult);

const row2 = document.createElement("div");
row2.classList.add("row");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btnSub = document.createElement("button");
btn4.textContent = "4";
btn5.textContent = "5";
btn6.textContent = "6";
btnSub.textContent = "-";
row2.appendChild(btn4);
row2.appendChild(btn5);
row2.appendChild(btn6);
row2.appendChild(btnSub);

const row3 = document.createElement("div");
row3.classList.add("row");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btnAdd = document.createElement("button");
btn1.textContent = "1";
btn2.textContent = "2";
btn3.textContent = "3";
btnAdd.textContent = "+";
row3.appendChild(btn1);
row3.appendChild(btn2);
row3.appendChild(btn3);
row3.appendChild(btnAdd);

const row4 = document.createElement("div");
row4.classList.add("row");
const btn0 = document.createElement("button");
const btnDec = document.createElement("button");
btnDec.classList.add("btn2");
const btnEql = document.createElement("button");
btnEql.classList.add("btn2");
btn0.textContent = "0";
btnDec.textContent = ".";
btnEql.textContent = "=";
row4.appendChild(btn0);
row4.appendChild(btnDec);
row4.appendChild(btnEql);

btnGrid.appendChild(row0);
btnGrid.appendChild(row1);
btnGrid.appendChild(row2);
btnGrid.appendChild(row3);
btnGrid.appendChild(row4);

//button functions
//number buttons
btn9.onclick = () => changeNum(9);
btn8.onclick = () => changeNum(8);
btn7.onclick = () => changeNum(7);
btn6.onclick = () => changeNum(6);
btn5.onclick = () => changeNum(5);
btn4.onclick = () => changeNum(4);
btn3.onclick = () => changeNum(3);
btn2.onclick = () => changeNum(2);
btn1.onclick = () => changeNum(1);
btn0.onclick = () => changeNum(0);

//misc buttons
btnAC.onclick = () => reset();
btnSign.onclick = () => sign();
btnPercent.onclick = () => percent();

//arithmetic buttons
let inputs = [];
let operations = [];

function createOp(arith){
    inputs.push(num);
    operations.push(arith);
    num = 0;
}

btnAdd.onclick = () => createOp(1);
btnSub.onclick = () => createOp(2);
btnMult.onclick = () => createOp(3);
btnDiv.onclick = () => createOp(4);


function operate(){
    inputs.push(num);
    if(inputs.length+1 === operations.length){
        output = inputs.pop();
        while(operations.length != 0){
            let op = operations.pop();
            let secondNum = inputs.pop();
            switch(op){
                case 1:
                    output = add(output, secondNum);
                    break;
                case 2:
                    output = subtract(output, secondNum);
                    break;
                case 3:
                    output = multiply(output, secondNum);
                    break;
                case 4:
                    if(secondNum != 0){
                        output = divide(output, secondNum);
                    } else {
                        output = "DIV BY 0"
                    }
                    break;
            }
        }
        num = output;
        inputs = [];
        operations = [];
        update();
    } else {
        reset();
        numField.textContent = "INV OP"
    }
}
btnEql.onclick = () => {
    operate();
};
