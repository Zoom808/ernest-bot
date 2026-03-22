const Discord = require("discord.js")
exports.run = (client, message, args) => {
      
      const image1 = new Discord.MessageEmbed()
      .setImage("https://media4.giphy.com/media/jKsbw1hlnM5auWtzEw/giphy.gif")

      const image2 = new Discord.MessageEmbed()
      .setImage("https://media4.giphy.com/media/nSJKWSdy5h4OdIcUkF/200w.gif?cid=82a1493bgjvx32y4m7wzzjbv3bzntcdgv1n69j9ee4fyedpb&rid=200w.gif&ct=g")

      const image3 = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/YarxOZRSUn4AAAAd/hasbulla.gif")

      const image4 = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/cvtiyAnJZiMAAAAC/hasbulla-hasbuk.gif")

      const image5 = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/pAopdLQCRaMAAAAM/honeycardi-hasbulla.gif")

      const image6 = new Discord.MessageEmbed()
      .setImage("https://media2.giphy.com/media/vjZkgd6XlhPHSZgQNY/200.gif")

      const image7 = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/Lw_EBHZU4-AAAAAd/hasbulla-m4kktruck.gif")

      var embedArray = [image1, image2, image3, image4, image5, image6, image7];
      let randomEmbed = embedArray[Math.floor(Math.random() * embedArray.length)];
      message.channel.send({ embeds : [randomEmbed] });

}

exports.name = "hasbulla"