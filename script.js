console.log("Question 1: Student Result");

let name = prompt("Enter Student Name");

let english = Number(prompt("Enter English Marks"));
let maths = Number(prompt("Enter Maths Marks"));
let computer = Number(prompt("Enter Computer Marks"));

let total = english + maths + computer;

console.log("Student Name: " + name);
console.log("Total Marks: " + total);

if (english >= 40 && maths >= 40 && computer >= 40) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

console.log("Question 2: Shopping Discount");

let amount = Number(prompt("Enter Shopping Amount"));

let discount = 0;

if (amount >= 10000) {
    discount = amount * 0.20;
} else if (amount >= 5000) {
    discount = amount * 0.10;
} else {
    discount = 0;
}

let finalAmount = amount - discount;

console.log("Original Amount: " + amount);
console.log("Discount: " + discount);
console.log("Final Amount: " + finalAmount);

console.log("Question 3: ATM System");

let correctPin = "1234";

let pin = prompt("Enter Your PIN");

let balance = 20000;

if (pin == correctPin) {

    let amount = Number(prompt("Enter Withdrawal Amount"));

    if (amount <= balance && amount > 0) {

        balance = balance - amount;

        console.log("Withdrawal Successful");
        console.log("Remaining Balance: " + balance);

    } else {
        console.log("Insufficient Balance or Invalid Amount");
    }

} else {
    console.log("Incorrect PIN");
}

console.log("Question 4: Electricity Bill");

let units = Number(prompt("Enter Electricity Units"));

let bill = 0;

if (units >= 0) {

    if (units <= 100) {
        bill = units * 10;
    } else if (units <= 200) {
        bill = units * 15;
    } else {
        bill = units * 20;
    }

    console.log("Total Units: " + units);
    console.log("Electricity Bill: " + bill);

} else {
    console.log("Invalid Units");
}

console.log("Question 5: University Admission");

let stdname = prompt("Enter Student Name");

let age = Number(prompt("Enter Your Age"));

let marks = Number(prompt("Enter Your Percentage"));

let eligible = false;

if (age >= 18) {

    if (marks >= 60) {

        eligible = true;

        console.log("Student Name: " + stdname);
        console.log("Admission Approved");

        if (marks >= 80) {
            console.log("Scholarship Approved");
        } else {
            console.log("No Scholarship");
        }

    } else {
        console.log("Admission Rejected: Low Marks");
    }

} else {
    console.log("Admission Rejected: Age Below 18");
}

console.log("Eligible: " + eligible);