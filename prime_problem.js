let num=13;
let count=0;
for(i=1;i<=num/2;i++){
if(num%i==0)
count++;
}
if(count==2)
console.log("prime Number")
else{
console.log("Not Prime Number")
}