const Discord = require ('discord.js')
const db = require ('quick.db')
exports.run = async (client,message,args)=> {
        if (message.channel.type === 'dm') return
        if (!args[0]) return message.reply('Lütfen Bir Emoji Adı Gir')
        var emojiadı = args[0]
        var emoji = message.guild.emojis.cache.find(emote => emote.name === emojiadı)
        if (!emoji) return message.reply(`**Üzgünüm Ama __${emojiadı}__ Adlı Emoji Bulunamadı,Sadece İsim Şeklinde Belirtin.**`)
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setDescription(`<:notzaman:859378084528914433>  **${emoji.name}** Adlı Emojinin Bilgileri`)
        .addField("Emoji Adı", `**${emoji.name}**`)
        .addField("Emoji ID'si", `**${emoji.id}**`)
        .addField("Emoji URL'si", `**${emoji.url}**`)
        .setImage(emoji.url)
        .addField('Emoji Hareketlimi', `**${emoji.animated ? 'Evet, Hareketli' : 'Hayır, Hareketsiz'}**`)
        .setFooter('Emoji Şu Tarihte Oluşturuldu => ')
        .setTimestamp(emoji.createdTimestamp)
        .setColor('YELLOW')
        message.channel.send(embed)
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}
  
exports.help = {
    name: 'emojibilgi',
    description: 'Sunucuya etiket eklemenize yarar.',
    usage: 'etiket'
}