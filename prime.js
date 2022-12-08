function prime(number) {
  count = 0;
  for (i = 1; i < number; i++) {
    if (number % 2 == 0) {
      count=count+1
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
  console.log("Prime")
}
else {
  console.log("not prime")
}

