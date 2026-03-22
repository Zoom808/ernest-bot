const Discord = require("discord.js")
exports.run = (client, message, args) => {

const linksEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} used +links`)
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .addFields(
      { name: 'Login Simulator', value: 'https://login-simulator.z00000m.repl.co/', inline: true },
        { name: 'String Transformator', value: 'https://string-transformation.z00000m.repl.co/', inline: true },
        { name: 'Distance Calculator', value: 'https://distance-calculator.z00000m.repl.co/', inline: true },
    )
    .setTimestamp()
    

message.channel.send({ embeds: [linksEmbed] });

}

exports.name = "links"