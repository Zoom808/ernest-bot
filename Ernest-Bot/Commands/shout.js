const Discord = require("discord.js")
exports.run = (client, message, args) => {
const zoomID = "801590943068717116"
const dailyID = "445288727103930370"
const channelID = "899148909228748841"
  
const filter = m => {
return m.author.id === message.author.id
}

const collector = message.channel.createMessageCollector({
filter,
max: 1,
 time: 1000 * 3600
})

if (message.author.id === zoomID) {
  
  if (message.channel.type === "DM") {

      message.channel.send("Your next reply will be the shouted message, you may cancel this action by replying with `cancel`.")
  
  
  
    collector.on("collect", message => {
  
      let collected = message.content
  
        if (collected.toLowerCase() === "cancel") {
          message.channel.send("Successfully cancelled!")
        }
        else {
  
          client.channels.cache.get(channelID).send(message.content);
          message.channel.send(`Successfully sent your message in <#${channelID}>!`)
        }
  
    })
  }
  
  
  else {
   return;
  }
  
  
  
}
  
else {
  return;
}

}

exports.name = "shout"