module.exports.run = (bot, message, args, discord) => {
	let member = message.mentions.members.first();
	if (!member) return message.channel.send("You need to mention someone.");
	let embed = new discord.RichEmbed()
	.setTitle(`BORK!`)
	.setImage(`https://orig00.deviantart.net/3bd3/f/2015/141/0/5/bork_by_chiibe-d8u6uv3.gif`)
	.setDescription(`( ͡° ͜ʖ ͡°) <@${member.id}> was borked by <@${message.author.id}>`)
	.setThumbnail(bot.user.avatarURL)
	.setColor(`RANDOM`)
	message.channel.send({ embed });
}

module.exports.help = { 
	name: "bork"
}
