const { ReactionUserManager } = require("discord.js");
const mongoose = require("mongoose");
const User = require("../utility/UserSchema");


module.exports = {
	name: "review",
	disabled: false,
	guildOnly: true,
	staffOnly: true,
	permissions: ["KICK_MEMBERS", "EMBED_LINKS", "MANAGE_CHANNELS"],
	execute: async (arlo, msg, args) => {
		mongoose.connect("",{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false


		}).then(()=>{
			var items = Array("Beatboxing","Singing", "Jokes", "Other");
			var item = items[Math.floor(Math.random() * items.length)];
			if (msg.channel.id === '867398472129839124') {
				msg.delete({timeout:100});
				const result1 = User.findOneAndDelete({}).sort({date1: 'asc'}).exec(async(err, docs) => {
					if(!docs) return msg.channel.send(`**There's nobody queued up!**\n Do a!stage **${item}** to join the queue`);
					else{
						const user = await msg.guild.members.fetch(docs.username);
				
					msg.channel.send(`**Arlo Stage**\n**Next up is:** ${user.displayName}\n **They will be performing** ${docs.performance}`);

				};
				
				
	
				
			});
		}
			

		}).catch((error) =>{
			
			msg.channel.send("Error connecting to DB")
			console.log(error);
			
		});
		


		
		
	
		
	}
}
