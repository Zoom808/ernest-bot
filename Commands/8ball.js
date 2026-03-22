const Discord = require("discord.js")
exports.run = (client, message, args) => {
      
      const ans1 = "Yes."

      const ans2 = "No."

      const ans3 = "Maybe."

      const ans4 = "Absolutely."

      const ans5 = "Absolutely not."

      const ans6 = "I don't know."

      const ans7 = "Probably."

      const ans8 = "Probably not."

      const ans9 = "You did not find anything else to ask me?"
      
      const ans10 = "Is it really important?"

      const ans11 = "If you order me an iced tea from the Andromeda galaxy, I'll make sure the answer is yes."

      const ans12 = "Who knows?"

      const ans13 = "No idea. What about you, do you prefer tea or coffee?"

      const ans14 = "I find it sad that you ask me this question..."

      const ans15 = "*“Judge a man by his questions rather than by his answers.” \n-Voltaire*"

      const ans16 = "Life could be dream. (only if you stopped asking me stupid questions)"

      const ans17 = "*“There are some questions that shouldn't be asked until a person is mature enough to appreciate the answers.” \n-Anne Bishop, Daughter of the Blood*"

      const ans18 = "*“Perhaps depression is caused by asking oneself too many unanswerable questions.” \n-Miriam Toews, Swing Low*"

      const ans19 = "*“Courage doesn’t happen when you have all the answers. It happens when you are ready to face the questions you have been avoiding your whole life.” \n-Shannon L. Alder*"

      const ans20 = "*“Life is filled with unanswered questions, but it is the courage to seek those answers that continues to give meaning to life. You can spend your life wallowing in despair, wondering why you were the one who was led towards the road strewn with pain, or you can be grateful that you are strong enough to survive it.” \n-J.D. Stroube, Caged by Damnation*"

      const ans21 = "Your question doesn't even make sense."


    let question = args.join(" ")

    let position = question.search(/0m/i);

    let positionzoomID = question.search(/801590943068717116/i);

    let positionAbdel = question.search(/master/i)

    let positionAbd = question.search(/abd/i)

    let positionLord = question.search(/lord/i)

    let positionzoom = question.search(/zoom/i)
    
    let positionz0 = question.search(/z0/i)

  if (!question) {
      return message.channel.send({content: "You have to ask a question like this: +8ball question"})
      }

    else if (position !== -1 || positionzoomID !== -1 || positionAbdel !== -1 || positionAbd !== -1 || positionLord !== -1 || positionz0 !== -1 || positionzoom !== -1) {
        message.channel.send("I can't answer questions concerning the Lord.")
        }
      
    else if (message.author.id === "809570281773465610") {
      
    var stfuArray = ["shut the fuck up", "stop talking to me", "i don't like you", "bro just kys", "SHUT THE FUCK UP", "BRO I DON'T GIVE A FUCK", "stop asking me these dumbass questions", "stfu bitch"];
    let randomstfuAnswer = stfuArray[Math.floor(Math.random() * stfuArray.length)];
      
    message.reply(randomstfuAnswer);
      
    }

        
    else {
      
    var answerArray = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans10, ans11, ans12, ans13, ans14, ans15, ans16, ans17, ans18, ans19, ans20, ans21];
    let randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];
    message.reply(randomAnswer);
      
    }

}

exports.name = "8ball"
      