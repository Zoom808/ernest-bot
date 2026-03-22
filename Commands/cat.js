const Discord = require("discord.js")
exports.run = (client, message, args) => {
const axios = require('axios')
    axios
    
      .get('https://api.thecatapi.com/v1/images/search')
      .then((res) => {
        console.log('RES:', res.data[0].url)
        message.channel.send(res.data[0].url)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }



exports.name = "cat"