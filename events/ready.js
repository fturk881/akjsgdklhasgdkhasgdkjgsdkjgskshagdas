const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')



module.exports = client => {
console.log('________________________________')
console.log(`Kullanıcı İsmi     : ${client.user.tag}`)
console.log(`Sunucu Sayısı      : ${client.guilds.cache.size}`)
console.log(`Kullanıcı Sayısı   : ${client.guilds.cache.reduce((a,b) => a+b.memberCount,0).toLocaleString()}`)
//console.log(`Shard Sayısı       : ${Shard}`)
console.log('________________________________')
  
  client.user.setStatus('idle')
  var oyun = [
`!top kalp en iyi sunucular !`,
` Servers ${client.guilds.cache.size} | User ${client.guilds.cache.reduce((a,b) => a+b.memberCount,0).toLocaleString()}`,
`?davet Beni Davet Et`
]
//PLAYING Oynuyor //WATCHING İzliyor
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0)
    client.user.setActivity(oyun[random], {type: 'PLAYING'})
  }, 2 * 2500)
}