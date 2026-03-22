const Discord = require("discord.js")
exports.run = (clients, message, args) => {

message.reply("The info command gives you basic information about any user in the server. It gives you:\n`The creation date of the user's Discord account.`\n`When the user joined the server.`\n`The user's ID.`\n`The user's roles in the server.`\nTo use the command, simply type: `+info @user`\nNote that if you don't tag anyone or give wrong arguments, the command will give you information about yourself. EX: `+info` or `+info banana`")

}

exports.name = "infohelp"