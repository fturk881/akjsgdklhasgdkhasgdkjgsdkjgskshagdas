const Discord = require ('discord.js')
const db = require ('quick.db')
exports.run = async (client,message,args)=> {
    if (!message.member.hasPermission('ADMINISTARTOR')) return
  const ayarlar = require ('../ayarlar.json')
  const prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(!args[0]) return message.channel.send(`Lütfen Örnek Bir Emoji İsmi Giriniz \ Örnek Kullanım:**!emoji-ekle <emojismi> <emojilink>**`)
  if(!args[1]) return message.channel.send(`**Lütfen Geçerli Bir Link Giriniz**`)

  if(args[1].includes(".gif")) {
  message.guild.emojis.create(`${args[1]}`, `${args[0]}`)
  .then(emoji => 
    message.channel.send( new Discord.MessageEmbed().setTitle('<a:yuvarlaktik:860181032732590090> Başarılı').setDescription(`<a:saok:851802470417039392>  <a:${emoji.name}:${emoji.id}> İşte Hareketli Emojin Burda`).setColor('GREEN')))
  .catch(console.error);
  }
  if(args[1].includes(".png")) {
    message.guild.emojis.create(`${args[1]}`, `${args[0]}`)
  .then(emoji => 
    message.channel.send(new Discord.MessageEmbed().setTitle('<a:yuvarlaktik:860181032732590090> Başarılı').setDescription(`<a:saok:851802470417039392>  <:${emoji.name}:${emoji.id}> İşte Emojin Burda`).setColor('GREEN')))
  .catch(console.error);
  }
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ekle','ekleemoji',],
    permLevel: 0
}
  
exports.help = {
    name: 'emojiekle',
    description: 'Sunucuya etiket eklemenize yarar.',
    usage: 'etiket'
}