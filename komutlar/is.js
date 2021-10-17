const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");


exports.run = async (client, message, args) => {

  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let s = `${moment(client.user.createdAt).format("DD")} ${
    aylar[moment(client.user.createdAt).format("MM")]
  } ${moment(client.user.createdAt).format("YYYY HH:mm:ss")}`;

  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setTitle(`Magama+ | İstatistik`)
    .addField("**<a:dev:853318233858637843>  Botun Sahibi:**", `<@${ayarlar.sahip}>`, false)
    .addField(
      "**<:ye:850743715488333844> Hizmet Verdiği Kullanıcı Sayısı:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "**<a:merhaba:841699582672633882> Hizmet Verdiği Sunucu Sayısı:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "**<:kanal:853317527014211584>  Hizmet Verdiği Kanal Sayısı:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
    .addField("**<:js:853317951620513812>  Discord.JS sürüm:**", "v" + Discord.version, false)
    .addField("**<:js:853317951620513812>  Node.JS sürüm:**", `${process.version}`, false)
    .addField("**<:aktif:850744502839017472> Uptime Süresi**", duration)
    .addField("**<a:ayarlar:851392094953406464>  Botun Kuruluş Tarihi**", s);
  return message.channel.send(msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "istatislik"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};