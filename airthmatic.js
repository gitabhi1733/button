// ONLY ARITHMAIC CHPTER IN JAVASCRIPT
var x=10;
var y=30;
console.log("now add two number"+x+y);// eska result (now add two number1030 )aya hoga kyo ki?
//Hama ra javascript lift to right follow karta hi;
console.log("now add two number"+(x+y))//ab es ka result(now add two nuber 40)aya ga bracket ka mahatave hi
console.log(x-y);
console.log(x/y);
console.log(x%y);
//console.log(++x);
console.log(x++);
console.log(x);
// COMPARISON OPERATOR
var x=9;
var y=5;
if(x==y){
  console.log("this is true");
}
else{
  console.log("not equil");
}
//value ke sath sath type bhi check karna hi to (===) use kar te hi
var a=90;
var b="90";
if(a==b){
  console.log("right");
}// right console ho jayga  The only value compaire  in is;

if(a===b){
  console.log("yes right");
}// not to be console(yes right) because it is not equil type;

var a=90;
var b=23;
if(a!=b){
  console.log("not same value is true");
}
if(a>b){// grather than symbole (>)
  console.log("yes a is grathe than b");
}
if(a<b){// a chota hi b se
  console.log("a less than b");
  }
  // function create in this chapter 
  function show(){
    console.log(" this is now go to market")
  }
  var company={// ek object crate karte hi and find that value
    name:"tesla",
    since:1990,
    pincod:212216,

  }
  console.log(company.pincod);
  //
  //FOR IN KEVAL OBJECT  KE VALUE SHOW KARTA HI
  for(value in company){// es me (value)  object ka define batata hi
    console.log(value+" "+company[value]);
  }
  // FOR FO USE IN THIS CODE
  var  vowel="learnvern"
  for(value of vowel){
    
    console.log(value);
  
}
//
// funcation and object kaise kaam karta hi 

  
  


