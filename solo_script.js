// ! ! !
// Three Bugs

var Atticus = {
  name: "Atticus",
  employeeNum: "2405",
  salary: "47000", 
  reviewScore: 3
};
var Jem = {
  name: "Jem",
  employeeNum: "62347",
  salary: "63500", 
  reviewScore: 4
};
var Boo = {
  name: "Boo",
  employeeNum: "11435",
  salary: "54000", 
  reviewScore: 3
};
var Scout = {
  name: "Scout",
  employeeNum: "6243",
  salary: "74750", 
  reviewScore: 5
};

var array = [Atticus, Jem, Boo, Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);//added [i] to the array
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(object){
  var newArray = [];

  newArray[0] = object.name;

  var employeeNumber = object.employeeNum;
  var baseSalary = object.salary;
  var reviewScore = object.reviewScore;
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = " " + bonus;
  newArray[2] = " " + parseInt(baseSalary * (1.0 + bonus));//changed from string to Int
  newArray[3] = " " + parseInt(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent = 0;
  switch (reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; //removed -1
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
};

function getIncomeAdjustment(baseSalary){ 
  var incomeAdjustment = 0;
  baseSalary = parseInt(baseSalary);
  if(baseSalary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
