function prime(number) {
  counting = 0;
  for (i=1; i<=number; i++) {
    if (number % i==0) {
      counting++
    }
  }
  if (counting == 2) {
    return true;
  }
  else {
    return false;
  }
}
let ans = prime(10);
if (ans == true) {
  console.log("It is Prime number")
}
  
else {
  console.log("It is not a prime number")
}

