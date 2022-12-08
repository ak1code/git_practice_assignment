function prime(number) {
  count = 0;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++
    }
  }
  if (count == 2) {
    return true;
  }
  else {
    return false;
  }
}
let ans = prime(13);
if (ans == true) {
  console.log("It is a Prime number")
}
else {
  console.log("It is not a Prime number")
}

