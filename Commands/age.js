const Discord = require("discord.js")
exports.run = (client, message, args) => {

message.reply("Enter your age:")

const filter = m => {
  return m.author.id === message.author.id
}

const collector = message.channel.createMessageCollector({
  filter,
  max: 1,
  time: 1000 * 20
})

collector.on("collect", message => {

let collected = message.content
let matches = collected.match(/\d+/)
let average = parseInt(matches) + 0.5
let daysAlive = Math.round(average * 365)
// let numberofDays = daysAlive.toString()
const formatted = daysAlive.toLocaleString('fr-CA');
// let slicefirsttwo = daysAlive.slice(2);
// let slicelastthree = daysAlive.slice(0,2);


if (isNaN(average)) {
 message.channel.send("Your age must be a number dumbass.")
}
else if (average >= 1000000) {
 message.channel.send(`You've been alive for a very long time.`)
}
else if (matches < 0) {
 message.channel.send("How can your age be negative??")
}
else if (matches < 13 && matches > 0) {
 message.channel.send("You don't even have the right to be on Discord...")
}
                // else if (daysAlive > 9999) {
                // message.channel.send(`You've been alive for **approximately** ${slicelastthree} ${slicefirsttwo} days.`)
                // }                
else {
 message.channel.send(`You've been alive for approximately **${formatted}** days.`)
}


})

}

exports.name = "age"

