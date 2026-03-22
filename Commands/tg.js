const Discord = require("discord.js")
exports.run = (clients, message, args) => {
var zoomID = "801590943068717116"

if (message.author.id !== zoomID) {
  
    message.channel.send(`tg ${message.author}`)
    return;
}

else {
    message.channel.send(`I would never say such thing to you my king ${message.author}`)
}

}

exports.name = "tg"


