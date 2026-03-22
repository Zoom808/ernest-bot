const Discord = require("discord.js")
exports.run = (client, message, args) => {

var currentdate = new Date().toLocaleString("pt-BR", {timeZone: "America/Montreal"})



var splitformat = [ currentdate.split(" ")[1].split(":")[0], currentdate.split(" ")[1].split(":")[1] ].join(":")
  
var hour = parseInt(currentdate.split(" ")[1].split(":")[0])
  
if (hour >= 20 || hour < 5) {
message.reply(`Go to sleep bro it's ${splitformat}`)
}
else {
message.reply(`It's ${splitformat}`)  
}

  
}

exports.name = "date"