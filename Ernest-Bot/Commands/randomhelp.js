const Discord = require("discord.js")
exports.run = (clients, message, args) => {

message.reply("The random command gives you a random number between 1 and 10 by default. If you want a random number between two specific integers, use `+random <FirstNumber>, <SecondNumber>`\nHere's an example: `+random 150,200`\nAlso, if you want the first number to be 1, you don't have to type `+random 1,100` you can just use `+random 100`")

}

exports.name = "randomhelp"