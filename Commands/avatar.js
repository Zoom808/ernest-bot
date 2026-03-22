const Discord = require("discord.js")
exports.run = (clients, message, args) => {
  
const zoomID = "801590943068717116"
  
let avatarUrl = message.author.displayAvatarURL()

let argument = args.join(" ")

const member = message.mentions.members.first() || message.member;

const avatarEmbed = new Discord.MessageEmbed()
        .setTitle("Here's your avatar:")
        .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setFooter("(it sucks btw)")
        .setColor("RANDOM")

const taggedEmbed = new Discord.MessageEmbed()
        .setTitle(`Here's ${member.user.username}'s avatar:`)
        .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setFooter("(it sucks btw)")
        .setColor("RANDOM")

const zoomEmbed = new Discord.MessageEmbed()
        .setTitle(`Here's ${member.user.username}'s avatar:`)
        .setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setFooter("(what a nice avatar!)")
        .setColor("RANDOM")

if (member.user.id === zoomID) {
message.channel.send({embeds : [zoomEmbed]})
}
else if (member === message.member) {
message.channel.send({embeds : [avatarEmbed] })
}
else {
message.channel.send({embeds : [taggedEmbed]})
}
  
  
}

exports.name = "avatar"
