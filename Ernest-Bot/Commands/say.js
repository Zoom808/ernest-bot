exports.run = (clients, message, args) => {
var dailymotionID = "445288727103930370"
var zukoID = "434721301161181184"
var kazeID = "478701533035495434"
var fenilID = "423615890874171412"
var zoomID = "801590943068717116"

    
let toSay = args.join(" ")

    let position = toSay.search(/zoom/i)
    let positionCommand = toSay.search(/[+]/)  
    let positionzoomID = toSay.search(/801590943068717116/i)
    let positionAbdel = toSay.search(/abdel/i)
    let positionAbd = toSay.search(/abd/i)
    let positionLord = toSay.search(/lord/i)
    let positionzoom = toSay.search(/zoom/i)    
    let positionz0 = toSay.search(/z0/i)
    let positionZO = toSay.search(/kader/i)


if (message.author.id !== zoomID) {

      if (position !== -1 || positionzoomID !== -1 || positionAbdel !== -1 || positionAbd !== -1 || positionLord !== -1 || positionz0 !== -1 || positionzoom !== -1 || positionZO !== -1) {
        message.channel.send("Don't make me say things about the Lord!")
      }
      else if (positionCommand !== -1) {
        message.channel.send("What are you trying to do?")
      }
      else if (!toSay) {
      message.channel.send("You have to tell me what I'm supposed to say!")
      }
      else {
          message.channel.send({content: toSay})
      }
  }

else {
    message.channel.send({content: toSay})
  }

}

exports.name = "say"

