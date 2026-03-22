const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(" - ")
  const embed = new Discord.MessageEmbed()
  .setTitle(`There are currently ${client.commands.size} commands:`)
  .setDescription(commands)
  .setImage('https://c.tenor.com/Q3CQ4c378I8AAAAC/batman-joker.gif')
  .setFooter("Use the prefix +")
  .setColor("LIGHT_GREY")
  message.channel.send( { embeds : [embed] } )

}

exports.name = "help"

