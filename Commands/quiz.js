const Discord = require("discord.js")
exports.run = (client, message, args) => {

  
const filter = m => {
  return m.author.id === message.author.id
}

const collector = message.channel.createMessageCollector({
  filter,
  max: 1,
  time: 1000 * 20
})
  
      const que1 = "What's 9+10"

        
      message.reply(que1)


collector.on("collect", message => {

let collected = message.content
let matches = collected.match(/\d+/)

  
 if (parseInt(matches) === 21) {
        message.reply("Correct!")
 }    
      else {

       var answerArray = [1, 2, 3];
        
       let randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];

if (randomAnswer === 1) {
          
        message.reply("Dumbass...")
        message.reply("Wrong!")
        message.reply("How can't you solve this??")
        message.reply("I thought this one was easy...") 
}     

if (randomAnswer === 2) {
          
        message.reply("Dumbass...")
        message.reply("...")
        message.reply("How can't you solve this??")
        message.reply("I thought this one was easy...")
}

if (randomAnswer === 3) {
        message.reply("Ok, you're retarted.")
        message.reply("This is elementary school math...")
        message.reply("Mhmm... <@!801590943068717116> you should ban him.")
        message.reply("How can you be this dumb...")
}
     
      }
  




  
})

}             

exports.name = "quiz"