//ES6

//let and const --variable constants both add them to window object and braces scoped
//const a; --error bcz missing initialization

// var b=parm=>{}; b(12); ()--your choice to put if more than one parameter


//arrow function --basic/fat function,with one parameter,with implicit function
var c=()=>12;

//template literals --' '' ``
console.log(`hey there are 20 boys and 30 girls with total of ${20+30} student`)
//default parameters
function abcd(para)
{
  console.log(para)
}
abcd(15);
abcd();    //undefined
function abcd2(a=0,b=0)
{
    console.log(a,b)
}
abcd2(10,12);

//rest/spread --...
var a=[1,2,3];
var b=[...a];  //copyf its spread bcz we are spreading the values of a
function abcd3(a,b,c,d)
{
    console.log(a,b,c,d)
}
abcd3(1,2,2,3,4,5,6) //rest values will get ignore

function abcd4(a,b,...d)
{
    console.log(a,b,d)

}
abcd4(1,6,7,8,9,10,12,34)//here it is spread the rest values dont get ignore they are store in array d
//destructuring --
var f=[1,2,3];  //old fashion way to store index values var b=f[0]; var c=f[1]
var [b,c,d]=a;     //two variables b and c       
var [c,,e]=a;
var obj={
    name:"aksha",
    course:"betch"
}
var {name}=obj; //make name variable and give value aksha

//classes

//promises --resolve if code run otherwise if not than reject
//pending state, resolve state, reject state
var ans=new Promise((res,rej)=>{
   if(true) 
   {
    return res()
   }
   else{
    return rej();
   }

})
ans
.then(function(){
    console.log("resolve")
})
.catch(function(){
    console.log("reject")
})

var ans2=new Promise((res,rej)=>{
    var n=Math.floor(Math.random()*10);
    if(n<5)
    {
        return res();

    }
    else{
        return rej();
    }
})

ans2.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("above");
})

var ans3=new Promise(function(res,rej){
   return res("first case resolved");
})
ans3.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
       return res("second case resolved");
    })
})
//promise chain
var ans4=new Promise(function(res,rej){
    return res("First task")
})
var p2=ans4.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Second Task")
    })
})
p2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Third Task")
    })
})




//asyunc await
//  function abcd5()
// {
//   fetch(`https://randomuser.me/api/`)
//   .then(function(raw){
//     return raw.json();
//   })
//   .then(function(data){
//     console.log(data);
//   });
// }
async function abcd5()
{
    let raw=await fetch(`https://randomuser.me/api/`)
    let ans= await raw.json();
    console.log(ans)
}
abcd5();

//fetch 
//setTimeout and setInterval

// //*try catch

try{
  console.log(hey)
}
catch(err){
  console.log(err)
}
console.log("hey")
