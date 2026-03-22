const Discord = require("discord.js")
exports.run = (client, message, args) => {

message.reply("no")

const filter = m => {
  return m.author.id === message.author.id
}

const collector = message.channel.createMessageCollector({
  filter,
  max: 1,
  time: 1000 * 20
})

collector.on("collect", message => {

let collected = message.content
let matches = collected.match(/\d+/)


if (true) {
 message.channel.send("")
}        
else {
 message.channel.send("")
}


})

}

exports.name = "age"
