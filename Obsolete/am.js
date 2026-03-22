const Discord = require("discord.js")
exports.run = (clients, message, args) => {

var zoomID = "801590943068717116"

const agree1 = "You're absolutely right my Lord."

const agree2 = "I agree with what you just said my Lord."

const agree3 = "You are absolutely right sir."

const agree4 = "Saying the opposite of what you just said would be lying my king."

const agree5 = "Yes, you are right."

const agree6 = "As your creation and your loyal servant, I agree with everything that you just said my honorable Lord."

const agree7 = "Absolutely!"

const agree8 = "Isn't is obvious that you are the one telling the truth here my virtuous Lord."

if (message.author.id === zoomID) {

  var agreeArray = [agree1, agree2, agree3, agree4, agree5, agree6, agree7, agree8];
      let randomAgree = agreeArray[Math.floor(Math.random() * agreeArray.length)];
      message.channel.send(randomAgree);
}

    else {
    message.channel.send("This command can only be used by the Lord.")
    }

}

exports.name = "LordExclusive"