const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

/////
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~randy online ~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  randy " ] servers! [ " ${client.guilds.cache.size} " ]`); 

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
-lock ---> قفل الشات 
-unlock ---> فتح الشات 
-clear ---> مسح الشات 
-server ---> معلومات السيرفر 
 
`);

//تقدر تضيف اكثر اوامر

        message.author.send(embed);
		message.channel.send("done in your dm")
    }
});
/////////////////
//// فك الباند ////// 

////// افتااار //// 

 
/////////////////////////////////////////////////////
//////// يوزر 

/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on("message", message => {
    if (!message.guild) return;
    if (message.content.startsWith(prefix + "server")) {
        const text = message.guild.channels.cache.filter(r => r.type === "text").size;
        const voice = message.guild.channels.cache.filter(r => r.type === "voice").size;
        const chs = message.guild.channels.cache.size;
        const roles = message.guild.roles.cache.size;
        const emojis = message.guild.emojis.cache.size;
        const online = message.guild.members.cache.filter(m => m.presence.status === 'online').size;
        var vlevel;
        const vlevelCheck = message.guild.verificationLevel;
        if (vlevelCheck === "NONE") vlevel = '0';
        if (vlevelCheck === "LOW") vlevel = '1';
        if (vlevelCheck === "MEDIUM") vlevel = '2';
        if (vlevelCheck === "HIGH") vlevel = '3';
        if (vlevelCheck === "VERY_HIGH") vlevel = '4';
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .addFields({
                name: `🔠 Server Name`,
                value: message.guild.name,
                inline: true
            }, {
                name: `🆔 Server ID`,
                value: message.guild.id,
                inline: true
            }, {
                name: `📆 Created On`,
                value: moment(message.guild.createdAt).format("YYYY/MM/DD, HH:mm:ss a") + '\n' + moment(message.guild.createdAt, "YYYYMMDD").fromNow(),
                inline: true
            }, {
                name: `👑 Owner By`,
                value: '<@!' + message.guild.owner.user.id + '>',
                inline: true
 
            }, {
                name: `👥 Members (${message.guild.memberCount})`,
                value: `**` + online + `** Online | **` + message.guild.premiumSubscriptionCount + `** Boosts ✨`,
                inline: true
            }, {
                name: `💬 Channels (` + chs + `)`,
                value: `**` + text + `** Text | **` + voice + `** Voice`,
                inline: true
            }, {
                name: `🌍 Others`,
                value: `**Region:** ` + message.guild.region + `\n` + `**Verification Level:** ` + vlevel,
                inline: true
            }, {
                name: `🔐 Roles (` + roles + `)`,
                value: `To see a list with all roles use **` + prefix + `roles**`,
                inline: true
            }, {
                name: `😀 Emojis (` + emojis + `)`,
                value: `To see a list with all emojis use **` + prefix + `emojis**`,
                inline: true
            })
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
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
client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear" || command == "مسح") {
        message.delete({ timeout: 0 })
        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms ❌**`);
        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms ❌**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.channel.send(
                    (`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});

/////////////////////////////////////////
//////// 


////////////////////
////////رول /////////
  
///////////////////////////////////////////
///////////////////////////// التوب 

////////////////////////////////////////////////////
///////////


//////////////////////////////////////////////////
////////// فك الميووت /////////// 
client.on("message", (message) => {
  try {
    if (!message.guild) {
      return;
    } else if (!message.content.startsWith(prefix)) {
      return;
    } else if (message.author.bot) {
      return;
    }
    if (message.content.startsWith(prefix + "-mute")) {
      let muteRole = "873617778664407050"; //تعديل مهم ، حط أيدي الميوت رول
      let targetedMember = message.mentions.members.first();
      if (targetedMember.roles.cache.has(muteRole)) {
        message.channel.send("**هذا الشخص قد أخذ ميوت كتابي من قبل **");
      } else if (!targetedMember.roles.cache.has(muteRole)) {
        targetedMember.roles
          .add(muteRole)
          .then(() => {
            message.channel.send(
              `**${message.member.displayName}**- ${targetedMember} Has Been Muted.`
            );
          })
          .then(() => {
            message.guild.channels.cache.forEach((ch) => {
              ch.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
              });
            });
          });
      }
    } else if (message.content.startsWith(prefix + "-unmute")) {
      let targetedMember = message.mentions.members.first();
      let muteRole = "873617778664407050";
      if (!targetedMember.roles.cache.has(muteRole)) {
        return message.channel.send("**هذا الشخص غير معاقب.**");
      } else {
        targetedMember.roles.remove(muteRole).then(() => {
          message.channel.send(
            `**${message.member.displayName}**- ${targetedMember} Has Been Unmuted.`
          );
        });
      }
    }
  } catch {
    /**/
  }
}); 

/////////////////
client.login(process.env.BOT_TOKEN);



