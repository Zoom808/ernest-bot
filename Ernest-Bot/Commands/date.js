const Discord = require("discord.js")
exports.run = (client, message, args) => {

var currentdate = new Date().toLocaleString("pt-BR", {timeZone: "America/Montreal"})

var splitformat = currentdate.split(" ")
var joinformat = splitformat.join(" at ")
  

  
message.reply("`" + joinformat + "`")

}

exports.name = "date"