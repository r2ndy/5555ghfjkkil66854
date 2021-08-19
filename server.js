const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = "#"
//////////////
client.on('ready', () => {

    client.user.setActivity("Genius Server ",{type: 'Streaming'})

});
//////////////


client.on('message', message => {
 //OT bad boy
 if(message.content.startsWith(prefix + "server")){ 
	if (message.author.bot || !message.guild) return message.reply("this command for server only")
 
   //OT bad boy
    var EMBED = new Discord.MessageEmbed()
    .setTitle("server info") 
    .addField("server name", `${message.guild.name}`)
    .addField("server id", `${message.guild.id}`)
    .addField("server owner", `${message.guild.owner}`)
    .addField("members", `${message.guild.memberCount}`)
    .addField("Server roles", `${message.guild.roles.cache.size}`)
    .addField("server channels", `${message.guild.channels.cache.size}`)
    .addField("server region", `${message.guild.region}`)
  .addField("Verification Level", `${message.guild.verificationLevel}`)
.addField("created in", `${message.guild.createdAt.toLocaleString()}`)
.addField("Boost", `${message.guild.premiumSubscriptionCount}`)
 
 
.setColor("BLUE")
.setFooter(`Requsted by ${message.author.username}`)
    message.channel.send(EMBED)
  }
})

client.on("message", message => {
	if(message.content.startsWith(prefix + "id")) {
		  var args = message.content.split(" ").slice(1);
		let mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!mention) mention = message.member;
//CopyRight X3mk + Naar Codes
const userFlags = mention.user.flags.toArray();
//CopyRight X3mk + Naar Codes

let embedx3 = new Discord.MessageEmbed()
		.setColor(`RANDOM`)
		.setThumbnail(`${mention.user.displayAvatarURL()}`)
		.setTitle(`**${mention.user.username}**`)
.addField(`User ID`, `**\`${mention.user.id}\`**`, true)
.addField(`Username`, `**\`${mention.user.username}\`**`, true)
		.addField(`Discriminator:`, `**\`#${mention.user.discriminator}\`**`, true)
								.setFooter(`${message.author.username}#${message.author.discriminator}`)
								message.channel.send(embedx3)
				
		}
})
//CopyRight X3mk + Naar Codes


client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "embed")){
    var args = badboy.content.split(" ").slice(1).join(" ") 
    if(!args) return 
    var embed = new Discord.MessageEmbed()
    .setDescription(`${args}`)
    .setColor("RANDOM")
    badboy.channel.send(embed)

     }
})//say [embed]



client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "say")){
      var args = badboy.content.split(" ").slice(1).join(" ") 
    if(!args) return 
    badboy.channel.send(args)
  }
})//say [no embed]

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "hide")){

    if(!badboy.member.hasPermission("MANAGE_CHANNELS")) return

     let everyone = badboy.guild.roles.cache.find(badboy => badboy.name === '@everyone');
          
   badboy.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: false,

    })
    badboy.channel.send("تم اخفاء الروم")
  }
})//hide
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "unhide")){

    if(!badboy.member.hasPermission("MANAGE_CHANNELS")) return

     let everyone = badboy.guild.roles.cache.find(badboy => badboy.name === '@everyone');
          
    badboy.channel.createOverwrite(everyone, {
      VIEW_CHANNEL: true,
      
    })
    badboy.channel.send("تم اضهار الروم")
  }
})//unhide




client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "lock")){

    if(!badboy.member.hasPermission("MANAGE_CHANNELS")) return

     let everyone = badboy.guild.roles.cache.find(badboy => badboy.name === '@everyone');
          
   badboy.channel.createOverwrite(everyone, {
      SEND_MESSAGES: false,

    })
    badboy.channel.send("تم قفل الروم")
  }
})//lock
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "unlock")){

    if(!badboy.member.hasPermission("MANAGE_CHANNELS")) return

     let everyone = badboy.guild.roles.cache.find(badboy => badboy.name === '@everyone');
          
    badboy.channel.createOverwrite(everyone, {
      SEND_MESSAGES: true,
      
    })
    badboy.channel.send("تم فتح الروم")
  }
})//unlock






client.on('message', badboy => {
    if(badboy.content.startsWith(prefix + 'ping')) {
        var embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Your Ping')
        .setDescription(`> Your Ping | ${client.ws.ping}`)
        .setTimestamp()
        badboy.channel.send(embed);
    }
});//ping



client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "nick")){
    if(!badboy.member.hasPermission("MANAGE_NICKNAMES")) return 
    let user = badboy.mentions.users.first()|| client.users.cache.get(badboy.content.split(' ')[1])
    if(!user) return 
    var args = badboy.content.split(" ").slice(2).join(" ")
    if(!user) return
    badboy.guild.member(user).setNickname(args)
    badboy.channel.send("done")
  }
})//nickname 





client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "kick")){
    if(!badboy.member.hasPermission("KICK_MEMBERS")) return 
        let user = badboy.mentions.users.first()|| client.users.cache.get(badboy.content.split(' ')[1])
if(!user) return badboy.channel.send("لا استطيع ايجاد العضو")
    badboy.guild.member(user).kick()
badboy.channel.send("تم طرد هاذا الشخص")
  }
})//kick

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "ban")){
    if(!badboy.member.hasPermission("BAN_MEMBERS")) return 
        let user = badboy.mentions.users.first()|| client.users.cache.get(badboy.content.split(' ')[1])
if(!user) return badboy.channel.send("لا استطيع ايجاد العضو")
    badboy.guild.member(user).ban()
badboy.channel.send("تم تبنيد هاذا الشخص")
  }
})//ban

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

client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "#role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`:x: **I Need Permissions !!**`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role1) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles.remove(role1).then(() => {
message.channel.send(`**✅ Changed roles for ${user.user}  removed ${role1.name}**`);
}).catch(err => message.channel.send("Error: **" + err.message + "**"));
user.roles.add(role1).then(() => {
        message.channel.send(
          `**✅ Changed roles for ${user.user} ${role1.name}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
}); 

const  d= ["749064659457409106"]
client.on("message", message => {
  if (message.content.startsWith(prefix + "restart")) {
    if (!d.includes(message.author.id)) return message.reply("You are not my owner.");
      message.channel.send("تم اعادة تشغيل البوت بنجاح").then(() => {
        client.destroy();
        client.login(config.token);
      });
    }
 
});

client.on("message", hosam => {
  if(hosam.content.startsWith(prefix+"avatar")) {
    if(hosam.channel.type=="dm") return hosam.channel.send(`❌ - **You can't use this command in dm**`);
    let args = hosam.content.split(" ").slice(1).join(" ");
    if(args == "server") {
      if(hosam.guild.icon == null) return hosam.channel.send(`❌ - **No server avatar`);
      let ser = new Discord.MessageEmbed()
      .setAuthor(hosam.guild.name,hosam.guild.iconURL({dynamic:true}))
      .setImage(hosam.guild.iconURL({size:2048 , dynamic:true}))
      .setDescription(`**[Avatar link](${hosam.guild.iconURL({dynamic:true})})**`)
      .setFooter(`Requested by ${hosam.author.tag}`,hosam.author.displayAvatarURL({dynamic:true}));
      hosam.channel.send(ser)
    } else {
      let user = hosam.mentions.users.first() || client.users.cache.get(args) || hosam.author;
      let member = new Discord.MessageEmbed()
      .setAuthor(user.tag,user.displayAvatarURL({dynamic:true}))
      .setImage(user.displayAvatarURL({size:2048 , dynamic:true}))
      .setDescription(`**[Avatar link](${user.displayAvatarURL({dynamic:true})})**`)
      .setFooter(`Requested by ${hosam.author.tag}`,hosam.author.displayAvatarURL({dynamic:true}));
      hosam.channel.send(member)
    }
  }
}) 
 


client.on("message", message => {
    if (message.content === (prefix + "help")) {
    const embed = new Discord.MessageEmbed()  
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
     
         
    #say --> لجعل البوت يعيد كلامك  بدون امبيد
    #embed --> لجعل البوت يعيد كلامك بامبيد
    #avatar --> اظهار صورتك الشخصية
    #hide --> لاخفاء الروم
    #unhide --> لعرض الروم 
    #lock --> لقفل الروم
    #unlock --> لفتح الروم 
    #server --> لعرض معلومات السيرفر
    #kick --> لطرد شخص
    #ban --> لتبنيد شخص
    #ping --> لعرض سرعت اتصال البوت
    #nick --> لتغير نيك نيم لشخص معين
    #role --> اعطار رول لشخص معين 
    #clear --> مسح الشات مع العدد 
    #invites --> عرض عدد الدعوات للسيرفر 
    #id --> عرض معلومات حسابك   
 
   `)
   message.author.send(embed)
   
   }
   });  

client.on('message',async message => {
  if(message.content.startsWith("#voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('**تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
client.on('message', msg => {
  if (msg.content.split(' ')[0].toLowerCase() == prefix + 'invites') {
    let guild = msg.guild
    var codes = [""]
    var nul = 0

    guild.fetchInvites()
      .then(invites => {
        invites.forEach(invite => {
          if (invite.inviter === msg.author) {
            nul += invite.uses
            codes.push(`discord.gg/${invite.code}`)
          }

        })
        if (nul > 0) {
          const e = new Discord.MessageEmbed()
            .addField(`${msg.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
            .setColor('#36393e')
          msg.channel.send(e)
        } else {
          var embed = new Discord.MessageEmbed()
            .setColor("#000000")
            .addField(`${msg.author.username}`, `لم تقم بدعوة أي شخص للسيرفر`)

          msg.channel.send({ embed: embed });
          return;
        }
      })
  }
}) 
 
///////////// mute ///// 
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



client.login(process.env.BOT_TOKEN);
