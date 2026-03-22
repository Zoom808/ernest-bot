const Discord = require("discord.js")
exports.run = (client, message, args) => {


message.channel.send('Loading data').then (async (msg) => {
    msg.delete()
    
message.channel.send(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.`);
  
})
   
}

exports.name = "ping"