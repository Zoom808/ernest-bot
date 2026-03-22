const Discord = require("discord.js")
exports.run = (clients, message, args) => {
var zoomID = "801590943068717116"

if (message.author.id !== zoomID) {
  
    message.reply(`Your name is ${message.author} right?`)
    return;
}

else {
    message.reply(`You're the great ${message.author} of course.`)
}

}

exports.name = "me"