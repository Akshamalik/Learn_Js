//higher order functions are the function which accepts a function in a papmeter aor return a function or both
// 
//it can accept the another function or return another function eg-forEach
//this- points to window
//constructor function--when we have to make elements of same type with some similar properties
//A function whenever invoked with "new" keyword returns an object. if we use "this" keyword inside that function it returns an object with all the properties and ,ethods mentioned inside  that function 
function box(color)
{
    this.width=12;
    this.heigth=15;
    this.color=color;
    this.shape=sqaure;
}
var redbox=new box("green");
var bluebox=new box("blue");
var whitebox=new box("white");

//first class function
//new function --creates a blank object

//immidietly invoke function iife --make private variables
// var ans=(function()
// {
//   var a=12;
//   return(
//     getter:function () {
//         console.log(a);
//     },
// setter:function(val){
//     a=val
// }
//   )
// })()

//prototype inheritance

var website={
    logo:true,
    design:true,
    html:true,
    css:true,
    js:true
}
var facebook={
    facebooklogo:true,
    login:true
}

facebook.__proto__=website

//this keyword changes its value in different context
console.log(this);  //window --global scope

function abcd()
{
    console.log(this) //window --function scope

}

var obj={
    message:function()
    {
        console.log(this);
    }
}
obj.message();//object --methode scope

//In any method this refers to parent object
//event listener --this refers towhatever written before addeventListener
// var button =document.querySelector("button");
// button.addEventListener("click",function(){
//    console.log(this.style.color="red");
// })
//call apply and bind --

function abcd2()
{
    console.log(this);
}

var obj2={age:24}
abcd2.call(obj)

function abcd3(val1,val2)
{
    console.log(this,val1,val2);
}

var obj2={age:24}
// abcd3.call(obj,1,2)

abcd.apply(obj,[1,2]) //aplly said to use only two parameters
// abcd.bind(obj); it binds obj with abcd 
//var binded=abcd.bind(obj)


//pure functions
function abcd5(a,b)
{
    return a*b
}
var ans2=abcd5(1,2)
//below is a impure function
function abcd4(val)
{
    return Math.random()*val;
}
var ans1=abcd4(4);









