const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#";

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
#avatar ---> عرض صورتك 
#server ---> معلومات السيرفر
#lock ---> قفل الشات 
#unlock ---> فتح الشات 
#clear ---> مسح الشات 

 
`);

//تقدر تضيف اكثر اوامر

        message.author.send(embed);
		message.channel.send("done in your dm")
    }
});
/////////////////
//// فك الباند ////// 


////// افتااار //// 

 client.on('message', message =>{
    
    if(message.content.startsWith(prefix + 'avatar')){
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.mentions.users.first()
        if (!user && !args[1]) {
           
           const uavatar = message.author.avatarURL({size: 4096, dynamic: true })
           const embed3 = new Discord.MessageEmbed()
               .setTitle(`${message.member.user.username} avatar`)
               .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
               .setColor('RANDOM')
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1] === 'server') {
        
        const savatar = message.guild.iconURL()({size: 4096, dynamic: true })
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} avatar`)
            .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)
            .setColor('RANDOM')
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
               
       
               if (user) {
                   const avatar = user.displayAvatarURL({size: 4096, dynamic: true });
       
       
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
//////// يوزر 
client.on('message', async message => {
    var moment = require("moment");
    if (message.content.startsWith(prefix + "user")) {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return message.channel.send(
            new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("❌" + ` **You Can't Use This Command In DM's!**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
        var args = message.content.split(" ").slice(1);
        let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1]);
        moment.locale('ar-TN');
        const db = require('quick.db')
        const flags = user.flags || await user.fetchFlags();
        await db.set(`${user.id}`, [])
        if (flags.toArray().includes('DISCORD_PARTNER')) db.push(`${user.id}`, "<:6714discordpartner:839529122467938375>")
        if (flags.toArray().includes('HYPESQUAD_EVENTS')) db.push(`${user.id}`, "<:hypesquadbadge:839529122472656977>");
        if (flags.toArray().includes('HOUSE_BRILLIANCE')) db.push(`${user.id}`, "<:briliance:839529152414744588>");
        if (flags.toArray().includes('HOUSE_BRAVERY')) db.push(`${user.id}`, "<:bravery:839529152071729192>");
        if (flags.toArray().includes('HOUSE_BALANCE')) db.push(`${user.id}`, "<:balance:839529122756952074>");
        if (flags.toArray().includes('BUGHUNTER_LEVEL_2')) db.push(`${user.id}`, "<:hunterlv2:839529122900475964>");
        if (flags.toArray().includes('BUGHUNTER_LEVEL_1')) db.push(`${user.id}`, "<:hunterlv1:839529122912010282>");
        if (flags.toArray().includes('EARLY_SUPPORTER')) db.push(`${user.id}`, "<:earlysupporter:839529152100565032>");
        if (flags.toArray().includes('VERIFIED_DEVELOPER')) db.push(`${user.id}`, "<:9developer:839529122878455848>");
        if (flags.toArray().includes('EARLY_VERIFIED_DEVELOPER')) db.push(`${user.id}`, "<:9developer:839529122878455848>");
        let nitro = user.avatarURL({ dynamic: true });
        if (nitro.includes('gif')) db.push(`${user.id}`, "<:nitro:839616875184783411>");
        var emojis = db.get(`${user.id}`);
        var statusFull;
        var status = user.presence.status;
        if (status.includes('dnd')) statusFull = '🔴 | DND';
        if (status.includes('offline')) statusFull = '⚫ | Offline';
        if (status.includes('online')) statusFull = '🟢 | Online';
        if (status.includes('idle')) statusFull = '🟡 | Idle';
        var bot = false;
        if (user.bot) bot = true;
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(user.username, user.avatarURL({ dynamic: true }))
            .setColor(message.member.displayHexColor)
            .addFields({
                name: "**Name:**",
                value: user.username,
                inline: true
            }, {
                name: "**Tag:**",
                value: '#' + user.discriminator,
                inline: true
            }, {
                name: "**Id:**",
                value: user.id,
                inline: true
            }, {
                name: "**Badge:**",
                value: emojis,
                inline: true
            }, {
                name: "**User Presence:**",
                value: statusFull,
                inline: true
            }, {
                name: "**Bot:**",
                value: bot,
                inline: true
            }, {
                name: "**Joined Discord:**",
                value: `${moment(user.createdTimestamp).format('YYYY/M/D')} **\n** \`${moment(user.createdTimestamp).fromNow()}\``,
                inline: true
            }, {
                name: "**Joined Server:**",
                value: `${moment(user.joinedAt).format('YYYY/M/D')} \n \`${moment(user.joinedAt).fromNow()}\``,
                inline: true
            })
            .setThumbnail(user.avatarURL({
                dynamic: true,
                format: 'png',
                size: 1024
            }))
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
    }
})


/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on("message", function(msg) {
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL())
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
        `**[ ${msg.guild.roles.cache.size} ]**`,
        true
      )
      .addField(
        ":bust_in_silhouette:** Member  :**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )

      .addField(
        ":pencil:** Text channels  :**",
        `**[ ${msg.guild.channels.cache.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        ":loud_sound:**  voice channels :**",
        `**[ ${msg.guild.channels.cache.filter(m => m.type === "voice").size} ]**`,
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
client.on('message', message => {
 
    if (message.content.startsWith(prefix + '#role')) {
        var args = message.content.split(' ');
        var mention = message.mentions.members.first();
        var user = message.guild.member(mention);
        var role = message.guild.roles.cache.filter(r => r.name === args[3]).first() || message.mentions.roles.first() || message.guild.roles.cache.filter(r => r.id === args[3]).first()
        if (message.author.bot) return;
        if (args[1] === "add") {
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
            if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
            if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
            user.roles.add(role).then((m) => {
                setTimeout(() => {
                    m.delete()
                }, 1000 * 60 * 10)
                return message.channel.send('1')
            })
        } else if (args[1] === "remove") {
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
            if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
            if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
            user.roles.remove(role).then((m) => {
                if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setColor("RED"));
                if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
                setTimeout(() => {
                    m.delete()
                }, 1000 * 60 * 10)
                return message.channel.send('2')
            })
        } else if (args[1] === "all") {
            message.guild.members.cache.forEach(m => {
                const user = message.guild.member(m)
                user.roles.add(role)
            })
            return message.channel.send('3 ');
        }
    }
});

///////////////////////////////////////////
///////////////////////////// التوب 

////////////////////////////////////////////////////
///////////
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(prefix + "mute")) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **I Can't Mute Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        let member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        var user = message.guild.member(member)
        if (!user) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **Please Mention/ID Same One!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (user.id === message.author.id) return message.reply(
            new Discord.MessageEmbed().setColor("YELLOW")
            .setDescription("⚠" + " **WTF Are You Doing ??**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (user.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed().setColor("YELLOW")
            .setDescription("⚠" + " **WTF Are You Doing ??**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (!message.guild.member(user).bannable) return message.reply(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **Soory I Can't Mute Same One High Than Me >_<**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        let muteRole = message.guild.roles.cache.find(n => n.name === 'Muted')
        if (!muteRole) {
            message.guild.roles.create({
                data: {
                    name: "Muted",
                }
            }).then(async(role) => {
                await message.guild.channels.cache.forEach(channel => {
                    channel.overwritePermissions([{
                        id: role.id,
                        deny: ["SEND_MESSAGES"]
                    }]);
                })
            })
        }
        user.roles.add(muteRole)
        var time = message.content.split(' ')[2]
        if (!time) time = '24h'
        message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription("✅" + ` **${user} Has Ben Muted By <@!${message.author.id}>, For a ${ms(ms(time))}**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
        setTimeout(() => {
            user.roles.remove(muteRole);
        }, ms(time));
        return;
    }
})

//////////////////////////////////////////////////
////////// فك الميووت /////////// 
client.on('message', msg => {
const error = "❌";
const timeing = "⏱";
const success = "✅";
const lodeing = "🤔";
  let args = msg.content.split(" ");
  if (args[0] === prefix + 'unmute') {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **I Can't Kick Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    let user = msg.mentions.members.first()
    if (!user) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **Please Mention Same One!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (user.id === msg.author.id) return msg.reply(new Discord.MessageEmbed().setDescription(lodeing + " **WTF Are You Doing ??**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.guild.member(user).bannable) return msg.reply(new Discord.MessageEmbed().setDescription(error + " **I Can't Unmute one high than me >_<**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    var muteRole = msg.guild.roles.cache.find(n => n.name === 'Muted')
    if (!muteRole) return msg.channel.send(new Discord.MessageEmbed().setDescription(lodeing + ` **WTF Is That ?? [ Super Error ]**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    user.roles.remove(muteRole)
    msg.channel.send(lodeing + " **Processing The Unmute Function**").then((m) => {
      m.edit(success + " **Processing is complete**")
    })
    msg.channel.send(new Discord.MessageEmbed().setDescription(success + ` **${user} Has Ben Unmuted By <@!${msg.author.id}>**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
  }
})
//////////////////////
///////////// باند وفك الباند /////////

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(prefix + "ban")) {
        var args = message.content.split(' ')
        var member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
        var trueUser = message.guild.member(member);
        var reason = message.content.split(' ').slice(3).join(' ') || 'undefined';
        var time = args[2] || '1y'
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **I Can't Bannd Any Member In This Server Becuse I Don't Have `BAN_MEMBERS` Permission!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **You Need `BAN_MEMBERS` Permission To Use This Command!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        if (!trueUser) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID Same One!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        if (!reason) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Type Reason!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        trueUser.ban({ reason: reason }).then(() => {
            message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription("✅" + ` **<@!${trueUser.user.id}> banned from the server ! :airplane: by:<@${message.author.id}> **`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
            setTimeout(() => {
                message.guild.fetchBans().then(bans => {
                    if (bans.size == 0) return;
                    bans.forEach(ban => {
                        if (ban.user.id == trueUser.user.id) {
                            message.guild.members.unban(ban.user.id);
                        } else console.log(ban.user.id + " => " + trueUser.user.id)
                    });
                });
            }, ms(time))
        })
    }
})

client.login(process.env.BOT_TOKEN);



