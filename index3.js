//execution context--an imaginary container that build up at the time of invoking function
//1-variables 2-function inside parent func 3-lexical enviroment of  that function--the execution container store all of them
//lexical env--contain scope and scope chain
 function message()
 {
    a="hey";
function def()
{
    var b=12;
}
 }
 //copy reference 
 var a=[1.34,2];
 var b=[...a]  //...spread operator

 b.pop();
 console.log(a);
 console.log(b);
 var obj={name:"Radha"};
 var copyobj={...obj};
 copyobj.name="Ram"

 //falsey--0,false,undefined,null,NaN,document.all
 //switch(){case 1:break; default:}

 //foreach loop used for array  it also not change the original array
 var a=[1,2,3]
 a.forEach(function(val){
    console.log(val+5)
 }) 
 //forin --used to loop in object
 var obj2={
    name:"aksha",
    age:"20",



 }
 delete obj1.name;
 for (var key in obj)
 {
    console.log(key,obj2[key]);
 }
 //do while loop--when we have to print the first reult and than check condition
var a=19
do{
    console.log("hey");
    a++
}
while(a<15)


//callback function
setTimeout(function()       //2000--2s 5000--5s asynchronous
{
   console.log("It execute after 2s")
},2000);

//first class function--function can be treated as value in Js
//var s=function(){}
function abcd3(a)
{
    a();
}
abcd3(function(){console.log("hey");})
//array [ ] it is a object array={0:1,1:45}//index value pair    array[-1]=2 it will execute
//Array.isArray([])--true 




    
 