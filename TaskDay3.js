console.log("Task Day:3");
console.log(`====================`);
{
  console.log("Check ODD or EVEN Number");
  console.log(`====================`);
  let number = 31;
  result =
    number % 2 === 0
      ? number + " is an Even Number"
      : number + " is an Odd Number";

  console.log(result);
}

{
  console.log("Elegiablity check for Driving License");
  console.log(`====================`);
  let age = 18;
  let result =
    age >= 18
      ? `You ar Eligable to Get Driving License`
      : `You are under 18 your age is ${age} you uneligable to get Driving License`;
  console.log(result);
}

{
  console.log("Calculate CTC");
  console.log(`====================`);
  let monthlySalary = 12300;
  let bounus = (monthlySalary * 20) / 100;
  let AnnualCTC = (monthlySalary + bounus) * 12;
  console.log(`Your CTC is ${AnnualCTC}`);
}

{
  console.log("Trafic Light");
  console.log(`====================`);
  let traficLight = "green";

  switch (traficLight) {
    case "red":
      console.log("!STOP ! You are unable to cross road");
      break;
    case "yellow":
      console.log("Wait Be alert don`t cross");
      break;
    case "green":
      console.log("You can !go! ");
      break;
    default:
      console.log("Trafic Point");
  }
}

{
  console.log(`Check Leap Year`);
  console.log(`====================`);
  let year = 2024;

  if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
    console.log(year + " is  a Leap Year");
  } else {
    console.log(year + " is not a Leap Year");
  }
}

{
  let unitPrice = 150;
  let monthlyBill = 30 * unitPrice;
  let annualDiscount = (monthlyBill / 100) * 20;
  let annualBillafterDiscount = monthlyBill * 12 - annualDiscount;
  console.log("Annual Bill with 20% discount");
  console.log(`==============================`);
  console.log("Annual Bill = " + monthlyBill * 12);
  console.log("Annual Bill after 20% discount =" + annualBillafterDiscount);
}

{
  console.log("Finf Max Number from 3 numbers");
  console.log("=========================");
  let p = 100000,
    q = 1800,
    r = 15000;
  if (p > q && p > r) {
    console.log(p + " P is Maximum");
  } else if (q > r && q > r) {
    console.log(q + " Q is Maximum");
  } else {
    console.log(r + " R is Maximum");
  }
}

{
  console.log("Bitwise by double");
  console.log("=========================");
  let count = 10;
  let bitwiseByDouble = count << 1;
  console.log(`Bitwise by double of ${count} is ${bitwiseByDouble}`);
}
