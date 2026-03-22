exports.run = (clients, message, args) => {

const filter = m => {
  return m.author.id === message.author.id
}
   
const collector = message.channel.createMessageCollector({
  filter,
  max: 1,
  time: 1000 * 20
})
   
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let arguments = args.join(" ")


   
const split = arguments.split(",")
  let firstNum = parseInt(split[0])
  let secondNum = parseInt(split[1])



if (!arguments) {

  let firstNum = 1
  let secondNum = 10
  const randomOutput = randomNumber(firstNum, secondNum)

message.reply(`**${randomOutput}**\n*I gave you a random number between 1 and 10 since you didn't give me any arguments. For more info on how to use arguments, use +randomhelp.*`)
}

else if(isNaN(firstNum) && isNaN(secondNum)) {
  
  message.reply("You didn't do it right! Do you want me to show you how to add arguments to this command? y/n")

  collector.on("collect", message => {

  let collected = message.content
      if (collected.toLowerCase() === "y" || collected.toLowerCase() === "yes" ) {
        
        message.reply("Ok! If you want a random number between two specific integers, use `+random <FirstNumber>, <SecondNumber>`\nHere's an example: `+random 150,200`\nAlso, if you want the first number to be 1, you don't have to type `+random 1,100` you can just use `+random 100`")
      }
    
})

}
else if (firstNum == 0 && secondNum == 0) {
  message.reply("**0**")
}

else if (!secondNum) {
  if (firstNum == 0) {
    message.reply("**0**")
  }
  else {
  const randomBetween = randomNumber(1, firstNum)
  message.reply(`**${randomBetween}**`)
  }
}
  
else { 
const randomOutput = randomNumber(firstNum, secondNum)
message.reply(`**${randomOutput}**`)
}

   
}

exports.name = "random"
  