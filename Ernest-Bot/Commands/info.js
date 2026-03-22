const Discord = require("discord.js")
const moment = require("moment")
exports.run = (client, message, args) => {

const Target = message.mentions.users.first() || message.author
const TargetJOINED = message.mentions.members.first() || message.member
const Member = message.guild.members.cache.get(Target.id)

const Response = new Discord.MessageEmbed()
.setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))
.setThumbnail(Target.displayAvatarURL({dynamic: true}))
.setColor("RANDOM")
.addField("UserID", `${Target.id}`, false)
.addField("Roles", `${Member.roles.cache.map(r => r).join(" ").replace("@everyone", " ")}`)
.addField("Joined server:", `<t:${parseInt(TargetJOINED.joinedTimestamp / 1000)}:R>`, true)
.addField("Created account:", `<t:${parseInt(Target.createdTimestamp / 1000)}:R>`, true)


message.reply( { embeds: [Response] })

  
}

exports.name = "info"