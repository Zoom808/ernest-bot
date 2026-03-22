const Discord = require("discord.js")
exports.run = (client, message, args) => {
      
      const heads = "Heads!"

      const tails = "Tails!"

        
var coinArray = [heads, tails];
    let randomAnswer = coinArray[Math.floor(Math.random() * coinArray.length)];
    message.reply(randomAnswer);


}

exports.name = "coinflip"
      