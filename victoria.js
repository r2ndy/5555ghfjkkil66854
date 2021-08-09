const Discord = require('discord.js');
const Util = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "#";

/////
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~randy online ~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  randy " ] servers! [ " ${client.guilds.size} " ]`); 

});

client.on('message', message => {

    if (message.content === prefix + 'help') {
        var embed = new Discord.MessageEmbed()
            .setAuthor(
                `${client.user.username} `,
                `${client.user.displayAvatarURL()}`
            )
            .setTimestamp()
            .setColor(`${message.member.displayHexColor}`)
            .setTitle(`${client.user.username}`)
            .setFooter(
                `Requested By ${message.author.tag}`,
                `${message.author.displayAvatarURL({ dynamic: true })} `
            )
            .setThumbnail(client.user.displayAvatarURL())
.setDescription(`
\`${prefix}الاوامر\`
////////////////////
#avatar ---> عرض صورتك 
#user ---> معلومات حسابك
#server ---> معلومات السيرفر
#lock ---> قفل الشات 
#unlock ---> فتح الشات 
#clear ---> مسح الشات 
#list ban ---> الاعضاء المبندين 
`);

//تقدر تضيف اكثر اوامر

        message.author.send(embed);
    }
});

////// افتااار //// 

 client.on('message', message =>{
    
    if(message.content.startsWith(prefix + 'avatar')){
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.mentions.users.first()
        if (!user && !args[1]) {
           
           const uavatar = message.author.avatarURL({ size: 4096, dynamic: true })
           const embed3 = new Discord.MessageEmbed()
               .setTitle(`${message.member.user.username} avatar`)
               .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
               .setColor('RANDOM')
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1] === 'server') {
        
        const savatar = message.guild.iconURL({ size: 4096, dynamic: true })
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} avatar`)
            .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)
            .setColor('RANDOM')
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
               
       
               if (user) {
                   const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
       
       
                   const embed = new Discord.MessageEmbed()
                       .setTitle(`${user.username} avatar`)
                       .setDescription(`[Avatar URL of **${user.username}**](${avatar})`)
                       .setColor('RANDOM')
                       .setImage(avatar)
                   message.channel.send(embed)
               }
       }
  })
/////////////////////////////////////////////////////
//////// يوزر /////



/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on("message", function(msg) {
if (!prefixes[msg.guild.id]) prefixes[msg.guild.id] = {
        prefix: `#`,
    };
    var prefix = prefixes[msg.guild.id].prefix;
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .addField(
        ":globe_with_meridians: **Server name  : **",
        `**[ ${msg.guild.name} ]**`,
        true
      )
      .addField(
        ":earth_africa: ** server location  :**",
        `**[ ${msg.guild.region} ]**`,
        true
      )
      .addField(
        ":military_medal:** roles :**",
        `**[ ${msg.guild.roles.size} ]**`,
        true
      )
      .addField(
        ":bust_in_silhouette:** Member  :**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )

      .addField(
        ":pencil:** Text channels  :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        ":loud_sound:**  voice channels :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "voice").size} ]**`,
        true
      )
      .addField(
        ":crown:** server owner  :**",
        `[ *${msg.guild.owner}* ]`,
        true
      )
      .addField(":id:** server id  :**", `**[ ${msg.guild.id} ]**`, true)
      .addField(
        ":date:** createdAt : **",
        msg.guild.createdAt.toLocaleString()
      );
    msg.channel.send({ embed: embed });
  }
          
});

/////////////////////////////////////////////////////////
///////// فقل و فتح الشات ////////////
client.on('message', message =>{
  if(message.content.startsWith(prefix +"lock")) { 

    var embed = new Discord.MessageEmbed()
    .setDescription(`**You Have 20s To Type The Password**`)
    message.channel.send(embed)

    message.channel.awaitMessages(response => response.content === '1234', {//تقدر تغير الباسور
      max: 1,
      time: 200000,
      errors: ['time'],    
    })
  
    .then(() => {
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return 
      message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');


  let everyone = message.guild.roles.cache.find(message => message.name === '@everyone');
          message.channel.createOverwrite(everyone, {
                 SEND_MESSAGES: false
              })
              .then((collected) => {
                const embed = new Discord.MessageEmbed()
                  .setColor("#48ff00")
                  .setDescription(`** تـم قـفل الـروم 🔒**`)
                  .setFooter(`By ${message.author.username}`)
                  message.channel.send(embed)            
                  console.log(collected.author)
 });
});
}
 });
   client.on('message', message =>{
if(message.content === prefix +"unlock"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(message => message.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               SEND_MESSAGES: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor("#48ff00")
                .setDescription(`** تـم فتـح الـروم 🔓**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
})
}
});

//////////////////////////////////////////////////////
///////// مسح الشات //////
 client.on('message', message => {
       var prefix = "#";
      if (message.content.startsWith(prefix + 'clear')) {
          if(!message.channel.guild) return message.reply('** This command only for servers **');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You Don't Have [*MANAGE_MESSAGES*] Permission `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({
  
    limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));
  message.channel.send(`__${messagecount}__`+ " **Message Deleted  :skull_crossbones: **" ).then(msg => msg.delete(3000));
};

});

/////////////////////////////////////////
//////// الاعضاء المبندين ///////
client.on('message', message => {
  if (message.content.startsWith(prefix + "list ban")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`> :small_orange_diamond: **Server Ban List :** ${bans.size}`))
      .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);


