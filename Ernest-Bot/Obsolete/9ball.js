const Discord = require("discord.js")
exports.run = (client, message, args) => {

const fetch = require('node-fetch')


let uri = "https://8ball.delegator.com/magic/JSON/caca"
fetch(uri)
  .then(response => response.json())
  .then(json => {

let question = args.join(" ")

if (!question) {
  message.reply("fuck you")
}
else {
    let magic = json.magic
    message.reply(magic.answer + ".");
}

  })

}

exports.name = "9ball"
