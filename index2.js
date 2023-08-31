//object

//1.blank object

var a={};

//2.Filled object

var clock={
    name:"analog",  //name is property
    price:500,
    color:"silver",
    type:"hanging clock",
    time:function()   //time is a method because its value is function
    {
      console.log("Its 12'o clock")
    }

}

//u can change the value
clock.name="digital";

//var adds itself to the window object whereas let and const  doesn't adds

//heap memory--store the temporary data for calculation or processing
