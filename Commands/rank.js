const Discord = require("discord.js")
exports.run = (clients, message, args) => {

var lordID = "899149186673549363"
var srankID = "942147054422065202"
var arankID = "942147180750327858"
var brankID = "942147460955013181"
var crankID = "942147695181721600"
var drankID = "942147816208367646"
var erankID = "942147942695993404"


if (message.member.roles.cache.has(lordID)) {
  message.reply("You're stronger than S-Rank hunters my Lord :flushed:");
}
else if (message.member.roles.cache.has(srankID)) {
  message.reply("You're an S-Rank, stronger than most hunters.");
}
else if (message.member.roles.cache.has(arankID)) {
  message.reply("You're an A-Rank, you must be really strong.");
}
else if (message.member.roles.cache.has(brankID)) {
  message.reply("You're a B-Rank, you may be an average hunter but you still make a difference in a strike squad.");
}
else if (message.member.roles.cache.has(crankID)) {
  message.reply("You're a C-Rank, an average hunter.");
}
else if (message.member.roles.cache.has(srankID)) {
  message.reply("You're a D-Rank, you may be weak, but at least you're stronger than E-Ranks :man_shrugging:");
}
else if (message.member.roles.cache.has(erankID)) {
  message.reply("You're an E-Rank, in other words, you suck big balls :rofl::rofl:");
}
else {
  message.reply("You don't even have a rank :skull:");
}

}

exports.name = "rank"
