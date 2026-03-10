console.log("01.Task Day:4");
console.log(`---------------------------`);
{
  let day = "Monday";

  switch (day) {
    case "monday":
      console.log("It's the start of the week.");
      break;
    default:
      console.log("It's a normal day.");
  }
  // JavaScript is case-sensitive, so "Monday" and "monday" are different. Because the case does not match, the default statement runs.

  console.log(`====================`);
}

{
  console.log("2. Build an ATM Cash Withdrawal System");
  console.log(`---------------------------`);
  let withdraw = 900;
  withdraw % 100 === 0
    ? console.log("withdraw success")
    : console.log("Invalid amount");

  console.log(`====================`);
}
{
  console.log("3. Build a Calculator with switch-case");
  console.log(`---------------------------`);
  let num1 = 20;
  let num2 = 50;
  let result;
  let operator = "+";

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operator! Please use +, -, *, /, or %.");
  }
  if (result !== undefined) {
    console.log(`result ${num1} ${operator}${num2}=${result}`);
  }
  console.log(`====================`);
}

{
  console.log("4. Pay for your movie ticket");
  console.log(`---------------------------`);

  let age = 61;
  let TicketPrice;
  if (age < 18) {
    TicketPrice = 3;
  } else if (age > 18 && age <= 60) {
    TicketPrice = 10;
  } else if (age > 60) {
    TicketPrice = 8;
  }
  console.log(`Your age is ${age} and ticket price is ${TicketPrice}`);
  console.log(`====================`);
}
