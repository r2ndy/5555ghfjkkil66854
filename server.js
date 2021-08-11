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
-avatar ---> عرض صورتك 
-server ---> معلومات السيرفر
-lock ---> قفل الشات 
-unlock ---> فتح الشات 
-clear ---> مسح الشات 

 
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
client.on('message', message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men
    } else {
      heg = message.author
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned
    } else {
      h = message.member
    }
    moment.locale('ar-TN');
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(`RANDOM`)
      .addField('**JOINED DISCORD :**', `${moment(heg.createdTimestamp).format('YYYY/M/D')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``, true)
      .addField('**JOINED SERVER :**', `${moment(h.joinedAt).format('YYYY/M/D')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
      .setThumbnail(heg.avatarURL);
    message.channel.send(id)
  }
});

/////////////////////////////////////////////////////
/////// معلومات السيرفر ///// 
client.on('message', message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
    if (!message.channel.guild) return message.reply(' ');
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(), true)
      .addField("**👑 Owned by**", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField(`**👥 Members (${message.guild.memberCount})**`, `**${
        message.guild.members.filter(c => c.presence.status !== "ONLINE").size}** **Online**`, true)
      .addField('**💬 Channels **', `**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  ' + `**${message.guild.channels.filter(m => m.type === 'voice').size}** `, true)
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(`**🔐 Roles (${message.guild.roles.size})**`, `To see a list with all roles use **#roles** `, true)
      .setColor(`BLACK`)
    message.channel.sendEmbed(embed)

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
 
    if (message.content.startsWith(prefix + 'role')) {
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


//////////////////////////////////////////////////
////////// فك الميووت /////////// 
 niro.on("message", message => {

  if (message.content == ("-unmute")) {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = niro.channels.find(gg => gg.name === "log");
    let muteRole = niro.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد لديك رتبه الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .channel.send(new Discord.RichEmbed().setDescription(`
        **Command: unmute**

Unmutes a member.

**Usage:**
#unmute (user)

**Examples:**
#unmute @ニロ
#unmute 157605500488384512`))
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم فك الميوت عن:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(niro.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
            .catch(console.error);
        });
    }
  }
});
//////////////////////
///////////// باند وفك الباند /////////

client.on('message', message => {
    if (message.content == ("-ban")) {
               

        const mmss = require('ms');
        let reason = message.content.split(' ').slice(3).join(' ');
        let time = message.content.split(' ')[2];
        let guild = message.guild;

        let usermention = message.mentions.users.first();

        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: **You** need `BAN_MEMBERS` Permissions to execute `ban`')
        }

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: **I** need `BAN_MEMBERS` Permissions to execute `ban`')
        }

    

        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to Ban them!')
        }

        if (message.author.id === usermention.id) {
            return message.reply('You cant punish yourself :wink:')
        }

        if (!time) {
            return message.reply(`How much time ? **Usage:**\`-ban [@mention] [1d] [Reason]\``)
        }

        if (!time.match(/[1-7][s,m,h,d,w]/g)) {
            return message.reply('I need a valid time ! look at the Usage! right here: **Usage:**`-ban [@mention] [1m] [Reason]`')
        }

        if (!reason) {
            return message.reply(`You must give me a reason for the ban **Usage:**\`-ban [@mention] [1d] [Reason]\``)
        }

        if (!message.guild.member(usermention).bannable) {
            return message.reply('This member is above me in the `role chain` Can\'t ban them')
        }

        message.reply("This user has been banned form the server.");

        usermention.send(`You've just got banned from ${guild.name}  \n State reason: **${reason}** \n **Disclamer**: If the ban is not timed and Permanent you may not appeal the **BAN**!`)
        message.guild.ban(usermention, 7);
        setTimeout(() => {
            message.guild.unban(usermention.id);
        }, mmss(time));
       message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Ban:",
                value: `**Banned:** ${usermention.username}#${usermention.discriminator}\n**Moderator:** ${message.author.username} \n**Duration:** ${mmss(mmss(time), {long: true})} \n**Reason:** ${reason}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© SOKA"
            }
          }
        });
    }
});
client.login(process.env.BOT_TOKEN);



