let player1=102

let player2=123

function getFastestRaceTime()
{
  if(player1<player2)
  {
    return player1
  }
  else if(player1>player2)
  {
    return player2
  }
  else{
    return player1
  }
}

// let fastestRace=getFastestRaceTime()
function racetime()
{
    return player1+player2
}

let totaltime=racetime()

//Random Number --we can use it where we require to make games

console.log()

let randomNumber=Math.random()

console.log(randomNumber)
//it generates a random number between 0 and 1 not including 1(inclusive of 1)

let floorNumber=Math.floor(3.4567)   //3
console.log(floorNumber)

let hasCompleteCourse=true
let givesCertificate=true
if(hasCompleteCourse===true && givesCertificate===true)
{
    generateCertificate()
}
function generateCertificate()
{
    console.log("Genrating Certificate")
   
}