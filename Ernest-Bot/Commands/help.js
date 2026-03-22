const Discord = require("discord.js")
exports.run = (client, message, args) => {

let commandsAmount = client.commands.size - 3

var commanduser = message.author.username

const helpEmbed = new Discord.MessageEmbed()
	.setColor("RANDOM")
	.setTitle(`There are currently ${commandsAmount} commands:`)
	.setAuthor({name: `[${commanduser} used +help]`})
	.addFields(
		{ name: "+8ball", value: "Answers your yes or no questions."},
		{ name: "+age", value: "Tells you how long you've been alive in days. (approximation)"},
    { name: "+avatar", value: "Shows you your avatar. (profile picture)"},
    { name: "+cat", value: "Displays images of cats."},
    { name: "+coinflip", value: "Tosses a coin. (heads or tails)"},
    { name: "+date", value: "Shows current date."},
    { name: "+hasbulla", value: "Displays GIFS of the great Hasbulla."},
    { name: "+hug", value: "Displays anime hugging GIFS."},
    { name: "+info", value: "Gives you basic info about any user in the server. Use +infohelp to know more about this command."},
    { name: "+ip", value: "Generates random IP."},
    { name: "+joke", value: "Tells a random joke. (not funny)"},
    { name: "+me", value: "You need a bot to tell you who you are?"},
    { name: "+ping", value: "Displays bot latency. (ping)"},
    { name: "+quiz", value: "What's 9+10?"},
    { name: "+random", value: "Gives you a random number between 1 and 10. (You can also choose the numbers. Use +randomhelp for more info.)"},
    { name: "+rank", value: "Tells you your rank as a hunter."},
    { name: "+say", value: "Says whatever you want it to say. (can't make him type commands)"},
    { name: "+tg", value: "Try it for yourself."},
    { name: "+wink", value: "Displays anime winking GIFS."},
    { name: "+you", value: "Makes the bot introduce himself."}, 
 	)
	.setTimestamp()
	.setFooter({ text: "Ernest is a bot developed by @Zoom#9523"});

message.channel.send({ embeds: [helpEmbed] });

}
