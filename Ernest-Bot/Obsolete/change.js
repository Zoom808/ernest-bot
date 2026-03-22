exports.run = (clients, message, args) => {
var dailymotionID = "445288727103930370"
var zukoID = "434721301161181184"
var kazeID = "478701533035495434"
var fenilID = "423615890874171412"

    
let toSay = args.join(" ")
let positionCommand = toSay.search(/[+]/)

  var newStr = toSay.replace(/a/g, " negro ");


  
 if (positionCommand !== -1) {
    message.channel.send("What are you trying to do?")
  }
  else if (!toSay) {
  message.channel.send("`error: no args found.`")
  }
  else {
      message.channel.send(`${message.author.username} said: ${newStr}`)
  }


}

exports.name = "change"

