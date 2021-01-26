const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../botlist.json')

exports.run = async(client, message, args) => {
	if(!message.member.roles.cache.has(botlist.yetkili)) return message.channel.send("Yeterli yetkin Yok.")
  if(message.channel.id !== botlist.kanalyetkili) return message.channel.send(`<#${botlist.kanalyetkili}> sadece bu kanalda kullanabılır.`)

let botid = args[0]
let sahip = args[1]
if(!botid) return message.channel.send("Bir Bot İd Gir.").then(a => a.delete(20000))
if(!sahip) return message.channel.send("Sahip İd Giriniz.").then(a => a.delete(20000))
message.delete()
  
message.channel.send("✅ **|** Başarıyla Botu Onayladınız.")
  
   message.guild.members.cache.get(botid).roles.add(botlist.botrol)
 message.guild.members.cache.get(sahip).roles.add(botlist.onaylıüye)
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
.setDescription(`:white_check_mark:  **|**  <@${botid}> Adlı Bot Onaylandı Bot Sahip : <@${sahip}>.`)
client.channels.cache.get(botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "onayla"
}


