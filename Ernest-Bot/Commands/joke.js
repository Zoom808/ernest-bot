const Discord = require("discord.js")
exports.run = (client, message, args) => {

const fetch = require('node-fetch')

fetch('https://some-random-api.ml/joke')
    .then(res => res.json())
    .then(json => {
        message.channel.send(json.joke)
    });

}

exports.name = "joke"