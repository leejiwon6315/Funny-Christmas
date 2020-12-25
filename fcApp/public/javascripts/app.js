let num0 = 0,
  num1 = 0,
  num2 = 0,
  final = 0;

const input0 = document.getElementById("input0");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const output0 = document.getElementById("num0");
const output1 = document.getElementById("num1");
const output2 = document.getElementById("num2");
const one = [67, 76, 79, 83, 86];
const two = [
  65,
  66,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  78,
  80,
  81,
  82,
  84,
  85,
  87,
  88,
  89,
  90,
];
const three = [75, 77];
const historyList0 = document.getElementById("history_list_0");
const historyList1 = document.getElementById("history_list_1");
const historyList2 = document.getElementById("history_list_2");
const calButton = document.getElementById("calculate");

addNumber0 = (cnt) => {
  output0.innerText = cnt;
};

addNumber1 = (cnt) => {
  output1.innerText = cnt;
};

addNumber2 = (cnt) => {
  output2.innerText = cnt;
};

calculate0 = (e) => {
  const i = e.keyCode;
  if (one.includes(i)) {
    num0 += 1;
  } else if (two.includes(i)) {
    num0 += 2;
  } else if (three.includes(i)) {
    num0 += 3;
  } else {
  }

  addNumber0(num0);
};

calculate1 = (e) => {
  const i = e.keyCode;
  if (one.includes(i)) {
    num1 += 1;
  } else if (two.includes(i)) {
    num1 += 2;
  } else if (three.includes(i)) {
    num1 += 3;
  } else {
  }

  addNumber1(num1);
};

calculate2 = (e) => {
  const i = e.keyCode;
  if (one.includes(i)) {
    num2 += 1;
  } else if (two.includes(i)) {
    num2 += 2;
  } else if (three.includes(i)) {
    num2 += 3;
  } else {
  }

  addNumber2(num2);
};

calPart = (text, list) => {
  const currentHistory = document.createElement("div");
  currentHistory.innerText += text;
  list.insertBefore(currentHistory, list.firstChild);
};

cutNum = (s) => {
  return s % 10;
};

finalCalculate = () => {
  let first = cutNum(num0 + 4);
  calPart(first, historyList0);

  let second = cutNum(num1 + 4);
  calPart(second, historyList0);
  calPart(second, historyList0);

  let third = cutNum(num2 + 4);
  calPart(third, historyList0);

  first = cutNum(first + second);
  calPart(first, historyList1);

  second = cutNum(second + second);
  calPart(second, historyList1);

  third = cutNum(second + third);
  calPart(third, historyList1);

  calPart(cutNum(first + second) + `%`, historyList2);
  calPart(cutNum(second + third), historyList2);
};

input0.addEventListener("keydown", calculate0);
input1.addEventListener("keydown", calculate1);
input2.addEventListener("keydown", calculate2);
calButton.addEventListener("click", finalCalculate);
