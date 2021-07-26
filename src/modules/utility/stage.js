const { ReactionUserManager, Message } = require("discord.js");
const mongoose = require("mongoose");
const User = require("../utility/UserSchema");
var myDateString = Date.now();

module.exports = {
	name: "stage",
	guildOnly: true,
	execute: async (arlo, msg, args) => {
		mongoose.connect("",{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false


		}).then(()=>{
			

		}).catch((error) =>{
			
			
			msg.channel.send("Error connecting to DB")
			
		});
			
				if (msg.channel.id === '867398389465219082') {
					if (!args.join(" ")) return msg.channel.send(`**Application Not Sent**\n No reason Specified`);
					else{
						const newUser = await User.create({
							username: msg.author.id,
							performance: args.join(" "),
							date1: myDateString
	
						});
						const savedUser = await newUser.save();
						msg.channel.send('**Application Sent**\n You have joined the queue :tada:');
						msg.delete({timeout:50})
					}
				}	
		
	}
}
