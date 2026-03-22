const express = require("express");
const app = express();
const zoomID = "801590943068717116"

app.listen(3000, () => {
  console.log("ma bot do be working")
})

app.get("/", (req, res) => {
  res.send("wassup");
})

const Discord = require("discord.js")
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  allowedMentions: ["users"],
  partials: ["CHANNEL"], 
  });
const fs = require("fs");
const prefix = "+"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}
client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName.toLowerCase())

if (message.author.id !== zoomID) {
  if(!command) return message.channel.send({content: "This command doesn't exist bruh"})
}  
else {
  if(!command) return message.channel.send({content: "Unfortunately my honorable Lord, I have to inform you that the command you just typed doesn't exist in my repertory. I really apologize for not being good enough for your highness. Maybe you could try typing the command again?"})
}
  command.run(client, message, args)
}

})

client.login(process.env.token);

client.on("ready", () => {
    client.user.setActivity("+help", { type: "PLAYING"})
})


