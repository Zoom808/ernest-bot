const Discord = require("discord.js")
exports.run = (client, message, args) => {
      
      const image1 = new Discord.MessageEmbed()
      .setImage("https://th-thumbnailer.cdn-si-edu.com/O6R5rvWq2T3y5GylqRPrMd5Zezw=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/7f/56/7f56b237-f727-49e5-a520-0783cd488b50/6257901626_bf091c1ce9_o.jpg")

      const image2 = new Discord.MessageEmbed()
      .setImage("https://cdn.branchcms.com/190jW12rXV-1028/images/norway-rat-auburn-maine.jpg")

      const image3 = new Discord.MessageEmbed()
      .setImage("https://images.lpcdn.ca/924x615/201202/06/467482-aussi-appele-rat-brun-surmulot.jpg")

      const image4 = new Discord.MessageEmbed()
      .setImage("https://www.ctvnews.ca/polopoly_fs/1.5273701.1611100009!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg")

      const image5 = new Discord.MessageEmbed()
      .setImage("https://i.natgeofe.com/n/94c5dfb9-c3b9-4bee-8be0-2e90e906ccf3/01-rats-cities-coronavirus-nationalgeographic_2721591_2x3.jpg")

       const image6 = new Discord.MessageEmbed()
      .setImage("https://nationalzoo.si.edu/sites/default/files/animals/norwayrat-001-reverse.jpg")

      var embedArray = [image1, image2, image3, image4, image5, image6];
      let randomEmbed = embedArray[Math.floor(Math.random() * embedArray.length)];
      message.channel.send({ embeds : [randomEmbed] });

}

exports.name = "rat"