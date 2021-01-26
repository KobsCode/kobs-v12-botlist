const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../botlist.json')

exports.run = async(client, message, args) => {

  if(message.channel.id !== botlist.başvurukanal) return message.channel.send(`<#${botlist.başvurukanal}> sadece bu kanalda kullanabılır.`)


let botid = args[0]
let prefix = args[1]
if(!botid) return message.channel.send("Bir Bot İd Gir.")
message.delete()
  
message.channel.send("✅ **|** Sertifika İsteğiniz Gönderildi Lütfen Bekleyiniz.")
  
  client.channels.cache.get(botlist.log).send(`<@&${botlist.yetkili}>`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
.setDescription(`<@${botid}> Adlı Bota Sertifika İstenmiştir Sahip : ${message.author}`)
client.channels.cache.get(botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "sertifika"
}


