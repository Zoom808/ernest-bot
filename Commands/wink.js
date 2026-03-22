const Discord = require("discord.js")
exports.run = (client, message, args) => {

const fetch = require('node-fetch')

fetch('https://some-random-api.ml/animu/wink')
    .then(res => res.json())
    .then(json => {
        message.channel.send(json.link)
    });

}

exports.name = "wink"