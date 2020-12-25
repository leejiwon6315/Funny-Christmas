let num0 = 0,
  num1 = 0,
  num2 = 0,
  cnt0 = 0,
  cnt1 = 0,
  cnt2 = 0;
let k0 = [],
  k1 = [],
  k2 = [];
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

addNumber0 = (c) => {
  output0.innerText = c;
};

addNumber1 = (c) => {
  output1.innerText = c;
};

addNumber2 = (c) => {
  output2.innerText = c;
};

calculate0 = (e) => {
  const i = e.keyCode;

  if (one.includes(i)) {
    k0[cnt0] = 1;
    num0 += k0[cnt0++];
  } else if (two.includes(i)) {
    k0[cnt0] = 2;
    num0 += k0[cnt0++];
  } else if (three.includes(i)) {
    k0[cnt0] = 3;
    num0 += k0[cnt0++];
  } else if (i == 8) {
    cnt0--;
    num0 -= k0[cnt0];
  } else {
  }

  addNumber0(num0);
};

calculate1 = (e) => {
  const i = e.keyCode;

  if (one.includes(i)) {
    k1[cnt1] = 1;
    num1 += k1[cnt1++];
  } else if (two.includes(i)) {
    k1[cnt1] = 2;
    num1 += k1[cnt1++];
  } else if (three.includes(i)) {
    k1[cnt1] = 3;
    num1 += k1[cnt1++];
  } else if (i == 8) {
    cnt1--;
    num1 -= k1[cnt1];
  } else {
  }

  addNumber1(num1);
};

calculate2 = (e) => {
  const i = e.keyCode;

  if (one.includes(i)) {
    k2[cnt2] = 1;
    num2 += k2[cnt2++];
  } else if (two.includes(i)) {
    k2[cnt2] = 2;
    num2 += k2[cnt2++];
  } else if (three.includes(i)) {
    k2[cnt2] = 3;
    num2 += k2[cnt2++];
  } else if (i == 8) {
    cnt2--;
    num2 -= k2[cnt2];
  } else {
  }

  addNumber2(num2);
};

calPart = (text, list) => {
  const currentHistory = document.createElement("div");
  currentHistory.innerText = String(text);
  list.insertBefore(currentHistory, list.secondChild);
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

  const tmp = second;
  second = cutNum(second + second);
  calPart(second, historyList1);

  third = cutNum(tmp + third);
  calPart(third, historyList1);

  const result = `${cutNum(first + second)}${cutNum(second + third)}%`;
  const currentHistory = document.createElement("div");
  currentHistory.innerText += result;
  historyList2.insertBefore(currentHistory, historyList2.firstChild);
};

input0.addEventListener("keydown", calculate0);
input1.addEventListener("keydown", calculate1);
input2.addEventListener("keydown", calculate2);
calButton.addEventListener("click", finalCalculate);
