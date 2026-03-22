const Discord = require("discord.js")
exports.run = (clients, message, args) => {

var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));


message.channel.send(`IP: ${ip}`)


}

exports.name = "ip"

