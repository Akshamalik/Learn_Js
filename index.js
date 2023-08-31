//js--versions twwo es5(var) and es6(let and const)

//Javascript fundamentals
//word Vs keyword
//var is function scoped and let breaces scoped
//just=word i.e that have nothing defined in the interpretor

//for=keyword i.e that have some meaning already defined in interpretor

//var let and const
//varible store the data whose value can be changed
//cntrl+shift+J--open inspect in chrome
function abcd()
{
  for(var i=1;i<5;i++)
  {
    console.log(i);
  }
  console.log(i); //i can be used here also
}
abcd();
function abcd2()
{
  for(let i=1;i<5;i++)
  {
    console.log(i);
  }
  //console.log(i); it will give error as let is braces scoped
}

var mathsscore=35;
var sciencescore=45;
console.log(mathsscore+sciencescore);
//if we change the value we use var
mathsscore=45;
console.log(mathsscore+sciencescore);
//we use const when we have to fix the value i.e whose value can't be changed
const message="hey"
console.log(message)


//hoisting --variable and functions are hoisted which means their declaration is moved at the top of code
//var only supports hoisting wheras const and let don't

//the window object gives the feature to Js which are not in it eg-console,alert
//default value is undefined
//difference btw defined and not-defined
//undefined--if existence of varible but value not
//non-defined--if there is no existence
//js move the declaration at the top of code

//types---primitive and reference


//reference-{},[],()--the values whose reference is passed i.e copy
//primitive-null,number,boolean,string
//changes in reference will change both of them
//array indexing start from zero
var a=[1,2,3];
var b=a;
b.pop();

console.log(a);
console.log(b);

//conditionals 
if(13>12)
{
   console.log("13>12") 
}
else if(14>12){
  console.log("14>12")
}
else{
   console.log("error")
}

//loop--for and while

//for(start;end;change) && while(condition)
for(var i=0;i<11;i++)
{
    console.log(i)
}

for(var i=25;i<=50;i++)
{
    console.log(i)

}
var c=15;
while(c<20)
{
  c++;
}
//function
function mesg(){
    console.log("this is a message from aksha")
}

mesg();
//the values which we give are called arguments and parameters are which where we store real value or values given in function at definition
function add(a,b)
{
    var sum=a+b;
}
add(2,3);
//array push add element at end
//pop delete an item at end
//unshhift add at start
//shift delete at start
//slice delete from start to end given
var array2=[23,45];
array2.push(49);
console.log(array2)
array2.pop();
console.log(array2)
array2.unshift(3);
console.log(array2)
array2.shift()
console.log(array2)
array2.splice(0,1)
console.log(array2)











